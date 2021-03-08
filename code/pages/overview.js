import PropTypes from "prop-types";
import React from "react";

const Overview = ({
  title,
  header,

  footer,
  script,
  _relativeURL,
  _ID,
  pageHeader,
  flexSection,
  boxes,
  secondFlexSection,
  secondImagesGrid,
  text,
  secondBoxes,
  linkBtn,
}) => (
  <html style={{ background: "#171819" }}>
    <head>
      <title>Orbs - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />
    </head>
    <body className="overview grid-page">
      <header className="main-header">{header}</header>
      <main>
        {pageHeader}
        <div className="overview-flex">{flexSection}</div>
        <div className="flex-start overview-boxes-flex"> {boxes}</div>
        <div className="overview-bottom-flex">
          {secondFlexSection}
          {secondImagesGrid}
          {text}
        </div>
        <div className="flex-start overview-boxes-flex"> {secondBoxes}</div>
        {linkBtn}
      </main>
      {script != undefined ? (
        <script
          type="module"
          src={_relativeURL(`/assets/js/${script}.js`, _ID)}
        />
      ) : null}
      {footer}
    </body>
  </html>
);

Overview.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired,
};

Overview.defaultProps = {};

export default Overview;
