import React from 'react';

import { IconsProps, LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';

interface ICarIconTypeProps extends IconsProps {
  type: 'Gasolina' | 'Álcool' | 'Híbrido' | 'Flex' | 'Elétrico';
}

export const CarIconType = ({ type, ...rest }: ICarIconTypeProps) => {
  return (
    <React.Fragment>
      {type === 'Gasolina' && <WaterIcon {...rest} />}
      {type === 'Elétrico' && <LightningIcon {...rest} />}
      {type === 'Álcool' && <LeafIcon {...rest} />}
    </React.Fragment>
  );
};
