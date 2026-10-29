// console.log("Hello, world!");

let clubName = "Tay's Etiquette Club";
console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

// next meeting button and function
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

// next meeting button function
function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Saturday, November 7th at 6 PM."
}

// click listener
nextButton.addEventListener("click", showNextMeeting);

// dark mode button
let themeButton = document.querySelector("#theme-btn");

// dark mode function
function toggleTheme () {
  document.body.classList.toggle("dark");
}

// dark mode click listener
themeButton.addEventListener("click", toggleTheme);