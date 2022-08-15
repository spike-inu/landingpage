import { IconProps } from 'assets/icons/types';
import React from 'react';

export interface TokenProps {
  name: string;
  Icon: React.FC | string;
  props?: IconProps;
  index?: number;
}

export interface ChainProps {
  name: string;
  Icon: any;
  swaps?: Array<TokenProps>;
  index?: number;
  active?: boolean;
}

export interface SocialProps {
  name: string;
  Icon: any;
  href: string;
  index?: number;
  active?: boolean;
}

export interface PartnershipProps {
  title: string;
  description: string;
}
