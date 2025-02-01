import bankCheker from "../bankCheker";
import cardNumberValidator from "../cardNumberValidator";
import CardsWdget from "../CardsWidget/CardsWidget";

import "./formWidget.css";

export default class FormWidget {
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
