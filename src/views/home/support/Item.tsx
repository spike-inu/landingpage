import { CustomIcon } from 'assets/icons';
import { ButtonBase, Stack, Text, Zoom } from 'components';
import { TokenProps } from 'data/types';
import React from 'react';

const View: React.FC<TokenProps> = ({ Icon, name, props, index }) => {
  return (
    <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }} key={name}>
      <ButtonBase>
        <Stack direction="row" p={4} alignItems="center" spacing={4}>
          {typeof Icon === 'string' ? <CustomIcon src={Icon} /> : <Icon {...props} />}
          <Text>{name}</Text>
        </Stack>
      </ButtonBase>
    </Zoom>
  );
};

export default React.memo(View);
