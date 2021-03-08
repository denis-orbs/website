const { animations } = require("./assets/js/consts/consts");

// custom markdown extensions
module.exports = exports = function renderer({
  Marked,
  _ID,
  _parents,
  _storeSet,
  _store,
  _nav,
  _globalProp,
  _relativeURL,
}) {
  Marked.heading = (text, level) => {
    return `<h${level} id="${text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")}" data-aos=${
      animations.fadeTop
    }>${text}</h${level}>\n`;
  };

  // Marked.paragraph = (text) => {
  //   return `<p data-aos=${animations.fadeTop}>${text}</p>\n`;
  // };

  // example for adding a class
  Marked.hr = () => {
    return `<hr class="my-custom-class">\n`;
  };
  Marked.relativeLink = (src) => {
    return _relativeURL(src, _ID);
  };

  // making all links relative
  Marked.link = (href, title, text) => {
    if (
      !href.startsWith("http://") &&
      !href.startsWith("https://") &&
      !href.startsWith("#") &&
      typeof _relativeURL === "function"
    ) {
      href = _relativeURL(href, _ID);
    }
    return `<a href="${href}"${
      title ? ` title="${title}"` : ""
    } target='_blank'>${text}</a>`;
  };

  // making all images relative
  Marked.image = (href, title, text) => {
    let sourcePath = href;
    if (
      !sourcePath.startsWith("http://") &&
      !sourcePath.startsWith("https://")
    ) {
      sourcePath = _relativeURL(href, _ID);
    }
    let out = `<img src="${sourcePath}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  };

  // making all html tags with paths relative
  Marked.html = (html) => {
    console.log(html);
    for (const match of html.matchAll(/=\"(\/[^\"]*)\"/)) {
      html = html.replace(match[1], _relativeURL(match[1], _ID));
    }
    return html;
  };

  return Marked;
};
