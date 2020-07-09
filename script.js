import { pageData } from './data.js';
import { defaultComp } from './components/default.js';

console.log(pageData);

function getPageWrapper() {
    return document.querySelector('#microPage');
}

pageData.sections.forEach(section => {
    let component = defaultComp(section);
    let wrapper = getPageWrapper();
    wrapper.appendChild(component);
});