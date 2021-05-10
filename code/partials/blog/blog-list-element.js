import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import { formatBlogDate } from "../../util/date";
import Img from "../shared/Img";

const BlogListElement = (props) => {
  const {
    author,
    image,
    date,
    _relativeURL,
    _ID,
    blogUrl,
    type,
    _body,
    title,
    short_description,
  } = props;
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };

  const url = process.env.IS_DEV ? `blog/${blogUrl}` : blogUrl;
  return (
    <li
      className="blog-list-blog list-item"
      data-type={type}
      data-aos={animations.fadeTop}
    >
      <a
        href={generateUrl(url)}
        className="blog-list-blog-wrapper"
        rel="noopener"
      >
        <figure className="blog-list-blog-img">
          <Img src={generateUrl(image)} alt="blog" />
        </figure>
        <h4 className="blog-list-blog-title">{title}</h4>
        <div className='"blog-list-blog-description'>
          <p className="text-p">{short_description}</p>
        </div>
      </a>
      <div className="blog-list-blog-author flex-start">
        {author}
        <small>|</small>
        <p>{formatBlogDate(date)}</p>
      </div>
    </li>
  );
};

export default BlogListElement;
