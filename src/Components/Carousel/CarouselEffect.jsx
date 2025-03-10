import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./Img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import customCSS from "./CarouselEffect.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, i) => {
          return <img src={imageItemLink} key={i} />;
        })}
      </Carousel>
      <div className={customCSS.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
