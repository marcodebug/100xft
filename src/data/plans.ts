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
      25000: {
        profitTarget: 10,
        dailyLossLimit: 5,
        maxDrawdown: 6,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 250
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
      25000: {
        profitTarget: 8,
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 200
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
        price: 313
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
      }
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
        price: 199
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
      }
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
        price: 299
      },
      25000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 699
      },
      50000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 1299
      },
      100000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 2499
      },
      200000: {
        dailyLossLimit: 5,
        maxDrawdown: 8,
        inactivityDays: 30,
        profitSplit: 80,
        leverage: '1:50',
        price: 4799
      }
    }
  }
];

export const accountSizes: AccountSize[] = [10000, 25000, 50000, 100000, 200000];

export const formatAccountSize = (size: AccountSize): string => {
  return `$${(size / 1000)}K`;
};

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`;
};