//esta funcion es igual que hacer el addEventListener
//aca solo puedo obtener un evento
// window.onload = function () {

// }

window.addEventListener('load', function() {
   let homeButton = document.querySelector('.home-button');
   homeButton.addEventListener('click', function() {
    alert('tocaste el boton')
   })

   //trabajando con el evento y el prevent default
   let contactButton = document.querySelector('.contact-button');
   contactButton.addEventListener('click', function(e) {
    e.preventDefault();//cancela el comportamiento por defecto que ya tenia la etiqueta HTML
    console.log(this);//la variable this hace referencia al lugar donde sucedio el evento
    alert('diste click en el boton de contacto')
   })
})