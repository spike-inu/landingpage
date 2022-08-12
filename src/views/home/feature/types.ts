import { SvgIconProps } from 'components';
import React from 'react';

export interface FeatureItemProps {
  Icon: React.FC<SvgIconProps>;
  title: string;
  description: string;
  index?: number;
}
