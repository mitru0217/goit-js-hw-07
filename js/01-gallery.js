import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup (galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imageContainer.addEventListener("click", onImageContainerClick)

function createGalleryCardsMarkup (galleryItems) {
    return galleryItems
    .map (({preview, original,description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join("");
}

function onImageContainerClick (event){
    event.preventDefault();
   
  const bigImg = event.target.dataset.source;

const lightboxEscConfig = {
  onShow: () => {
    document.addEventListener("keydown", onEscKeyPress);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscKeyPress);
  }
  };

 const instance = basicLightbox.create(`<img 
 class="gallery__image"
 src="${bigImg}"
 
 alt="${imageContainer.description}"/>`,
 lightboxEscConfig
 )
 instance.show() 

 function onEscKeyPress(e) {

  const visible = instance.visible();

  if(e.code === "Escape" && visible) {
    
    instance.close() 
  };
}
}