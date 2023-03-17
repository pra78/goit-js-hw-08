import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const galleryContainer = document.querySelector(".gallery");

const makeGalleryContainerMarkup = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}"
                />
            </a>
        </li>`;
}).join("");

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryContainerMarkup);

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });

console.log(galleryItems);