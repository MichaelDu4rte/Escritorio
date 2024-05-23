"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,

    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/house1.jpg"
              alt="carousel"
              width={500}
              height={500}
              className="rounded-2xl w-[400px] h-[400px]"
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/house2.jpg"
              alt="carousel"
              width={500}
              height={500}
              className="rounded-2xl w-[400px] h-[400px]"
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/house3.jpg"
              alt="carousel"
              width={500}
              height={500}
              className="rounded-2xl w-[400px] h-[400px]"
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;
