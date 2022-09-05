console.log("Objects and classes");

// funcion constructora, this is the old way to create objects
// It's not used anymore like in the old days
// function Usuario(nombres, apellidos, correo, activo) {
//   this.nombres = nombres;
//   this.apellidos = apellidos;
//   this.correo = correo;
//   this.activo = activo;
// }

// Father class
class Usuario {
  constructor(nombres, apellidos, correo, activo) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.activo = activo;
  }

  saludar() {
    return `Hola, mi nombre es: ${this.nombres} ${this.apellidos}`;
  }

  getNombres() {
    return this.nombres;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(newData) {
    this.apellidos = newData;
  }
}

// children classes of Usuarios
class Profesor extends Usuario {
  constructor(nombre, apellidos, correo, activo, cursosDictados, calificacion) {
    super(nombre, apellidos, correo, activo);
    this.cursosDictados = cursosDictados;
    this.calificacion = calificacion;
  }
}

class Alumno extends Usuario {
  constructor(nombre, apellidos, correo, activo, cursosTomados) {
    super(nombre, apellidos, correo, activo);
    this.cursosTomados = cursosTomados;
  }
}

// Instances of the class Usuario
const miguel = new Usuario("miguel", "gonzales", "m@awesome.com", true);
const diego = new Alumno("Diego", "Revollo", "diego@mail.com", true, [
  "BD",
  "Ethical Hacking",
]);
const angel = new Profesor("Angel", "Gonzales", "angel@mail.com", true, [
  "Ethical Hacking",
  "Advanced Programming",
  "AWS",
  "Azure",
]);

console.log(
  `Mi nombre es: ${miguel.getNombres()} y mi apellido: ${miguel.getApellidos()}`
);

// Printing the child that inherits methods from Usuario
console.log(diego.saludar());
console.log(angel.saludar());
