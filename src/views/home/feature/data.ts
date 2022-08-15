import Drive from './icons/Drive';
import Evm from './icons/Evm';
import Permission from './icons/Permission';
import Reward from './icons/Reward';
import Sercurity from './icons/Sercurity';
import Transfer from './icons/Transfer';
import { FeatureItemProps } from './types';
const items: Array<FeatureItemProps> = [
  {
    Icon: Evm,
    title: 'EVM and\nNon-EVM chains',
    description:
      'We swap between EVM (like Ethereum, Polygon, BSC), non-EVM compatible (like Solana, Terra) blockchains, as well as L2 - blockchains.',
  },
  {
    Icon: Transfer,
    title: 'The fastest Swap',
    highlight: 'fastest',
    description:
      '"Fast was our ultimate goal when creating  the flatform. The cross-chain transactions had been shorten from over 5 minutes to under 5 seconds. The Cross-chain transactions have since entered the new era.',
  },
  {
    Icon: Permission,
    title: 'Permissionless,\nAnti-censorship',
    highlight: 'Permissionless',
    description: 'In any environment, anyone can access iCrosschain Swap without permission and KYC review.',
  },
  {
    Icon: Reward,
    title: 'Ultra-low fees',
    description:
      'Saving money for you is our goal.  In iCrosschain,  you only need to pay 0.2% fee to complete a cross-chain transaction quickly and safely...',
  },
  {
    Icon: Sercurity,
    title: 'Security',
    description:
      'This is the most basic guarantee. \nCross-chain Swap has taken security into consideration from the very beginning. Through unique technology, it ensures that users will not encounter security problems during use',
  },
  {
    Icon: Drive,
    title: 'Community Drive',
    highlight: 'Community',
    description:
      "Based on the iCrosschain ICC Token's issuance and economic model, the decentralized governance and community driven development will be carried out.",
  },
];

export default items;
