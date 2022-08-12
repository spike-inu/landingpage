import SwapTime from './icons/SwapTime';
import SwapFree from './icons/SwapFree';
import Token from './icons/Token';
import TotalTrade from './icons/TotalTrade';

import { DashboardProps } from './types';

const data = {
  subtitle: 'Swap - Farm - Stake',
  description:
    'iCrosschain is a cross-chain transaction platform deployed on multiple public chains (BSC, ETH, AVAX, FTM, SOL, MATIC, HECO, OEC, ARBITRUM, OPTIMISM , CRONOS supported)',
  dashboards: [
    {
      value: '$120',
      name: 'Total trade volume',
      unit: 'mil',
      Icon: TotalTrade,
    },
    {
      value: '+12,000',
      name: 'Tokens',
      unit: '',
      Icon: Token,
    },
    {
      value: '15-60',
      name: 'Swap time',
      unit: 'sec',
      Icon: SwapTime,
    },
    {
      value: '$0.63',
      name: 'Swap fee (or 0.2%)',
      unit: '',
      Icon: SwapFree,
    },
  ] as Array<DashboardProps>,
};

export default data;
