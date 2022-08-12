import Choose from './icons/Choose';
import Receive from './icons/Receive';
import Send from './icons/Send';
import WalletA from './icons/WalletA';
import { HowToUseItemProps } from './types';

// TODO: remove Icon and description
const items: Array<HowToUseItemProps> = [
  {
    Icon: WalletA,
    title: 'Connect wallet',
    description: '',
  },
  {
    Icon: Choose,
    title: 'Choose token and Blockchain',
    description: '',
  },
  {
    Icon: Send,
    title: 'Send assets',
    description: '',
  },
  {
    Icon: Receive,
    title: 'Receive assets',
    description: '',
  },
];

export default items;
