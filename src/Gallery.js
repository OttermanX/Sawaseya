const imageForm = document.getElementById('image-form');
const imageContainer = document.getElementById('image-container');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCloseButton = lightbox.querySelector('button');

imageForm.addEventListener('submit', e => {
  e.preventDefault();

  const files = imageForm.querySelector('input[type=file]').files;

  for (const file of files) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const img = document.createElement('img');
      img.src = reader.result;
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('visible');
      });
      imageContainer.appendChild(img);
    });
    reader.readAsDataURL(file);
  }
});

lightboxCloseButton.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('visible');
  }
});