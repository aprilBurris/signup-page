// console.log("Hello, world!");

let clubName = "Tay's Etiquette Club";
console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Saturday, November 7th at 6 PM."
}

nextButton.addEventListener("click", showNextMeeting);