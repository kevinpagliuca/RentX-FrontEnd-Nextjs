import React from 'react';

import { IconsProps, LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';

interface ICarIconTypeProps extends IconsProps {
  type: 'alcohol' | 'eletric' | 'gasoline';
}

export const CarIconType = ({ type, ...rest }: ICarIconTypeProps) => {
  return (
    <React.Fragment>
      {type === 'gasoline' && <WaterIcon {...rest} />}
      {type === 'eletric' && <LightningIcon {...rest} />}
      {type === 'alcohol' && <LeafIcon {...rest} />}
    </React.Fragment>
  );
};
