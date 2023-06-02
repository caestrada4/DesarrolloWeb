// Evaluación Formativa Primer Parcial (Parte Práctica).
// NOMBRE: CARLOS ANDRES ESTRADA VASQUEZ		
// NRC: 10047
// Asignatura: Desarrollo Web para Integración de Tecnologías
// 1.	Crea una variable llamada "nombre" y asígnale tu nombre como valor.
var nombre = "Andres";
// 2.	Crea una función llamada "suma" que reciba dos parámetros (a y b) y retorne la suma de ambos.
function suma(a,b){
    return a+b;
}
console.log(suma(4,5))
// 3.	Escribe un condicional que verifique si una persona es mayor de edad. Si es mayor de edad, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".
let edad=15;
if(edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad")
}

// 4.	Crea un ciclo "for" que imprima los números del 1 al 5.
for(var i=0;i<5;i++){
    console.log(i+1);
}

// 5.	Crea una función llamada "imprimirArray" que reciba como parámetro un array y lo imprima elemento por elemento. Respuesta:
function imprimirArray(array){
    for(var i=0;i<array.lenght;i++){
        console.log(array[i]);
    }
}


// 6.	¿Cuánto es 2 + 2? Respuesta: 4
let a=2;
let b=2;
let result=a+b;
console.log(result);

// 7.	¿Qué es un array?

// Respuesta Correcta: Un array es un tipo de dato en JavaScript que permite almacenar varios valores en una sola variable.


// 8.	¿Qué es un objeto?

// Respuesta Correcta: Un objeto es un tipo de dato en JavaScript que permite almacenar pares clave-valor.

// 9.	¿Cuándo es mejor usar objetos o arrays?

// Respuesta Correcta Es mejor usar objetos cuando se necesitan almacenar pares clave-valor.
// 10.	¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

// Respuesta Correcta	Sí, es posible mezclar arrays con objetos y objetos con arrays en JavaScript.

// 11.	Crea una función llamada "primerElementoArray" que reciba como parámetro un array y retorne el primer elemento.
var array=[6,7,4,3,2];
function primerElementoArray(array){
    return array.shift();
}
primerElementoArray(array);

// 12.	Crea una función llamada "imprimirElementosArray" que reciba como parámetro un array y lo imprima usando un ciclo "for".
function imprimirArray(array){
    for(var i=0;i<array.lenght;i++){
        console.log(array[i]);
    }
}

// // 13.	¿Cuál es la salida del siguiente código?
// let nombre = "Juan";

// function saludar() {
//   let nombre = "María";
//   console.log("Hola " + nombre);
// }

// saludar();
// console.log("Hola " + nombre);

// La Salida es:

// Hola Maria
// Hola Juan
// •	¿Cuál es la salida del siguiente código?
// let x = 5;

// function sumarUno() {
//   x++;
// }

// function restarUno() {
//   x--;
// }

// sumarUno();
// sumarUno();
// restarUno();
// console.log(x);

// La salida es 6

// Espero que hayas disfrutado del cuestionario.
// ¡Felicitaciones por completarlo! Si tienes más preguntas o necesitas ayuda adicional, no dudes en preguntar
