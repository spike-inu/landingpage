import {
  APESwapIcon,
  OKExChainIcon,
  ArbirtumIcon,
  AvalancheIcon,
  BabySwapIcon,
  BakerySwapIcon,
  BHXSwapIcon,
  BscIcon,
  ButterSwapIcon,
  CeloIcon,
  DepthIcon,
  DFYNIcon,
  DINOSwapIcon,
  EtherumIcon,
  FantomIcon,
  FuseIcon,
  HarmonyIcon,
  HecoIcon,
  JetSwapIcon,
  LatterSwapIcon,
  MakiIcon,
  MDEXIcon,
  NearIcon,
  PancakeIcon,
  PipiIcon,
  PolygonIcon,
  QuickswapIcon,
  ShibaswapIcon,
  SolanaIcon,
  SPOOKYSwapIcon,
  SushiswapIcon,
  TerraIcon,
  TRADEJOEIcon,
  UniswapIcon,
} from 'assets/icons';
import { ChainProps } from './types';

const items: Array<ChainProps> = [
  {
    name: 'Etherum',
    Icon: EtherumIcon,
    swaps: [
      {
        Icon: UniswapIcon,
        name: 'UniswapV2',
      },
      {
        Icon: SushiswapIcon,
        name: 'Sushiswap',
      },
      {
        Icon: ShibaswapIcon,
        name: 'ShibaSwap',
      },
    ],
  },
  {
    name: 'BNB Chain',
    Icon: BscIcon,
    swaps: [
      {
        Icon: PancakeIcon,
        name: 'Pancake',
      },
      {
        Icon: ButterSwapIcon,
        name: 'ButterSwap',
      },
      {
        Icon: MDEXIcon,
        name: 'MDEX',
      },
      {
        Icon: BabySwapIcon,
        name: 'BabySwap',
      },
      {
        Icon: JetSwapIcon,
        name: 'JetSwap',
      },
      {
        Icon: APESwapIcon,
        name: 'APESwap',
      },
      {
        Icon: BakerySwapIcon,
        name: 'BakerySwap',
      },
      {
        Icon: LatterSwapIcon,
        name: 'LatteSwap',
      },
      {
        Icon: BHXSwapIcon,
        name: 'BHX Swap',
      },
    ],
  },
  {
    name: 'Fantom',
    Icon: FantomIcon,
    swaps: [
      {
        Icon: SPOOKYSwapIcon,
        name: 'SPOOKYSwap',
      },
    ],
  },
  {
    name: 'Polygon',
    Icon: PolygonIcon,
    swaps: [
      {
        Icon: QuickswapIcon,
        name: 'Quickswap',
      },
      {
        Icon: DINOSwapIcon,
        name: 'DINOSwap',
      },
      {
        Icon: SushiswapIcon,
        name: 'SushiSwap',
      },
      {
        Icon: DFYNIcon,
        name: 'DFYN',
      },
    ],
  },
  {
    name: 'Avalanche',
    Icon: AvalancheIcon,
    swaps: [
      {
        Icon: TRADEJOEIcon,
        name: 'TRADE JOE',
      },
    ],
  },
  {
    name: 'HECO',
    Icon: HecoIcon,
    swaps: [
      {
        Icon: ButterSwapIcon,
        name: 'ButterSwap',
      },
      {
        Icon: PipiIcon,
        name: 'Pipi',
      },
      {
        Icon: MakiIcon,
        name: 'Maki',
      },
      {
        Icon: MDEXIcon,
        name: 'MDEX',
      },
      {
        Icon: BHXSwapIcon,
        name: 'BHX Swap',
      },
      {
        Icon: DepthIcon,
        name: 'Depth',
      },
    ],
  },
  {
    name: 'OkExChain',
    Icon: OKExChainIcon,
  },
  {
    name: 'Artribum',
    Icon: ArbirtumIcon,
  },
  {
    name: 'Solana',
    Icon: SolanaIcon,
  },
  {
    name: 'Terra',
    Icon: TerraIcon,
  },
  {
    name: 'Harmony',
    Icon: HarmonyIcon,
  },
  {
    name: 'Fuse',
    Icon: FuseIcon,
  },
  {
    name: 'Celo',
    Icon: CeloIcon,
  },
  {
    name: 'Near',
    Icon: NearIcon,
  },

  // {
  //   name: 'Aurora',
  //   Icon: AuroraIcon,
  // },
];

export default items;
