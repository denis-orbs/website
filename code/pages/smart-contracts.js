import PropTypes from "prop-types";
import React from "react";
import { colors } from "../../assets/js/consts/consts";

const SmartContract = ({
  title,
  header,
  footer,
  script,
  _relativeURL,
  _ID,
  pageHeader,
  content,
  linkBack,
}) => (
  <html>
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
    <body className="smart-contracts" style={{ background: colors.main }}>
      {header}
      <main>
        {pageHeader}
        {content}
      </main>
      {linkBack}
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

SmartContract.propTypes = {
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

SmartContract.defaultProps = {};

export default SmartContract;
