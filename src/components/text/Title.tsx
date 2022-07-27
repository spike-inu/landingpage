import { styled, Typography, TypographyProps } from 'components';

const Title = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return (
    <Typography
      variant="h4"
      sx={{ fontFamily: 'Montserrat', fontWeight: 600, whiteSpace: 'pre-wrap', ...sx }}
      {...otherProps}
    />
  );
})({});

export default Title;
