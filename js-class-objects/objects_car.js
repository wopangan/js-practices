class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    carInformation() {
        console.log(`This is my ${this.make} ${this.model} ${this.year} model.`);
    }
}

const myCar = new Car("Toyota", "Camry", 2025);
myCar.carInformation();