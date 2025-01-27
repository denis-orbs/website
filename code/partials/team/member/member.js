import React from "react";
import { animations } from "../../../../assets/js/consts/consts";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../util/link";
import InnerLinks from "../../shared/inner-links";
import Popup from "./popup";

const Member = (props) => {
  const {
    avatar,
    _relativeURL,
    _ID,
    role,
    name,
    telegram,
    linkedin,
    twitter,
  } = props;
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  const linksProps = { telegram, linkedin, twitter };

  return (
    <div
      className="team-member flex-column list-item"
      data-aos={animations.fadeIn}
      data-name={name}
      style={{
        background: `url('${generateUrl(avatar)}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="team-member-details">
        <p className="team-member-details-name">{name}</p>
        <p className="team-member-details-role">{role}</p>
        <InnerLinks
          generateUrl={generateUrl}
          section={images.team}
          links={linksProps}
        />
      </div>
      <Popup {...props} generateUrl={generateUrl} />
    </div>
  );
};

export default Member;
