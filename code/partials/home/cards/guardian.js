import React from "react";
import { cardsWeights } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../util/link";
import { formatNumber } from "../../../util/numberUtil";
import Img from "../../shared/Img";
import InnerLinks from "../../shared/inner-links";
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
  website,
  github,
  telegram,
  type,
}) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  const links = {
    website,
    github,
    telegram,
  };
  return (
    <div className="globe-card g-card" data-weight={cardsWeights.guardian}>
      <figure className="card-avatar">
        <CardTooltip
          img={generateUrl(images.globe.guardian.figure)}
          type={type}
        />
        <Img
          src={generateUrl(image)}
          className="card-avatar-img"
          alt="guardian avatar"
        />
      </figure>
      <div className="card-data">
        <CardTitle title={name} />
        <span className="flex-center card-location">
          <img src={generateUrl(images.globe.guardian.location)} />
          <p>{location}</p>
        </span>
        <InnerLinks
          links={links}
          section={images.globe.guardian}
          generateUrl={generateUrl}
        />

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
