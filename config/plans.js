export const plans = {
  monthly: {
    name: 'Monthly',
    price: 69,
    period: '/month',
    features: [
      'All templates included',
      'Custom subdomain',
      'Unlimited form generations',
      'Priority support',
    ],
  },
  sixMonth: {
    name: '6-Month',
    price: 329,
    period: '/6 months',
    features: [
      'All templates included',
      'Custom subdomain',
      'Unlimited form generations',
      'Priority support',
      'Save 20% vs monthly',
    ],
    isFeatured: true,
  },
  lifetime: {
    name: 'Lifetime',
    price: 658,
    period: 'one-time',
    features: [
      'All templates included',
      'Custom subdomain',
      'Unlimited form generations',
      'Priority support',
      'Never pay again',
    ],
  },
};
