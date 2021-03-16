import React from "react";
import { animations } from "../../../assets/js/consts/consts";
import Img from "./Img";
import SplittedLinesText from "./splitted-lines-text";

const ImagesGrid = ({ title, images, imagesPerLine = 3, border }) => {
  const style = { width: `calc(100% / ${imagesPerLine}  - 20px)` };
  const parentStyle = {
    borderBottom: border ? "1px solid rgba(255,255,255, 0.5)" : "none",
  };
  return (
    <div
      className="images-grid"
      data-aos={animations.fadeTop}
      style={parentStyle}
    >
      {title && <h4 className="images-grid-title">{title}</h4>}
      <ul className="flex-start images-grid-list">
        {images.map((image, i) => {
          const { src, text } = image;
          return (
            <li className="flex-column" style={style}>
              <figure className="images-grid-list-img">
                <Img src={src} />
              </figure>
              <SplittedLinesText tag={<p></p>} text={text} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImagesGrid;