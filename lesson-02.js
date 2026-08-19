"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "The sexy baker"; // I used const because the name of the shop is not going to change.
let shopLocation = "Accra"; // I used let because the location of the shop can change in the future.
const shoptype = "Bakery"; // I used const because the type of the shop is not going to change.
const shopOwnership = "Public"; // I used const because the ownership of the shop is not going to change.
let shopOpenHours = "9pm - 6am"; // I used let because the opening hours of the shop can change in the future.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof shopName); // string
console.log(typeof shopLocation); // string
console.log(typeof shoptype); // string
console.log(typeof shopOwnership); // string
console.log(typeof shopOpenHours); // string
console.log(typeof null); // object (this is the famous historical bug of the language)
console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let unassignedVariable;
let phoneName = null;

console.log(unassignedVariable);
console.log(typeof unassignedVariable);
console.log(phoneName);
console.log(typeof phoneName);
// null means the variable is intentionally empty, while undefined means the variable has not been assigned a value yet.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
// const price = Number("4.50");
// const count = Number("12");
// const flag = Boolean("true");

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakerName = "Maison Sarah";
const bakeryName = "The Corner Bakery";
let openingHour = 7;
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
