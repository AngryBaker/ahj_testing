import CardsWdget from "./CardsWidget/CardsWidget";
import FormWidget from "./FormWidget/FormWidget";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const cardsWidget = new CardsWdget(container);
  const formWidget = new FormWidget(container);

  formWidget.bindToDOM();
  cardsWidget.bindToDOM();
});
