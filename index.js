// Component imports
import { nodeGalleryComp, templatedGalleryComp } from "./components/gallery.js";
import { defaultComp } from "./components/default.js";
import { nodeImageComp, templatedImageComp } from "./components/image.js"; // not used outside other components
import { textImagenBlockComp } from './components/textImageBlock.js' ;
import { pageData} from "./data.js";

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  "temp_gallery": templatedGalleryComp,
  "node_gallery": nodeGalleryComp,
  "textImageBlock": textImagenBlockComp,
  "default": defaultComp
}

/**
 * Find and return the microPage initial wrapper
 */
const getPageWrapper = () => {
  return document.querySelector('#microPage');
}

/**
 *
 * @param {object} pageData contains the expected page content data
 */
const pageInit = (pageData) => {

  const pageWrapper = getPageWrapper();

  if (pageWrapper) {
    pageData.sections.forEach(section => {
      if (components[section.component]) {
        pageWrapper.appendChild(components[section.component](section));
        console.log(section.component, ' loaded!');
      }
      else {
        pageWrapper.appendChild(components["default"](section));
        console.log(section.name, ' not found, loading default component!');
      }
    });
  } else {
    console.log('NO PAGE WRAPPER FOUND, PAGE CANT BE RENDERED');
  }
}


// Run on page start
pageInit(pageData);