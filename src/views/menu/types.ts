export interface ItemProps {
  title: string;
  href: string;
  subs?: Array<{
    title: string;
    href: string;
  }>;
}
