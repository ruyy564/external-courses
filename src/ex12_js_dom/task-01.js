function createImages(arrayImages) {
  let images = '';
  for (let i = 0; i < arrayImages.length; i += 1) {
    images += `<div class="slider-item">
              <img class="slider-image" src="${arrayImages[i]}">
            </div>`;
  }

  return images;
}

function addImagesInDOM(images) {
  const divSlider = document.getElementById('slider');

  divSlider.innerHTML = images;

  return undefined;
}

function setWidthToSliderWrapper(arrayImages) {
  const divSliderWrapper = document.getElementById('slider');

  divSliderWrapper.style.width = `${500 * arrayImages.length}px`;

  return undefined;
}

const arrayImages = [
  'https://www.bestsiling.ru/images/gory/19.jpg',
  'https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg',
  'https://vsezhivoe.ru/wp-content/uploads/2017/09/sidyaschiy_lemur_2560x1600.jpg',
];
const image = document.getElementById('slider');
const buttonBefore = document.getElementById('button-before');
const buttonAfter = document.getElementById('button-after');
const images = createImages(arrayImages);

image.style.left = 0;
setWidthToSliderWrapper(arrayImages);
addImagesInDOM(images);

buttonAfter.addEventListener('click', () => {
  const indexArrayImage = document.getElementById('slider');
  const countImagesOnSlider = document.getElementById('slider').childElementCount;
  const currentLeftSlider = parseInt(indexArrayImage.style.left, 10);

  if (currentLeftSlider > -(countImagesOnSlider - 1) * 500) {
    indexArrayImage.style.left = `${currentLeftSlider - 500}px`;
  } else {
    indexArrayImage.style.left = '0px';
  }
});

buttonBefore.addEventListener('click', () => {
  const indexArrayImage = document.getElementById('slider');
  const countImagesOnSlider = document.getElementById('slider').childElementCount;
  const currentLeftSlider = parseInt(indexArrayImage.style.left, 10);

  if (currentLeftSlider >= 0) {
    indexArrayImage.style.left = `${-(countImagesOnSlider - 1) * 500}px`;
  } else {
    indexArrayImage.style.left = `${currentLeftSlider + 500}px`;
  }
});
