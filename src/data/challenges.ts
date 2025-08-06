import { Challenge } from '@/types';

export const challengeData: Record<string, Challenge> = {
  'one-phase-fx': {
    type: 'One Phase FX',
    sizes: {
      '10k': { target: '8%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '80%', price: '$89' },
      '25k': { target: '8%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '80%', price: '$189' },
      '50k': { target: '8%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '85%', price: '$349' },
      '100k': { target: '8%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '90%', price: '$649' },
      '200k': { target: '8%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '90%', price: '$1,199' }
    }
  },
  'two-phase-fx': {
    type: 'Two Phase FX',
    sizes: {
      '10k': { target: '8% → 5%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '80%', price: '$69' },
      '25k': { target: '8% → 5%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '80%', price: '$149' },
      '50k': { target: '8% → 5%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '85%', price: '$299' },
      '100k': { target: '8% → 5%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '90%', price: '$549' },
      '200k': { target: '8% → 5%', dailyLoss: '5%', maxDrawdown: '10%', inactivity: '30 days', split: '90%', price: '$999' }
    }
  },
  'crypto': {
    type: 'Crypto Challenge',
    sizes: {
      '10k': { target: '10%', dailyLoss: '6%', maxDrawdown: '12%', inactivity: '30 days', split: '75%', price: '$99' },
      '25k': { target: '10%', dailyLoss: '6%', maxDrawdown: '12%', inactivity: '30 days', split: '75%', price: '$199' },
      '50k': { target: '10%', dailyLoss: '6%', maxDrawdown: '12%', inactivity: '30 days', split: '80%', price: '$379' },
      '100k': { target: '10%', dailyLoss: '6%', maxDrawdown: '12%', inactivity: '30 days', split: '85%', price: '$699' },
      '200k': { target: '10%', dailyLoss: '6%', maxDrawdown: '12%', inactivity: '30 days', split: '85%', price: '$1,299' }
    }
  },
  'instant': {
    type: 'Instant Funded',
    sizes: {
      '10k': { target: 'None', dailyLoss: '5%', maxDrawdown: '10%', inactivity: 'None', split: '70%', price: '$299' },
      '25k': { target: 'None', dailyLoss: '5%', maxDrawdown: '10%', inactivity: 'None', split: '70%', price: '$699' },
      '50k': { target: 'None', dailyLoss: '5%', maxDrawdown: '10%', inactivity: 'None', split: '75%', price: '$1,299' },
      '100k': { target: 'None', dailyLoss: '5%', maxDrawdown: '10%', inactivity: 'None', split: '80%', price: '$2,499' },
      '200k': { target: 'None', dailyLoss: '5%', maxDrawdown: '10%', inactivity: 'None', split: '80%', price: '$4,799' }
    }
  }
};

export const challengeTypes = [
  { id: 'one-phase-fx', name: 'One Phase FX', popular: false },
  { id: 'two-phase-fx', name: 'Two Phase FX', popular: true },
  { id: 'crypto', name: 'Crypto Challenge', popular: false },
  { id: 'instant', name: 'Instant Funded', popular: false }
];

export const accountSizes = ['10k', '25k', '50k', '100k', '200k'];