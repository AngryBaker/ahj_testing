import "./cardsWidget.css";

export default class CardsWdget {
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
    list.forEach((i) => {
      i.classList.remove("active");
    });

    const activeCard = document.querySelector(sel);

    activeCard.classList.add("active");
  }
}
