// Define a new object called dog:
// Give it a property name, set it to any value
// Give it a method bark, which will log "woof!" to the console when invoked
const dog = {
	name: 'Timmy',
	bark() {
		console.log('woof!');
	}
};

// Log dog.name to the console
console.log('dog.name:', dog.name);

// Invoke dog.bark()
dog.bark();

// Log dog to the console
console.log('dog:', dog);

// Update the method bark above to say "woof, I'm <name>!"
// e.g. if dog.name is "Timmy", dog.bark() should print "woof, I'm Timmy!" on
// the console
dog.bark = function () {
	console.log(`woof, I'm ${this.name}!`);
}

dog.bark();

// Define a new object called person
const person = {
	// Give it a firstName property
	firstName: 'John',

	// Give it a lastName property
	lastName: 'Doe',

	// Give it a name method that returns the full name of the person
	name() {
		return this.firstName + ' ' + this.lastName;
	},

	// Give it a birthYear property
	birthYear: 1980,

	// Give it an ageThisYear method that returns the age of the person
	// e.g. if person.birthYear is 2000 then person.ageThisYear() should return
	// 18
	ageThisYear() {
		return 2018 - person.birthYear;
	}
}

console.log('person:', person);
console.log('person.name():', person.name());
console.log('person.ageThisYear():', person.ageThisYear());

// Define a variable called someString with any string as its value
const someString = 'i am a long-ish string!';

// Log the above string's length property to the console
console.log('someString.length:', someString.length);

// Set the length of someString to another number e.g. 200
someString.length = 2;

// Log the length property of someString to the console again. Did it change? Why or why not?
console.log('someString.length:', someString.length);

// Explore some more string methods e.g. toLowerCase(), replace() etc. ([refer to MDN][mdn-string])
console.log('toLowerCase():', someString.toLowerCase());
console.log('replace():', someString.replace(' ', '@@@'));

// Create a variable called decimalNumber, giving it some numeric value
const decimalNumber = 45.567;

// Use the toFixed() method to convert the number to a formatted string with 3
// decimal places, and log it to the console
console.log('toFixed():', decimalNumber.toFixed(1));

// Declare a function sum that takes in two arguments and returns the sum of
// the two arguments
const sum = (a, b) => a + b;

// Log the value of the sum function's name property to the console
console.log('sum.name:', sum.name);

// Log the return value of the sum function's toString() method to the console
console.log('sum.toString():', sum.toString());
