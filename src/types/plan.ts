export type AccountSize =
  | 10000
  | 20000
  | 25000
  | 50000
  | 100000
  | 150000
  | 200000
  | 400000;

export interface RuleBlock {
  profitTarget?: number;     // %
  dailyLossLimit?: number;   // %
  maxDrawdown?: number;      // %
  inactivityDays?: number;   // days
  dailyCapLimit?: number;    // +/- % (crypto)
  profitSplit?: number;      // %
  leverage?: string;         // "1:50", "5:1 BTC"
  price: number;             // USD
}

export interface Plan {
  id: 'one-phase-fx' | 'two-phase-fx' | 'crypto-one' | 'crypto-two' | 'instant' | 'futures';
  label: string;
  steps: string[];          // e.g. ['assessment', 'funded'] or ['step1','step2','funded']
  rules: Partial<Record<AccountSize, RuleBlock>>;
}

export interface PreorderData {
  email: string;
  planId: string;
  accountSize: AccountSize;
  joinDemo: boolean;
}