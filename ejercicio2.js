class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    mostrarDatos() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
      super(nombre, edad);
      this.sueldo = sueldo;
    }
  
    mostrarDatos() {
      return `${super.mostrarDatos()}, Sueldo: ${this.sueldo}`;
    }
  }
  
  class Directivo extends Empleado {
    constructor(nombre, edad, sueldo) {
      super(nombre, edad, sueldo);
      this.subordinados = [];
    }
  
    agregarSubordinado(empleado) {
      this.subordinados.push(empleado);
    }
  
    mostrarDatos() {
      let resultado = `${super.mostrarDatos()}, Subordinados: `;
      for (let i = 0; i < this.subordinados.length; i++) {
        resultado += `${this.subordinados[i].mostrarDatos()} `;
      }
      return resultado;
    }
  }
  
  let empleado1 = new Empleado("Juan", 30, 2000);
  let empleado2 = new Empleado("Maria", 25, 1800);
  let directivo = new Directivo("Pedro", 40, 3000);
  
  directivo.agregarSubordinado(empleado1);
  directivo.agregarSubordinado(empleado2);
  
  console.log(directivo.mostrarDatos());