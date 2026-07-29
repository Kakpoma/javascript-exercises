"use strict";

// // Lesson 06 exercise: Arrays and loops
// // In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// // then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// // strict mode line. Work beneath each question in order.

// // TODO: Part one.
// // Build an array of at least five menu item names. Log the whole array, the first item, the
// // last item read through `length` minus 1, and the array's length.
// const menu = ["Margherita", "Pepperoni", "Hawaiian", "Veggie", "BBQ Chicken"];
// console.log("Whole array:", menu);
// console.log("First item:", menu[0]);
// console.log("Last item:", menu[menu.length - 1]);
// console.log("Array length:", menu.length);

// // TODO: Part two.
// // Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// // the array after each step, and note in a comment which end of the array each method touched.
// console.log("Original menu:", menu);
// menu.push("Four Cheese"); // Adds to the end of the array
// console.log("After push:", menu);

// menu.unshift("Meat Lovers"); // Adds to the beginning of the array
// console.log("After unshift:", menu);

// menu.pop(); // Removes from the end of the array
// console.log("After pop:", menu);

// menu.shift(); // Removes from the beginning of the array
// console.log("After shift:", menu);

// // TODO: Part three.
// // Print every menu item twice, first with a counting `for` loop that uses the index, then with
// // a `for...of` loop, and add a one-line comment on when you would choose each form.
// console.log("Using for loop:");
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// console.log("Using for...of loop:");
// for (const item of menu) {
//   console.log(item);
// }

// // Use a counting for loop when you need the index or want to manipulate the array during iteration, and use a for...of loop for simpler, more readable iteration over the values directly.

// // TODO: Part four.
// // Using the provided prices array, build display strings with `map`, keep the items under five
// // euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// // result. Add a comment stating what `forEach` would have returned in their place, and why
// // that is the well-known trap.

// // * The provided prices:
// const prices = [4.5, 12, 3.2, 8];

// const displayPrices = prices.map((price) => `€${price.toFixed(2)}`);
// console.log("Display strings:", displayPrices);

// const affordableItems = prices.filter((price) => price < 5);
// console.log("Affordable items:", affordableItems);

// const expensiveItem = prices.find((price) => price > 10);
// console.log("Expensive item:", expensiveItem);

// // `forEach` would have returned `undefined` in their place, which is the well-known trap of using `forEach` for side effects instead of `map`, `filter`, or `find`.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Asake",
];
console.log(artists);
// Adding a new artist does not require changing the loop logic, as it will automatically include the new entry in the iteration.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const menuCopy = [...menu];
menuCopy.push("Seafood");
console.log("Original menu length:", menu.length);
console.log("Copied menu length:", menuCopy.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
let sum = 0;
let largest = numbers[0];

for (const num of numbers) {
  sum += num;
  if (num > largest) {
    largest = num;
  }
}

console.log("Sum of numbers:", sum);
console.log("Largest number:", largest);

// FizzBuzz implementation
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
const testString = "Racecar";
let reversedString = "";
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (let i = testString.length - 1; i >= 0; i--) {
  reversedString += testString[i];
}

for (const char of testString.toLowerCase()) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log("Reversed string:", reversedString);
console.log("Vowel count:", vowelCount);

const isPalindrome = testString.toLowerCase() === reversedString.toLowerCase();
console.log(`Is "${testString}" a palindrome?`, isPalindrome);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
