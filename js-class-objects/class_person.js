class Person {

	constructor(firstName, lastName) {

		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Creating an instance of the Person class
const person1 = new Person("John", "Doe");
console.log(person1.getFullName());
