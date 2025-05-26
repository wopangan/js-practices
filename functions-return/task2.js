// Write a function that returns true if n is even, otherwise false.

function isEven(n) {

	// Option 1
	if (n % 2 == 0) {
		return true;
	} else {
		return false;
	}

	// Option 2
	return n % 2 == 0 ? true : false;
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false
