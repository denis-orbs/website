import React from "react";
import { images } from "../../../../assets/js/images";
import { formatNumber } from "../../../util/numberUtil";
import Img from "../../common/Img";
import CardLinks from "./card-links";
import { Border } from "./components/border";
import CardTitle from "./components/card-title";
import CardTooltip from "./components/card-tooltip";

const Guardian = ({
  image,
  name,
  location,
  text,
  _relativeURL,
  _ID,
  effectiveStake,
  totalStake,
  link,
  github,
  telegram,
  type,
  weight,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="globe-card g-card" data-weight={weight}>
      <figure className="card-avatar">
        <CardTooltip
          img={generateUrl(images.globe.guardian.figure)}
          type={type}
        />
        <Img src={generateUrl(image)} className="card-avatar-img" />
      </figure>
      <div className="card-data">
        <CardTitle title={name} />
        <span className="flex-center card-location">
          <img src="" />
          <p>{location}</p>
        </span>
        <CardLinks
          link={link}
          github={github}
          telegram={telegram}
          section="guardian"
          generateUrl={generateUrl}
        />
        <Border />
        <section className="column-center g-card-stake">
          <div className="column-center">
            <h4>{formatNumber(totalStake)}</h4>
            <p>{text.totalStake}</p>
          </div>
          <div className="column-center">
            <h4>{`${effectiveStake}%`}</h4>
            <p>{text.effectiveStake}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guardian;
