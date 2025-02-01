/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/CardsWidget/CardsWidget.js

class CardsWdget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  markup() {
    return `
            <div class="cards-container">
                <div class="card visa"></div>
                <div class="card mastercard"></div>
                <div class="card american-express"></div>
                <div class="card discover"></div>
                <div class="card jcb"></div>
                <div class="card diners"></div>
                <div class="card mir"></div>
            </div>
        `;
  }
  bindToDOM() {
    this.parentEl.insertAdjacentHTML("afterbegin", this.markup());
  }
  makeActive(sel) {
    const list = document.querySelectorAll(".card");
    list.forEach(i => {
      i.classList.remove("active");
    });
    const activeCard = document.querySelector(sel);
    activeCard.classList.add("active");
  }
}
;// ./src/js/bankCheker.js
function bankCheker(value) {
  const number = value.toString();
  if (number[0] === "6") {
    return ".discover";
  } else if (number[0] === "5") {
    return ".master-card";
  } else if (number[0] === "4") {
    return ".visa";
  } else if (number[0] === "2" && number[1] === "2") {
    return ".mir";
  } else if (number[0] === "3" && number[1] === "5") {
    return ".jcb";
  } else if (number[0] === "3" && number[1] === "4" || number[1] === "7") {
    return ".american-express";
  } else if (number[0] === "3") {
    return ".diners";
  }
}
;// ./src/js/cardNumberValidator.js
function cardNumberValidator(value) {
  let ch = 0;
  const num = String(value).replace(/\D/g, "");
  const isOdd = num.length % 2 !== 0;
  if ("" === num) return false;
  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i], 10);
    ch += (isOdd | 0) === i % 2 && 9 < (n *= 2) ? n - 9 : n;
  }
  return 0 === ch % 10;
}
;// ./src/js/FormWidget/FormWidget.js




class FormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  markup() {
    return `
        <form class="credit-card-form">
            <input type="text" id="card-input" class="input">
            <button class="submit">Click To Validate</button>
        </form>
        `;
  }
  bindToDOM() {
    this.parentEl.innerHTML = this.markup();
    this.element = this.parentEl.querySelector(".credit-card-form");
    this.submit = this.element.querySelector(".submit");
    this.input = this.element.querySelector(".input");
    this.element.addEventListener("submit", this.handlerSubmit);
  }
  handlerSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    const cardsWidget = new CardsWdget();
    if (cardNumberValidator(value)) {
      this.input.classList.add("valid");
      this.input.classList.remove("invalid");
      const activeCard = bankCheker(value);
      cardsWidget.makeActive(activeCard);
    } else {
      this.input.classList.add("invalid");
      this.input.classList.remove("valid");
    }
  }
}
;// ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const cardsWidget = new CardsWdget(container);
  const formWidget = new FormWidget(container);
  formWidget.bindToDOM();
  cardsWidget.bindToDOM();
});
;// ./src/index.js



// TODO: write your code in app.js
/******/ })()
;