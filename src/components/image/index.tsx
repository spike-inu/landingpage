import { styled } from '@mui/material';

const Image = styled((props: any) => {
  const { alt = '', ...otherProps } = props;
  return <img alt={alt} loading="lazy" {...otherProps} />;
})`
  object-fit: contain;
`;

export default Image;
