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
  CronosIcon,
  RaydiumIcon,
  OptimismIcon,
  CherrySwapIcon,
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
        props: { style: { background: '#fdf4fa', borderRadius: '50%', width: 30, height: 30, padding: 7 } },
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
    name: 'Cronos',
    Icon: CronosIcon,
    swaps: [
      {
        Icon: 'https://assets.coingecko.com/markets/images/736/small/vvs-finance.jpeg?1636702806',
        name: 'VVSRouter',
      },
      {
        Icon: 'https://assets.coingecko.com/markets/images/764/small/g7GDg3bv_400x400.jpg?1641539227',
        name: 'MM Finance',
      },
      {
        Icon: 'https://assets.coingecko.com/markets/images/762/small/cronaswap.png?1641437204',
        name: 'Cronaswap',
      },
    ],
  },
  {
    name: 'Solana',
    Icon: SolanaIcon,
    swaps: [
      {
        Icon: RaydiumIcon,
        name: 'Raydium',
      },
    ],
  },
  {
    name: 'OkExChain',
    Icon: OKExChainIcon,
    swaps: [
      {
        Icon: CherrySwapIcon,
        name: 'CherrySwap',
        props: { style: { background: '#ffccd3', borderRadius: '50%', width: 30, height: 30, padding: 7 } },
      },
      {
        Icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11146.png',
        name: 'JSwap',
      },
      {
        Icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9479.png',
        name: 'KSwap',
      },
      {
        Icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17557.png',
        name: 'Islandswap',
      },
    ],
  },
  {
    name: 'Artribum',
    Icon: ArbirtumIcon,
    swaps: [
      {
        Icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/1141.png',
        name: 'SushiSwap',
      },
    ],
  },
  {
    name: 'Optimism',
    Icon: OptimismIcon,
    swaps: [
      {
        Icon: UniswapIcon,
        name: 'Uniswap',
        props: { style: { background: '#fdf4fa', borderRadius: '50%', width: 30, height: 30, padding: 7 } },
      },
    ],
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
