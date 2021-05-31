import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "../shared/Img";

const WhitePaperBox = ({
  _relativeURL,
  _ID,
  _body,
  image,
  readPaperBtn,
  date,
  title,
  url,
  published,
  preview,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  const MobileImage = ({ generateUrl, url, image }) => {
    return (
      <figure className="white-papers-box-mobile">
        <a href={generateUrl(url)}>
          <Img src={generateUrl(image)} alt="mobile-pdf-preview" />
        </a>
      </figure>
    );
  };

  const DesktopImage = ({ generateUrl, url, image }) => {
    return (
      <figure className="white-papers-box-preview">
        <a href={generateUrl(url)}>
          <Img src={generateUrl(image)} alt="pdf-preview" />
        </a>
      </figure>
    );
  };

  return (
    <div className="white-papers-box" data-aos={animations.fadeTop}>
      <div className="white-papers-box-flex flex-start">
        <div className="flex-column white-papers-box-c">
          <h4 className="white-papers-box-title">{title}</h4>
          <p className="white-papers-box-c-date">{`${published} ${date}`}</p>
          <MobileImage generateUrl={generateUrl} image={image} url={url} />
          <div className="white-papers-box-c-text">{_body}</div>
          <a
            href={generateUrl(url)}
            className="white-papers-box-btn"
          >{`+ ${readPaperBtn}`}</a>
        </div>
        <DesktopImage generateUrl={generateUrl} image={image} url={url} />
      </div>
    </div>
  );
};

export default WhitePaperBox;
