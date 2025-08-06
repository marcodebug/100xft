-- 100XFT Preorders Table Setup
-- Run this SQL in your Supabase SQL editor

-- Create the preorders table
CREATE TABLE IF NOT EXISTS preorders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  plan_id VARCHAR(50) NOT NULL CHECK (plan_id IN ('one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant')),
  account_size INTEGER NOT NULL CHECK (account_size IN (10000, 25000, 50000, 100000, 200000)),
  join_demo BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_preorders_email ON preorders(email);
CREATE INDEX IF NOT EXISTS idx_preorders_created_at ON preorders(created_at);
CREATE INDEX IF NOT EXISTS idx_preorders_plan_id ON preorders(plan_id);
CREATE INDEX IF NOT EXISTS idx_preorders_account_size ON preorders(account_size);

-- Enable Row Level Security
ALTER TABLE preorders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON preorders;
DROP POLICY IF EXISTS "Allow public reads for stats" ON preorders;

-- Allow public inserts (for the preorder form)
CREATE POLICY "Allow public inserts" ON preorders
FOR INSERT TO public
WITH CHECK (true);

-- Optional: Allow reading aggregated stats (no personal data)
CREATE POLICY "Allow public reads for stats" ON preorders
FOR SELECT TO public
USING (false); -- Disable for now, enable if you want public stats

-- Create a view for public stats (optional)
CREATE OR REPLACE VIEW public.preorder_stats AS
SELECT 
  plan_id,
  account_size,
  COUNT(*) as count,
  DATE_TRUNC('day', created_at) as signup_date
FROM preorders
GROUP BY plan_id, account_size, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;

-- Grant access to the stats view
GRANT SELECT ON public.preorder_stats TO public;

-- Verify table structure
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'preorders' 
AND table_schema = 'public'
ORDER BY ordinal_position;