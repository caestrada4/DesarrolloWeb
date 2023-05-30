// Crea una función que pueda recibir cualquier array como parámetro e
// imprima su primer elemento.
function imprimirPrimerElemento(array) {
    if (array && array.length > 0) {
      console.log("El primer elemento es: " + array[0]);
    } else {
      console.log("El array está vacío.");
    }
  }