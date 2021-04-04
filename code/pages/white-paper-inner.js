import React from "react";
import { colors } from "../../assets/js/consts/consts";

const WhitePaperInner = ({
  title,
  header,
  footer,
  script,
  _relativeURL,
  _ID,
  pdfUrl,
  breadCrumbs,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html style={{ background: colors.main }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/index.css`, _ID)}
        />
      </head>
      <body className="white-paper-inner grid-page">
        {header}
        <main className="flex-column">
          {breadCrumbs}
          <div className="white-paper-inner-iframe">
            <iframe src={generateUrl(pdfUrl)}></iframe>
          </div>
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
};

export default WhitePaperInner;