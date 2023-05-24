const myfunctions = require('../source/myfunctions');

//  Para la fucion de navidad
let diasrestantes = myfunctions.diasParaNavidad()

// Para la fucion de calcular edad
const fechanac = '2003-12-06'
const edad = myfunctions.calcularEdad(fechanac);

// para la función de validar el form
const datosFormulario = {
    nombre: 'Lennard Idone',
    email: 'lennar.idone@tecsup.edu.pe',
    fechaNacimiento: '2003-12-06',
    
};
const resultadoform = myfunctions.validarForm(datosFormulario);



console.log("Tienes", edad)
console.log("Quedan", diasrestantes, "días hasta Navidad");
console.log(resultadoform);