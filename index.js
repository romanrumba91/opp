const objLiteral = {
    prop: "valor",
  };
  
  const alanCar = {
    color: "blanco",
    gas: 20,
    status: false,
    propietario: "alan",
    mostrarMensaje: function () {
      console.log(`${this.propietario} tiene un carro color ${this.color}`);
      console.log(this);
    },
  };
  
  const joaquinCar = {
    color: "verde",
    gas: 20,
    status: false,
    mostrarMensaje: function () {
      console.log(`${this.propietario} tiene un carro color ${this.color}`);
      console.log(this);
    },
  };
  const alexisCar = {
    color: "blanco",
    gas: 20,
    status: false,
    propietario: "alexis",
    // funcion tradicional anonima
    mostrarMensaje: function () {
      console.log(`${this.propietario} tiene un carro color ${this.color}`);
      console.log(this);
    },
  };
  const romanCar = {
    color: "blanco",
    gas: 20,
    status: false,
    propietario: "Roman",
    // formato de metodo de un objeto literal ES6
    mostrarMensaje() {
      console.log(`${this.propietario} tiene un carro color ${this.color}`);
      console.log(this);
    },
  };
  
  // alanCar.mostrarMensaje();
  // romanCar.mostrarMensaje();
  
  class Car {
    constructor(color, gas, propietario) {
      (this.color = color),
        (this.gas = gas),
        (this.status = false),
        (this.propietario = propietario),
        (this.toggleStatus = function () {
          this.status = !this.status;
        }),
        (this.mostrarMensaje = function () {
          console.log(`${this.propietario} tiene un carro color ${this.color}`);
        });
    }
  }
  
  const alanCarClass = new Car("blanco", 40, "Alan");
  const emaCarClass = new Car("Negro", 40, "Ema");
  const alexisCarClass = new Car("Rojo", 40, "Alexis");
  const joaquinCarClass = new Car("blanco", 40, "Joaquin");
  
  // console.log("literal", alanCar);
  // console.log("class", alanCarClass);
  // console.log("class", emaCarClass);
  // console.log("class", alexisCarClass);
  // console.log("class", joaquinCarClass);
  
  // joaquinCarClass.mostrarMensaje();
  
  class Pokemon {
    //el constructor define los valores iniciales para nuestros objetos
    constructor(name, damage, nickname, number, health) {
      (this.name = name),
        (this.damage = damage),
        (this.nickname = nickname),
        (this.number = number),
        (this.health = health);
    }
    getInfo() {
      console.log(
        `Hola soy ${this.name} mejor conocido como ${this.nickname} y mi numero es ${this.number}`
      );
    }
    attack(enemyPoke) {
      enemyPoke.health -= this.damage;
    }
  }
  
  class WaterTypePokemon extends Pokemon {
    constructor(name, damage, nickname, number, health) {
      super(name, damage, nickname, number, health); //super manda los argumentos que recibe la clase hija a la clase padre para su correcto funcionamiento.
      this.type = "water";
    }
    getInfo() {
      console.log(
        `Hola soy ${this.name} mejor conocido como ${this.nickname}, mi numero es ${this.number} y soy de tipo ${this.type}`
      );
    }
  }
  
  //Instancias
  const squirtle = new WaterTypePokemon("Squirtle", 200, "vamo a codear", 3, 600);
  const miaw = new WaterTypePokemon("Felino", 100, "Miau así es", 40, 2000);
  console.log(squirtle.health);
  console.log(miaw.health);
  
  console.log(`La batalla`);
  squirtle.attack(miaw);
  console.log(squirtle.health);
  console.log(miaw.health);
  miaw.attack(squirtle);
  console.log(squirtle.health);
  console.log(miaw.health);


