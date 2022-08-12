export interface ItemContentProps {
  title: string;
  contents: Array<string>;
}

export interface ItemProps {
  title: string;
  contents: Array<ItemContentProps>;
  inactive?: boolean;
}
