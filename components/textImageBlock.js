import { nodeImageComp } from "./image.js";


const textImagenBlockComp = (data) => {
    // creacion de elementos de la sección
    const section = document.createElement('section');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    const pictureContent =document.createElement('div');
    const picture = nodeImageComp(data.image,'text-image__picture');

    //contenido de los elementos
    title.textContent = data.title;
    text.textContent = data.text;

    //añadir las clases
    section.classList.add('text-image');
    content.classList.add('text-image__wrapper');
    title.classList.add('text-image__title');
    text.classList.add('text-image__text');
    pictureContent.classList.add('text-image__item');

    //añadir clases dependiendo de si tiene item clase o item theme
    if (data.classes) section.classList.add(data.classes);
    if (data.theme) section.classList.add(`text-imagen--${data.theme}`);

    //agregar todos los componentes a nuestra sección

    pictureContent.appendChild(picture);
    content.appendChild(title);
    content.appendChild(text);
    section.appendChild(pictureContent);
    section.appendChild(content);

    //se retorna laseccion con todos los valores aplicados en ella
    return section;
};


export { textImagenBlockComp };