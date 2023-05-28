// Ejercicio 1: Acceso a variables dentro y fuera de una función
// En este ejercicio, se declara una variable global y una variable local dentro de una función.
// Se muestra en la consola el valor de ambas variables tanto dentro como fuera de la función
// para observar el alcance de cada una.


// Declaración de variable global
var vGlob = "Soy una variable global";

// Definición de función que accede a una variable local y global
function accederVariables() {
  // Declaración de variable local
  var vLoc = "Soy una variable local";

  // Acceso y muestra del valor de la variable local dentro de la función
  console.log("Valor de vLoc dentro de la función:", vLoc);

  // Acceso y muestra del valor de la variable global dentro de la función
  console.log("Valor de vGlob dentro de la función:", vGlob);
}

// Acceso y muestra del valor de la variable global fuera de la función
console.log("Valor de vGlob fuera de la función:", vGlob);

// Intento de acceso a la variable local fuera de la función (genera error)
// console.log("Valor de vLoc fuera de la función:", vLoc);

// Llamada a la función accederVariables
accederVariables();
