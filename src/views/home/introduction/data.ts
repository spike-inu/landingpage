import { DashboardProps } from './types';

const data = {
  subtitle: 'Swap - Future - Stake',
  description:
    'iCrosschain is a cross-chain transaction platform deployed on multiple public chains (BSC, ETH, AVAX, FTM, SOL, MATIC, HECO, OEC, ARBITRUM, OPTIMISM , CRONOS supported)',
  dashboards: [
    {
      value: '$120',
      name: 'Total trade volume',
      unit: 'mil',
    },
    {
      value: '+12,000',
      name: 'Tokens',
      unit: '',
    },
    {
      value: '15-60',
      name: 'Swap time',
      unit: 'sec',
    },
    {
      value: '$0.63',
      name: 'Swap fee (or 0.2%)',
      unit: '',
    },
  ] as Array<DashboardProps>,
};

export default data;
