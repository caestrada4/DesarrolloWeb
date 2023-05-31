// 1.4.3 Replica el comportamiento de tu condicional anterior con if, else y
// else if, pero ahora solo con if (sin else ni else if).
// fi Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar
// cómo replicar este comportamiento con arrays y un solo condicional. 

//A diferencia del anterior, este debe evaluar por cada bloque de If, en vez de una anidacion

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}