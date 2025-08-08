import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';
import { z } from 'zod';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not found. Database operations will be disabled.');
}

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Brevo configuration
const brevoApiKey = process.env.BREVO_KEY;

if (!brevoApiKey) {
  console.warn('Brevo API key not found. Email operations will be disabled.');
}

// Validation schema
const preorderSchema = z.object({
  email: z.string().email('Invalid email address'),
  planId: z.enum(['one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant']),
  accountSize: z.number().refine(size => [10000, 25000, 50000, 100000, 200000].includes(size), {
    message: 'Invalid account size'
  }),
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
    // Note: Email functionality is temporarily disabled to avoid build issues
    // with sib-api-v3-sdk package. Will be re-enabled with a compatible email service.
    if (brevoApiKey && false) { // Temporarily disabled
      try {
        // TODO: Implement alternative email service (e.g., Nodemailer, Resend, or direct SMTP)
        console.log('Email sending skipped - feature temporarily disabled for build compatibility');
        console.log(`Would send welcome email to: ${email} for plan: ${planId} with account size: ${accountSize}`);
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
          errors: error.issues 
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