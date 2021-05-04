import React from "react";
import { colors } from "../../assets/js/consts/consts";
import AppLoader from "../partials/shared/app-loader";

const Page = ({
  title,
  header,
  footer,
  script,
  _relativeURL,
  _ID,
  main,
  subscribe,
  gdpr,
  meta_description,
  meta_keywords,
  meta_author,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head style={{ background: colors.main, display: "none" }}>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
        <meta name="author" content={meta_author} />

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <AppLoader generateUrl={generateUrl} />
      <body style={{ background: colors.main }}>
        <div style={{ opacity: 0 }} className="app-wrapper">
          {header}
          {main}
          {subscribe && subscribe}
          {gdpr}
          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}

          {footer && footer}
        </div>
      </body>
    </html>
  );
};

export default Page;
