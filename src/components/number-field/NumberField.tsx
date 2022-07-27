import { TextField, TextFieldProps, styled } from '@mui/material';
import * as React from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatStyled = styled(NumberFormat)``;

interface CustomProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormatStyled
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
});

const NumberField: React.FC<TextFieldProps> = (props) => {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      value={value}
      onChange={handleChange}
      name="numberformat"
      variant="standard"
      InputProps={{
        inputComponent: NumberFormatCustom as any,
        disableUnderline: true,
      }}
      {...props}
    />
  );
};

export default NumberField;
