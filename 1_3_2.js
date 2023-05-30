// 1.3.2 Convierte el siguiente código en una función, pero, cambiando cuando
// sea necesario las variables constantes por parámetros y argumentos
// en una función:
// const name = "Diego Medardo";
// const lastname = "Saavedra García";
// const completeName = name + lastname;
// const nickname = "statick";
// console.log("Mi nombre es "
// + completeName
// + ", pero prefiero que me digas "
// + nickname + ".");
function saludo(name, lastname, nickname) {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  }
  
  saludo("Diego Medardo", "Saavedra García", "statick");
  
  