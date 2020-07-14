import { newElement } from './newElement.js';


function socialMedia(socialWeb) {
    // socialweb = {
    //     name: "Github",
    //     icon: "",
    //     link: "https://github.com/juang961225"
    // }
    //primer paso:crar un link como contenedor general
    let socialElement = newElement('a', ['social-web'], '', {href:socialWeb.link});
    socialElement.setAttribute('target','_blank')
    socialElement.setAttribute('rel','noopener')
    //segundo paso: crar el nodo de texto
    let socialText = newElement('p', ['social-web__text'], socialWeb.name);
    //tercer paso: crear el icono
    console.log(socialWeb.icon)
    let socialIcon = newElement('i', ['fa', socialWeb.icon, 'fa-3x'],'');
    //agregar los componentes
    socialElement.appendChild(socialIcon);
    socialElement.appendChild(socialText);
    return socialElement;
}
export {socialMedia}