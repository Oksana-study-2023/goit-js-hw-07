import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);

function createGalleryElement(items) {
    let galleryElements = items.map(item => {
        let itemEl = document.createElement(`li`);
        itemEl.classList.add(`gallery__item`);

        let linkEl = document.createElement(`a`);
        linkEl.classList.add(`gallery__link`);
        linkEl.dataset.href = item.original;
        itemEl.appendChild(linkEl);

        let imgEl = document.createElement(`img`);
        imgEl.classList.add(`gallery__image`);
        imgEl.src = item.preview;
        imgEl.dataset.source = item.original;
        imgEl.alt = item.description;
        linkEl.appendChild(imgEl);

        return itemEl;

    });
    console.log(galleryElements);
    galleryEl.append(...galleryElements);

    return galleryEl; 
  
}

function onGalleryItemClick(event) {
    event.preventDefault();
    let clickedItemEl = event.target.closest(`.gallery__link`);
    if (!clickedItemEl) {
    return;
    }

    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width = "800" height = "600">`);
    instance.show();

}

function bindEvents(galleryEl) {
    galleryEl.addEventListener(`click`, onGalleryItemClick);
}

function initCallery(items) {
 
    let galleryEl = createGalleryElement(items);
    bindEvents(galleryEl);

}

initCallery(galleryItems);

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>