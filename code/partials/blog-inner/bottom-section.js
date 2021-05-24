import React from "react";
import { images } from "../../../assets/js/images";
import Img from "../shared/Img";

const Section = ({ src, title, btnText, alt, url }) => {
  return (
    <div className="single-blog-bottom-flex-item flex-column">
      <Img src={src} alt={alt} />
      <h4>{title}</h4>
      <a href={url} target="_blank">
        {btnText}
      </a>
    </div>
  );
};

const BlogGetInvloved = ({
  whitePapersTitle,
  whitePapersButton,
  githubTitle,
  githubButton,
  documentationTitle,
  documentationButton,
  _relativeURL,
  _ID,
  title,
  whitePapersURL,
  githubURL,
  documentationURL,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="single-blog-bottom">
      <h3 className="single-blog-bottom-title">{title}</h3>
      <div className="single-blog-bottom-flex flex-between">
        <Section
          src={generateUrl(images.blog.logo)}
          title={whitePapersTitle}
          btnText={whitePapersButton}
          alt="orbs logo"
          url={whitePapersURL}
        />

        <Section
          src={generateUrl(images.blog.github)}
          title={githubTitle}
          btnText={githubButton}
          alt="github icon"
          url={githubURL}
        />
        <Section
          src={generateUrl(images.blog.documents)}
          title={documentationTitle}
          btnText={documentationButton}
          alt="document icon"
          url={documentationURL}
        />
      </div>
    </div>
  );
};

export default BlogGetInvloved;
