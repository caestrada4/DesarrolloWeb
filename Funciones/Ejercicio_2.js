// Ejercicio 2: Cálculo del área de un triángulo utilizando function expression (función
//     anónima)
//     En este ejercicio, se utiliza una función expresiva o función anónima para calcular el área de
//     un triángulo. La función recibe la base y la altura como parámetros, realiza el cálculo del
//     área y devuelve el resultado. Se realiza la llamada a la función y se muestra el resultado en
//     la consola.
    
var calcularAreaTriangulo = function(base, altura) {
    return (base * altura) / 2;
  };
  
  var base = 5;
  var altura = 3;
  var resultado = calcularAreaTriangulo(base, altura);
  console.log("El área del triángulo es:", resultado);
  