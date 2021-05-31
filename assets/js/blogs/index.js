import { getElement, getElementAttribute, getElements } from "../heplers.js";
import { init } from "../index.js";
import { initInfiniteScrolling } from "./infinite-sctoll.js";

let blogsList = [];
let blogsContainer;

const handleBlogListOnLoad = () => {
  const list = getElements(".blog-list .blog-list-blog");
  blogsList = list;
  blogsContainer = getElement(".blog-list");
  blogsContainer.innerHTML = "";
  list.forEach((blog) => {
    handleBlogImage(blog);

    blog.style.display = "flex";
  });
  initInfiniteScrolling(blogsContainer, blogsList);
};

const handleBlogImage = (blog) => {
  const imageSrc = getElementAttribute(blog, "data-image");
  const imageContainer = blog.querySelector(".blog-list-blog-img");
  const img = document.createElement("img");
  img.setAttribute("src", imageSrc);
  img.setAttribute("alt", "blog");
  imageContainer.appendChild(img);
};

window.onload = () => {
  init();
  handleBlogListOnLoad();
};
