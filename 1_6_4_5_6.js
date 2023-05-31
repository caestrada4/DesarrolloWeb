// 1.6.4 Ahora supongamos que debes guardar datos de una persona. Crea un objeto con las
// siguientes propiedades: nombre, apellido, edad, hobbies (un array con varios elementos) y
// contacto (un objeto con las propiedades email y teléfono).
// 1.6.5 Accede al valor de la propiedad hobbies y imprímelo en la consola.
// 1.6.6 Accede al valor de la propiedad email y imprímelo en la consola

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    hobbies: ["fútbol", "música", "lectura"],
    contacto: {
      email: "juan@example.com",
      telefono: "1234567890"
    }
  };
  console.log(persona.hobbies);
  console.log(persona.contacto.email);
