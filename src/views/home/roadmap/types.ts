export interface ItemProps {
  title: string;
  contents: Array<{ title: string; contents: Array<string> }>;
  index?: number;
}
