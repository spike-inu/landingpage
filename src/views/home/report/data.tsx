import { AvalancheIcon, BscIcon, LogoIcon, MessariIcon } from 'assets/icons';
import { ReportItemProps } from './types';
import { Image } from 'components';

const Hanken = (props: any) => {
  return <Image src="/images/hacken.png" width={36} height={36} {...props} />;
};
const items: Array<ReportItemProps> = [
  {
    Icon: LogoIcon,
    title: 'iCrosschain Public Reports',
    description:
      'These are monthly reports created by the iCrosschain team that cover the key milestones, achievements, and metrics for every month.',
  },
  {
    Icon: MessariIcon,
    title: 'Messari Project Reports',
    description:
      'Messari provides market intelligence that drives high-conviction participation in the crypto economy. They’ve created a report-overview of iCrosschain.',
  },
  {
    Icon: Hanken,
    title: 'Hacken Reports',
    description:
      'Hacken is a cybersecurity company that excels at providing audits for projects in the cryptocurrency space. They have audited iCrosschain.',
  },
];

export default items;
