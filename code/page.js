import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Page = ({
  title,
  stylesheet,
  header,
  main,
  footer,
  script,
  _relativeURL,
  _ID,
}) => (
  <html style={{ background: "#171819" }}>
    <head>
      <title>Orbs - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/index.css`, _ID)}
      />

      {stylesheet != undefined ? (
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
        />
      ) : null}
    </head>
    <body>
      <header className="main-header">{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
      {script != undefined ? (
        <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
      ) : null}
    </body>
  </html>
);

Page.propTypes = {
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

Page.defaultProps = {};

export default Page;
