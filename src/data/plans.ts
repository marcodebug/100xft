import { Plan, AccountSize } from '@/types/plan';

export const plans: Plan[] = [
  {
    id: 'one-phase-fx',
    label: 'One-Phase FX',
    steps: ['assessment', 'funded'],
    rules: {
      10000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 100
      },
      20000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 200
      },
      50000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 500
      },
      100000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 1000
      },
      200000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 1199
      },
      400000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 2399
      }
    }
  },
  {
    id: 'two-phase-fx',
    label: 'Two-Phase FX',
    steps: ['step1', 'step2', 'funded'],
    rules: {
      10000: {
        profitTarget: 8, // step1: 8%, step2: 5%
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 80
      },
      20000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 160
      },
      50000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 400
      },
      100000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 800
      },
      200000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 999
      },
      400000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 1999
      }
    }
  },
  {
    id: 'crypto-one',
    label: 'One-Phase Crypto',
    steps: ['assessment', 'funded'],
    rules: {
      10000: {
        profitTarget: 9,
        dailyLossLimit: 3,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 125
      },
      25000: {
        profitTarget: 9,
        dailyLossLimit: 3,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 250
      },
      50000: {
        profitTarget: 9,
        dailyLossLimit: 3,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 625
      },
      100000: {
        profitTarget: 9,
        dailyLossLimit: 3,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 1250
      },
      200000: {
        profitTarget: 9,
        dailyLossLimit: 3,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 1499
      },
      // 400k removed for crypto challenges per request
    }
  },
  {
    id: 'crypto-two',
    label: 'Two-Phase Crypto',
    steps: ['step1', 'step2', 'funded'],
    rules: {
      10000: {
        profitTarget: 6, // step1: 6%, step2: 9%
        dailyLossLimit: 3,
        maxDrawdown: 9,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 99
      },
      25000: {
        profitTarget: 6,
        dailyLossLimit: 3,
        maxDrawdown: 9,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 160
      },
      50000: {
        profitTarget: 6,
        dailyLossLimit: 3,
        maxDrawdown: 9,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 379
      },
      100000: {
        profitTarget: 6,
        dailyLossLimit: 3,
        maxDrawdown: 9,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 699
      },
      200000: {
        profitTarget: 6,
        dailyLossLimit: 3,
        maxDrawdown: 9,
        inactivityDays: 30,
        profitSplit: 90,
        leverage: '5:1 BTC/ETH, 2:1 others',
        dailyCapLimit: 3,
        price: 1299
      },
      // 400k removed for crypto challenges per request
    }
  },
  {
    id: 'instant',
    label: 'Instant Funded',
    steps: ['funded'],
    rules: {
      10000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 400
      },
      25000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 1000
      },
      50000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 2000
      },
      100000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 4000
      }
    }
  },
  {
    id: 'futures',
    label: 'Futures (2-Phase)',
    steps: ['phase1', 'phase2', 'funded'],
    rules: {
      25000: {
        profitTarget: 9,
        dailyLossLimit: 5,
        maxDrawdown: 25,
        inactivityDays: 14,
        profitSplit: 90,
        leverage: '1:15',
        price: 313
      },
      50000: {
        profitTarget: 9,
        dailyLossLimit: 5,
        maxDrawdown: 25,
        inactivityDays: 14,
        profitSplit: 90,
        leverage: '3:30',
        price: 625
      },
      100000: {
        profitTarget: 9,
        dailyLossLimit: 5,
        maxDrawdown: 25,
        inactivityDays: 14,
        profitSplit: 90,
        leverage: '6:60',
        price: 1250
      },
      150000: {
        profitTarget: 9,
        dailyLossLimit: 5,
        maxDrawdown: 25,
        inactivityDays: 14,
        profitSplit: 90,
        leverage: '9:90',
        price: 1875
      }
    }
  }
];

// Default account sizes used for FX and Crypto
export const accountSizes: AccountSize[] = [10000, 20000, 50000, 100000, 200000, 400000];

// Futures uses a different set per user request
export const futuresAccountSizes: AccountSize[] = [25000, 50000, 100000, 150000];

// Instant accounts are limited to these sizes
export const instantAccountSizes: AccountSize[] = [10000, 25000, 50000, 100000];

// Crypto challenges use custom sizes: 10k, 25k, 50k, 100k, 200k
export const cryptoAccountSizes: AccountSize[] = [10000, 25000, 50000, 100000, 200000];

export const formatAccountSize = (size: AccountSize): string => {
  return `$${(size / 1000)}K`;
};

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`;
};

// Early Access program configuration
// Active until official launch in September; applied both in UI and checkout
export const earlyAccess = {
  discountPercent: 30, // 30% off
  endsAtISO: '2025-09-01T00:00:00.000Z',
};

export const isEarlyAccessActive = (): boolean => {
  try {
    return new Date() < new Date(earlyAccess.endsAtISO);
  } catch {
    return false;
  }
};