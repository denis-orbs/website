import PropTypes from "prop-types";
import React from "react";

const Blog = (props) => {
  const {
    title,
    header,
    management,
    footer,
    script,
    _relativeURL,
    _ID,
    leftText,
    socials,
    employees,
    careerSectionTitles,
    careersHeader,
  } = props;
  return (
    <html style={{ background: "#171819" }}>
      <head>
        <title>Orbs - {title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />

        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/index.css`, _ID)}
        />
      </head>
      <body className="team-page grid-page">
        <header className="main-header">{header}</header>
        <main>
          <div className="team flex-between base-grid">
            <section className="team-description sticky-section">
              {leftText}
              {socials}
            </section>
            <div className="team-lists flex-column">
              {management}
              {employees}
            </div>
          </div>

          <div className="team-careers">
            {careersHeader}
            {careerSectionTitles &&
              careerSectionTitles.map((title) => {
                const sectionTitle = title.toLowerCase();
                return (
                  <section className="team-careers-section">
                    <h5 className="team-careers-section-title">{title}</h5>
                    <ul>{props[sectionTitle]}</ul>
                  </section>
                );
              })}
          </div>
        </main>
        {footer}
        {script != undefined ? (
          <script
            type="module"
            src={_relativeURL(`/assets/js/${script}.js`, _ID)}
          />
        ) : null}
      </body>
    </html>
  );
};

Blog.propTypes = {
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

Blog.defaultProps = {};

export default Blog;
