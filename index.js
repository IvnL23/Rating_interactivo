var contenedorPrincipal = document.querySelector(".principal");
var contenedorEnviar = document.querySelector(".contenedor-enviar");
var botonEnviar = document.querySelector(".boton-enviar");
var botonesEstrellas = document.getElementsByClassName("boton-satisfaccion");
var valorRating = document.querySelector("#estrella-elegida");

var valorSeleccionado = "";

for (let i = 0; i < botonesEstrellas.length; i++) {
  botonesEstrellas[i].addEventListener("click", function () {
    valorSeleccionado = botonesEstrellas[i].innerHTML;
  });
}

botonEnviar.addEventListener("click", function () {
  if (valorSeleccionado !== "") {
    contenedorPrincipal.style.display = "none";
    contenedorEnviar.style.display = "flex";
    valorRating.innerHTML = valorSeleccionado;
  } else {
    alert("Debe seleccionar un valor.");
  }
});
