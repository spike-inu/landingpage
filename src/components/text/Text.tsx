import { styled, Typography, TypographyProps } from 'components';

const Text = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return (
    <Typography variant="body2" sx={{ fontFamily: 'Montserrat', whiteSpace: 'pre-wrap', ...sx }} {...otherProps} />
  );
})({});

export default Text;
