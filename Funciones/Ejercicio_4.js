// Ejercicio 2: Acceso a variables con el mismo nombre en diferentes ámbitos
// En este ejercicio, se declara una variable con el mismo nombre en el ámbito global y en una
// función. Se muestra en la consola el valor de ambas variables para observar cómo se
// accede a ellas y cuál prevalece en cada contexto.


// Declaración de variable global
var variable = "Soy una variable global";

// Definición de función que declara una variable local con el mismo nombre
function accederVariables() {
  // Declaración de variable local con el mismo nombre
  var variable = "Soy una variable local";

  // Acceso y muestra del valor de la variable local dentro de la función
  console.log("Valor de variable dentro de la función:", variable);
}

// Acceso y muestra del valor de la variable global fuera de la función
console.log("Valor de variable fuera de la función:", variable);

// Llamada a la función accederVariables
accederVariables();
