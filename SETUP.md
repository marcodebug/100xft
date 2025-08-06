# 100XFT Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Brevo (SendinBlue) Email Configuration  
BREVO_KEY=your_brevo_api_key
```

## Supabase Database Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project URL and anon key to `.env.local`

### 2. Create Preorders Table
Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE preorders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  plan_id VARCHAR(50) NOT NULL,
  account_size INTEGER NOT NULL,
  join_demo BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_preorders_email ON preorders(email);
CREATE INDEX idx_preorders_created_at ON preorders(created_at);
CREATE INDEX idx_preorders_plan_id ON preorders(plan_id);

-- Add RLS (Row Level Security) - optional
ALTER TABLE preorders ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for the preorder form)
CREATE POLICY "Allow public inserts" ON preorders
FOR INSERT TO public
WITH CHECK (true);
```

## Brevo Email Setup

### 1. Create Brevo Account
1. Go to [brevo.com](https://brevo.com) (formerly SendinBlue)
2. Create an account and verify your email
3. Go to SMTP & API → API Keys
4. Create a new API key and copy to `.env.local`

### 2. Email Templates (Optional)
The API route sends HTML emails directly, but you can also create Brevo templates:

1. Go to Templates → Email Templates
2. Create a new template with ID 1
3. Use these variables: `{{params.plan}}`, `{{params.size}}`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
Ensure you add the environment variables to your hosting platform:
- SUPABASE_URL
- SUPABASE_KEY  
- BREVO_KEY

## Testing the Preorder Flow

1. Fill out the preorder form on the landing page
2. Check Supabase dashboard for new entries in `preorders` table
3. Check email inbox for welcome email
4. Monitor server logs for any errors

## Troubleshooting

### Common Issues

**Database connection fails:**
- Verify SUPABASE_URL and SUPABASE_KEY are correct
- Check if RLS policies allow your operations
- Ensure the `preorders` table exists

**Email sending fails:**
- Verify BREVO_KEY is correct and active
- Check Brevo account limits and quotas
- Verify sender email domain (update in API route)

**Form validation errors:**
- Check browser console for detailed error messages
- Verify all required fields are filled
- Ensure email format is valid

### Logs
- Check server logs: `npm run dev` console output
- Check browser console for client-side errors
- Check Supabase logs in dashboard
- Check Brevo logs in dashboard

## Security Notes

- API route validates all input data with Zod
- Supabase RLS can be configured for additional security
- No sensitive data is stored client-side
- Email addresses are the only PII collected

## Future Enhancements

- Add email verification flow
- Implement unsubscribe functionality
- Add analytics tracking
- Create admin dashboard for viewing preorders
- Add webhook notifications