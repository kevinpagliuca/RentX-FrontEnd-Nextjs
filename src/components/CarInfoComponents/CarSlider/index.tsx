import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider, { Settings, CustomArrowProps } from 'react-slick';

import Image from 'next/image';

import { ButtonBase } from '@material-ui/core';

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
            src="/Lambo.png"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
        <div className="carouselCarContent">
          <Image
            src="/Lambo.png"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
        <div className="carouselCarContent">
          <Image
            src="/Lambo.png"
            width={650}
            height={430}
            quality={100}
            className=""
          />
        </div>
      </Slider>
    </S.Container>
  );

  function DotsWithArrows({ dots }: DotsWithArrows) {
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
  }
};
