const form = document.getElementById('controlForm');
const banner = document.getElementById('banner');
const bannerText = document.getElementById('bannerText');
const bannerImage = document.getElementById('bannerImage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newColor = document.getElementById('bgColor').value;
  const newText = document.getElementById('newText').value;
  const newImage = document.getElementById('newImage').value;

  if (newColor) banner.style.backgroundColor = newColor;
  if (newText) bannerText.textContent = newText;
  if (newImage) bannerImage.src = newImage;
});
