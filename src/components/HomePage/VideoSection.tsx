import React, { Fragment } from "react";

type Props = {};

const VideoSection = (props: Props) => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-center  px-4  items-center rounded-[37px] bg-[#004870] mt-12 mb-12">
        <div className="p-10">
          <div className="flex flex-col justify-start">
            <h1 className="font-sans font-extrabold text-white text-3xl">
              El momento es ahora.
            </h1>
            <p className="font-sans font-normal text-white text-base">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
              dolor sit ametLorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/347119375?h=1699409fe2&color=ef2200&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="m-8"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoSection;
