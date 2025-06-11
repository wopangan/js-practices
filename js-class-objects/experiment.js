// Object literals - create ad hoc objects, which are defined on the spot without a formal class or constructor.
const person = {
    firstName: "Alice",
    lastName: "Guo",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(person.getFullName());

// ----------------------

// Function constructor - used to create and initialize objects

function Car(model, year) {
    this.model = model;
    this.year = year;
}
const car1 = new Car("Camry", 2025);
console.log("This is my first car: ", car1);

// ----------------------

function Students(name, age) {
    this.name = name;
    this.age = age;
    this.showStudent = function() {
        return `This is ${this.name} and he is ${this.age}`
    }
}
const student = new Students("Charles", 22)
console.log(student.showStudent());
