export interface ChallengeData {
  target: string;
  dailyLoss: string;
  maxDrawdown: string;
  inactivity: string;
  split: string;
  price: string;
}

export interface ChallengeType {
  id: string;
  name: string;
  popular: boolean;
  description?: string;
}

export interface AccountSize {
  id: string;
  display: string;
  value: number;
}

export interface Challenge {
  type: string;
  sizes: {
    [key: string]: ChallengeData;
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}