import { IconsProps, LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';
import React from 'react';

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
