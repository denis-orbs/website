import { addEventsToFooter } from "./footer/index.js";
import { initNavbar } from "./navbar/index.js";
import { initSubscribeForm } from "./components/subscribe.js";
import gdpr from "./services/gdpr.js";
import {
  handleOnScroll,
  scrollToTop,
  hideAppLoader,
  showAppLoader,
} from "./ui/ui.js";
import { getElements } from "./heplers.js";

export const init = () => {
  initNavbar();
  addEventsToFooter();
  handleOnScroll();
  AOS.init({ once: true });
  initSubscribeForm();
  gdpr.init();
  scrollToTop();
  hideAppLoader();
};

document.onreadystatechange = function (e) {
  if (document.readyState === "complete") {
    showAppLoader();
  }
};
