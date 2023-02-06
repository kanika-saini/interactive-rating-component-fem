"use strict";

const rating = document.querySelector(".section-1");
const thankyou = document.querySelector(".section-2");
let number = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const selectedText = document.querySelector(".selected--number");

submit.addEventListener("click", function () {
  thankyou.classList.toggle("hidden");
  rating.classList.toggle("hidden");
});

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    selectedText.textContent = number[i].textContent;
  });
}
