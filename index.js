
//  FUNCIONES
function getCountryInfo(nombre) {
  const requester = new XMLHttpRequest();
  requester.onreadystatechange = function() {
    if (this.readyState != 4) {
      return
    }
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);

      mostrarInfo(data)
    }
  };
  requester.open('GET', "https://pokeapi.co/api/v2/pokemon/" + nombre);
  requester.send();
}

function mostrarInfo (country){
  console.log(country);
  document.querySelectorAll('#contenedor')[0].innerHTML = "<div>Image: " + "<img src='country.sprites.front_default'>"  + "</div>" + "<div>Id: " + country.id + "<div>Name: " + country.name +"<div>Height: " + country.height + "<div>Weight: " + country.weight+ "<div>Type: " + country.types[0].type.name + " " + country.types[1].type.name + "<div>Name: " + country.name

}

// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];


// BINDS Y EVENTOS
botonAñadir.addEventListener('click', function() {
  let nombrePais = document.querySelectorAll('#input')[0].value;
  getCountryInfo(nombrePais);

})
