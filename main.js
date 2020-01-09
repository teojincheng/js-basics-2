const assert = require("assert");

const dog = require("./script");
const person = require("./person");
const someString = "pocket";

const strLength = someString.length;

const decimalNumber = 5.6778;
const decimalNumberRounded = decimalNumber.toFixed(3);

function sum(n1, n2) {
  return n1 + n2;
}

const sumResultToStr = sum(6, 6).toString();

console.clear();

assert.strictEqual(dog.name, "Wel");
assert.strictEqual(dog.bark(), "woof, I am Wel");

assert.strictEqual(person.firstName, "Steve");
assert.strictEqual(person.lastName, "Kot");
assert.strictEqual(person.name(), "Steve Kot");
assert.strictEqual(person.ageThisYear(), 40);

assert.strictEqual(someString, "pocket");
assert.strictEqual(strLength, 6);
assert.strictEqual(decimalNumber, 5.6778);
assert.strictEqual(decimalNumberRounded, "5.678");
assert.strictEqual(sum.name, "sum");
assert.strictEqual(sumResultToStr, "12");

console.log("success");
