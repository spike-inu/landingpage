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
    title: 'EVM and\nNon-EVM Chains',
    description:
      'We swap among EVM (like Ethereum, Polygon, BSC), non-EVM compatible blockchains (like Solana, Terra), as well as L2 - blockchains.',
  },
  {
    Icon: Transfer,
    title: 'The Fastest Transfer',
    description:
      '"Fast" is our ultimate goal when creating the platform and has since improved crosschain transactions from over 5 minutes to under 5 seconds. Crosschain transactions have since entered the second era.',
  },
  {
    Icon: Permission,
    title: 'Permissionless,\nAnti-censorship',
    description: 'In any environment, anyone can access iCrosschain Swap without permission and KYC review.',
  },
  {
    Icon: Reward,
    title: 'Ultra-low Fees',
    description:
      'Saving money for you is our hope. In iCrosschain, you only need to pay a 0.2% crosschain transaction fee to complete crosschain transactions quickly and safely. Gas fee and target chain transaction fee will be charged by corresponding chains.',
  },
  {
    Icon: Sercurity,
    title: 'Security',
    description:
      'This is our utmost guarantee.  Crosschain had taken security seriously from the very beginning. By utilizing the unique technology, it ensures that the users will enjoy seamless using experience without encountering security problems.',
  },
  {
    Icon: Drive,
    title: 'Community Drive',
    description:
      "Based on iCrosschain ICC Token's insurance and economic model, decentralized governance and community-driven development will be realized.",
  },
];

export default items;
