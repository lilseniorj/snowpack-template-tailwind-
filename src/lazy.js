const isIntersecting = (entry) => {
  return entry.isIntersecting; // true dentro de la pantalla, false lo contrario

}

const accion = (entry) => {
  const nodo = entry.target;
  console.log('new image');

  // dejar de escuchar para que repetir las observaciones
  observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
})


export const registerImage = (imagen) => {
  // IntersectionObserver -> observer(imagen)
  observer.observe(imagen)
}