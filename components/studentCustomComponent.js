import {newElement} from './newElement.js';
import {socialMedia} from './socialMedia.js';

const studentComponent = (data) => {
    //contenedor principal
    const profile = newElement('div', ['profile'], '');
    //contenedor de la imagen
    const blockPicture = newElement('div', ['block-picture'],'');
    const img = newElement('img', ['block-picture__image'], 1,{src:data.image})
    const tag = newElement('div', ['block-picture__tag'], data.role);
    //contenedor de la carta
    const blockCard = newElement('div', ['block-card'], '');
    const cardTitle = newElement('h1', ['block-card__title'],data.displayName);
    const userName =newElement('p', ['block-card__user-name'], data.userName);
    //contenedor de las redes sociales dentro de la card
    const containerSocial = newElement('div', ['social-container'], '');
    const socialNodes = data.socialMedia.map(element =>{
        return socialMedia(element)
    });
    const buttonCard = newElement('button', ['block-card__button'], 'CHANGE THEME');
    //activar boton colocar tema o quitar
    buttonCard.addEventListener('click', function () {
        profile.classList.toggle('profile--dark')
    });

    socialNodes.forEach(element => {
        containerSocial.appendChild(element)
    });
    //agregar contenido
    //informacion
    blockCard.appendChild(cardTitle)
    blockCard.appendChild(userName)
    blockCard.appendChild(containerSocial)
    blockCard.appendChild(buttonCard)
    //contenedor izquierdo
    blockPicture.appendChild(tag)
    blockPicture.appendChild(img)
    //principal
    profile.appendChild(blockPicture)
    profile.appendChild(blockCard)

    return profile
}

export {studentComponent}