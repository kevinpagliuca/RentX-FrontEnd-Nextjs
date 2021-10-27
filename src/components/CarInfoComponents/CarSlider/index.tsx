import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider, { Settings, CustomArrowProps } from 'react-slick';

import { ButtonBase } from '@material-ui/core';
import Image from 'next/image';

import * as S from './styles';

type DotsWithArrows = {
  dots: React.ReactNode;
};

export const CarSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'sliderCentered',
    appendDots: (dots) => <DotsWithArrows dots={dots} />,
  };

  function handleSlickAction(type: 'next' | 'prev') {
    if (type === 'next') return sliderRef.current?.slickNext();
    if (type === 'prev') return sliderRef.current?.slickPrev();
  }

  return (
    <S.Container>
      <Slider {...settings} ref={sliderRef}>
        <div className="carouselCarContent">
          <Image
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
        <div className="carouselCarContent">
          <Image
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
        <div className="carouselCarContent">
          <Image
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
      </Slider>
    </S.Container>
  );

  const DotsWithArrows = ({ dots }: DotsWithArrows) => {
    return (
      <S.SliderFooter>
        <ButtonBase centerRipple>
          <FaAngleLeft color="#999" onClick={() => handleSlickAction('prev')} />
        </ButtonBase>
        <ul>{dots}</ul>
        <ButtonBase centerRipple>
          <FaAngleRight
            color="#999"
            onClick={() => handleSlickAction('next')}
          />
        </ButtonBase>
      </S.SliderFooter>
    );
  };
};
