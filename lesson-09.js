"use strict";

// Lesson 09 exercise: The DOM and forms
// In your exercise repository, create a branch named `lesson-09-exercise` and switch to it.
// This lesson works with two provided files: open `lesson-09.html` with Live Server and keep
// the DevTools Console open, and write all JavaScript in `lesson-09.js`, which the page
// already loads with `defer`. The questions wait as comments in the JavaScript file.

// TODO: Part one.
// Log one sentence to the console, then log `document.title`, and confirm that both appear in
// the DevTools Console rather than in a terminal. In a comment, state what the `defer`
// attribute prevented.
console.log("Hello, Startupistan Records!");
console.log(document.title); // The `defer` attribute prevented the script from blocking the HTML parsing and ensured that the script runs after the document has been fully parsed.

// TODO: Part two.
// Select the page's `h1` with `querySelector` and replace its `textContent` with a label name
// of your choosing. Select the tagline by its class and change its text, then add the provided
// highlight class to it through `classList`.
querySelector("h1").textContent = "My Favorite Music Label";
const tagline = document.querySelector(".tagline");
tagline.textContent = "The best music from around the world.";
tagline.classList.add("highlight");

// TODO: Part three.
// The file provides the artists as an array of objects. Loop over it, create an `article`
// containing an `h3` for the name and a `p` for the genre and total runtime, fill both through
// dot notation and a template literal, and append each finished card into the element that
// carries the cards class. Reload the page and confirm that five cards stand on it.

// * The artists, provided:
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const cardsContainer = document.querySelector(".cards");

for (const artist of artists) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = artist.name;
  p.innerHTML = `<strong>Genre:</strong> ${artist.genre}<br><strong>Total Runtime:</strong> ${artist.total}`;

  article.appendChild(h3);
  article.appendChild(p);
  cardsContainer.appendChild(article);
}

// TODO: Part four.
// Add a sixth artist object of your own invention to the array and reload. Confirm that the
// sixth card exists, and state in a comment what you did not have to change, compared with the
// five hand-copied cards this course opened on.
artists.push({ name: "New Artist", genre: "New Genre", total: "10:00" }); // I did not have to change the loop that creates the cards, as it automatically handles any number of artists in the array.

// TODO: Part five.
// The page provides a button with the shuffle class and an element with the featured class. On
// click, pick a random artist using the random recipe with `Math.floor`, and write a featured
// sentence into the featured element with a template literal.
const randomArtist = artists[Math.floor(Math.random() * artists.length)];
document.querySelector(".featured").textContent =
  `Featured Artist: ${randomArtist.name}`;

// TODO: Part six.
// The page provides a form with the signup class and a text input with the artist-name id. On
// submit, call `preventDefault` on the event, read the input's `value`, and, when the value is
// truthy, push a new artist object built from it into the array and append one new card for
// it, reusing your card-building code from part three, ideally as a function that both parts
// call. An empty submission does nothing; name in a comment which falsy value makes that check
// work. As a stretch, clear the input by assigning it an empty string after each successful
// addition.
const form = document.querySelector(".signup");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const artistNameInput = document.getElementById("artist-name");
  const artistName = artistNameInput.value.trim();

  if (artistName) {
    // The falsy value that makes this check work is an empty string.
    const newArtist = { name: artistName, genre: "Unknown", total: "0:00" };
    artists.push(newArtist);
    createCard(newArtist);
    artistNameInput.value = ""; // Clear the input after successful addition
  }
});

function createCard(artist) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = artist.name;
  p.innerHTML = `<strong>Genre:</strong> ${artist.genre}<br><strong>Total Runtime:</strong> ${artist.total}`;

  article.appendChild(h3);
  article.appendChild(p);
  cardsContainer.appendChild(article);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main. This is the final exercise of the course, and the reviewed merge closes it.
// TODO: Submit the link to the pull request for review.
