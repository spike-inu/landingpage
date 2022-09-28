export interface ItemProps {
  title: string;
  subtitle?: string;
  href?: string;
  subs?: Array<{
    title: string;
    href?: string;
  }>;
}
