import Slider from "react-slick";
import { Container, Content } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export function CarSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        <Content >
          <img
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </Content>

        <Content >
          <img
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </Content>

        <Content >
          <img
            src="https://s3-alpha-sig.figma.com/img/676e/4c3d/6369b7aa4686e39e4d9b3c8fd7199a76?Expires=1630281600&Signature=N1a8UPuf8vMKksxTisMAVgyw5LSoAPyFfQwRAmiZcZH-c~s3jpVy8MYiAVF~cLZc2zEyUcuOnZQkrDpH8f2BW0RIfn~jdxYx7cYH6UYW8Nyzr54m16ZZAlki~SDCyo8w5ZG-5Y~WNwITU-UtTKlmTNXzaImjI7N80yw3EkgrSpSd9L~KtMBXHN4hK-GcoZ2KzY~fcbFKT7A3yjD3xznwKb5tnwXS-HV1aVlnQrreA1yjDbOQT74--N9k5Ge9eCKWYiNJp2jLmVRXqf4V~-CV2kTSu3qo~WmW2PaV4YsD~Inj9BNv5SeYy84nu0Rzn~UUVfKWV-9-nMZ8XX3xaqFWRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </Content>

      </Slider>
    </Container >
  )
}
