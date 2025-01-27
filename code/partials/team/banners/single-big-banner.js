import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { handleUrl } from "../../../util/link";
import Img from "../../shared/Img";
import BannerVideo from "./banner-video";

const SingleBigBanner = ({ image, copyright, _relativeURL, _ID, videoUrl }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <section className="banner-big-single banner" data-aos={animations.fadeIn}>
      {videoUrl ? (
        <BannerVideo videoUrl={videoUrl} />
      ) : (
        <Img src={generateUrl(image)} alt="banner" />
      )}
      {copyright}
    </section>
  );
};

export default SingleBigBanner;
