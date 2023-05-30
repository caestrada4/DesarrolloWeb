// Crea una función que pueda recibir cualquier array como parámetro e
// imprima todos sus elementos uno por uno (no se vale imprimir el
// array completo).

function imprimirElementos(array) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        console.log("Elemento " +i+ ": " + array[i]);
      }
    } else {
      console.log("El parámetro no es un array válido.");
    }
  }