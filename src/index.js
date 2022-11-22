import { registerImage } from "./lazy";

// crear una imagen
// agregar #imagen
// imagenes aleatorias

const minimun = 1;
const maximun = 122;
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun

const createImageNote = () => {

  const container = document.createElement('div')
  container.className = 'p-4';

  const imagen = document.createElement('img');
  imagen.className = "mx-auto";
  imagen.width = '320';
  imagen.src = `https://randomfox.ca/images/${random()}.jpg` // Img aleatorias

  container.appendChild(imagen);

  return container;
};

const newImage = createImageNote()
const mountNode = document.getElementById('images');

const addButton = document.querySelector('button')

const addImage = () => {
  const newImagenAleatoria = createImageNote();
  mountNode.append(newImagenAleatoria);
  registerImage(newImagenAleatoria);
};

addButton.addEventListener("click", addImage);