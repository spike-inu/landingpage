import { styled, Typography, TypographyProps } from 'components';

const Subtitle = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return (
    <Typography
      variant="h6"
      sx={{ fontFamily: 'Montserrat', fontWeight: 600, whiteSpace: 'pre-wrap', ...sx }}
      {...otherProps}
    />
  );
})({});

export default Subtitle;
