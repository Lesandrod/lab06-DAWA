//funcion para obtener los dias restantes que quedan para navidad
exports.diasParaNavidad = () => {

  const oneDay = 24 * 60 * 60 * 1000; //milisegundos de un dia
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const diffInMs = christmas.getTime() - today.getTime();
  const diffInDays = Math.floor(diffInMs / oneDay);
  return diffInDays;
};

//funcion para obtener la edad ingresando la fecha de nacimiento
exports.calcularEdad = (fechaNacimiento) => {

  const nacimiento = new Date(fechaNacimiento);
  const today = new Date();

  let edad = today.getFullYear() - nacimiento.getFullYear();

  const mesActual = today.getMonth();
  const diaActual = today.getDate();
  const mesNacimiento = nacimiento.getMonth();
  const diaNacimiento = nacimiento.getDate();

  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  return edad;
}

//funcion para validar formulario
exports.validarForm = (datosFormulario) => {
  const camposRequeridos = ['nombre', 'email', 'fechaNacimiento'];
  const errores = [];

  // Función para validar el formato de un email
  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Función para validar el formato de una fecha (YYYY-MM-DD)
  const validarFecha = (fecha) => /^\d{4}-\d{2}-\d{2}$/.test(fecha);

  camposRequeridos.forEach((campo) => {
    if (!datosFormulario[campo]) {
      errores.push(`El campo ${campo} es obligatorio`);
    }
  });

  if (datosFormulario.email && !validarEmail(datosFormulario.email)) {
    errores.push('El formato del correo electrónico no es válido');
  }

  if (datosFormulario.fechaNacimiento && !validarFecha(datosFormulario.fechaNacimiento)) {
    errores.push('El formato de la fecha de nacimiento no es válido');
  }

  return errores.length > 0 ? errores : 'Formulario validado correctamente';

}