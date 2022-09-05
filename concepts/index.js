// Ojbetos literales

const alumno1 = {
  name: "Miguel Angel",
  lastname: "Gonzales",
  age: 26,
  father: {
    name: "Iver",
    age: 51,
  },
  siblings: true,
  presentarce() {
    console.log(
      `Hola mi nombre es: ${this.name} ${this.lastname} y tengo ${this.age}`
    );
  },
  whoIsYourFather() {
    console.log(`Mi padre es: ${this.father.name}`);
  },
};

// Accessing the object with .
console.log(alumno1.name + " " + alumno1.lastname);

// Accessing the object with [""] notation
console.log(alumno1["name"] + " " + alumno1["lastname"]);

alumno1.presentarce();
alumno1.whoIsYourFather();
