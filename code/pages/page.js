import React from "react";
import { colors } from "../../assets/js/consts/consts";
import AppLoader from "../partials/shared/app-loader";
import ScrollTop from "../partials/shared/scroll-top";

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
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.orbs.com/" />
        <meta property="og:site_name" content="Orbs" />
        <meta
          property="og:image:secure_url"
          content="https://www.orbs.com/wp-content/uploads/2019/03/Orbs-Twitter-Post.png"
        ></meta>
        <meta
          property="og:image"
          content="https://www.orbs.com/wp-content/uploads/2019/03/Orbs-Twitter-Post.png"
        ></meta>
        <meta property="og:image:width" content="1024"></meta>
        <meta property="og:image:height" content="512"></meta>
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
          <ScrollTop generateUrl={generateUrl} />
        </div>
      </body>
    </html>
  );
};

export default Page;
