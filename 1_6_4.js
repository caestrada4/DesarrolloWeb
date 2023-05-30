// 1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro
// e imprima todos sus elementos uno por uno (no se vale imprimir el
// objeto completo).

function imprimirElementos(objeto) {
    if (typeof objeto === 'object' && objeto !== null) {
      for (let key in objeto) {
        if (objeto.hasOwnProperty(key)) {
          console.log(key + ": " + objeto[key]);
        }
      }
    } else {
      console.log("El parámetro no es un objeto válido.");
    }
  }