import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';
import { z } from 'zod';

// Import Brevo SDK
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not found. Database operations will be disabled.');
}

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Initialize Brevo client
const brevoApiKey = process.env.BREVO_KEY;

if (!brevoApiKey) {
  console.warn('Brevo API key not found. Email operations will be disabled.');
}

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
if (brevoApiKey) {
  apiKey.apiKey = brevoApiKey;
}

// Validation schema
const preorderSchema = z.object({
  email: z.string().email('Invalid email address'),
  planId: z.enum(['one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant']),
  accountSize: z.enum([10000, 25000, 50000, 100000, 200000]),
  joinDemo: z.boolean().default(false)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request data
    const validatedData = preorderSchema.parse(body);
    const { email, planId, accountSize, joinDemo } = validatedData;

    // Store in Supabase (if configured)
    if (supabase) {
      try {
        const { error } = await supabase
          .from('preorders')
          .insert({
            email,
            plan_id: planId,
            account_size: accountSize,
            join_demo: joinDemo,
            created_at: new Date().toISOString()
          });

        if (error) {
          console.error('Supabase error:', error);
          // Continue with email even if database fails
        }
      } catch (dbError) {
        console.error('Database operation failed:', dbError);
        // Continue with email even if database fails
      }
    }

    // Send welcome email via Brevo (if configured)
    if (brevoApiKey) {
      try {
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        sendSmtpEmail.to = [{ email }];
        sendSmtpEmail.sender = { 
          email: 'noreply@100xft.com', 
          name: '100XFT' 
        };
        sendSmtpEmail.subject = '🚀 Welcome to 100XFT - You\'re on the list!';
        sendSmtpEmail.htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to 100XFT</title>
          </head>
          <body style="font-family: Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 12px; padding: 40px; border: 1px solid #333333;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #ef4444; font-size: 36px; margin: 0; text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);">
                  100<span style="color: #ef4444;">X</span>FT
                </h1>
                <p style="color: #ef4444; margin: 5px 0 0 0; font-size: 16px;">Funded Trading Redefined</p>
              </div>
              
              <h2 style="color: #ffffff; text-align: center; margin-bottom: 20px;">Welcome to the Future of Prop Trading!</h2>
              
              <p style="color: #cccccc; line-height: 1.6; margin-bottom: 20px;">
                Thank you for joining our exclusive waitlist! You've successfully reserved your spot for the <strong style="color: #ef4444;">${planId.replace('-', ' ').toUpperCase()}</strong> challenge with a <strong style="color: #ef4444;">$${(accountSize / 1000)}K</strong> account size.
              </p>
              
              <div style="background-color: #1a1a1a; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #ef4444;">
                <h3 style="color: #ef4444; margin: 0 0 10px 0;">What's Next?</h3>
                <ul style="color: #cccccc; margin: 0; padding-left: 20px;">
                  <li>🚀 Early access to the platform before public launch</li>
                  <li>💎 Exclusive launch pricing for waitlist members</li>
                  <li>🎯 ${joinDemo ? 'Free demo challenge access (as requested)' : 'Priority access to demo challenges'}</li>
                  <li>📧 Updates on our Q4 2025 launch timeline</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://discord.gg/100xft" style="background: linear-gradient(45deg, #ef4444, #dc2626); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                  Join Our Discord Community
                </a>
              </div>
              
              <div style="border-top: 1px solid #333333; padding-top: 20px; margin-top: 30px; text-align: center;">
                <p style="color: #666666; font-size: 14px; margin: 0;">
                  Stay connected with us:<br>
                  <a href="https://twitter.com/100xft" style="color: #ef4444; text-decoration: none;">Twitter</a> | 
                  <a href="https://discord.gg/100xft" style="color: #ef4444; text-decoration: none;">Discord</a> | 
                  <a href="https://t.me/100xft" style="color: #ef4444; text-decoration: none;">Telegram</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `;

        await apiInstance.sendTransacEmail(sendSmtpEmail);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the whole request if email fails
      }
    }

    return Response.json({ 
      success: true, 
      message: 'Successfully added to waitlist' 
    });

  } catch (error) {
    console.error('Preorder API error:', error);

    if (error instanceof z.ZodError) {
      return Response.json(
        { 
          success: false, 
          message: 'Invalid data provided',
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return Response.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}