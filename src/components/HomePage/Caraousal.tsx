"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {};

const Caraousal = (props: Props) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      interval={4000}
      className="mx-auto lg:divide-y lg:divide-gray-200 mt-2"
    >
      <div>
        <img src="/Banner 1.svg" />
      </div>
      <div>
        <img src="/Banner 2.svg" />
      </div>
      <div>
        <img src="/Banner 3.svg" />
      </div>
    </Carousel>
  );
};

export default Caraousal;
