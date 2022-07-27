import { Select, SelectChangeEvent, MenuItem } from '@mui/material';
import React from 'react';

const View: React.FC = () => {
  const [value, setValue] = React.useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Select className="language" value={value} size="small" onChange={handleChange}>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="vi">VI</MenuItem>
      <MenuItem value="fr">FR</MenuItem>
    </Select>
  );
};

export default React.memo(View);
