document.querySelector("#first-class-counter").value = 0;
document.querySelector("#economy-counter").value = 0;

function counterUpdater(counterId, action) {
  const counter = parseInt(document.querySelector(counterId).value);
  if (action === "increase") {
    const currentValue = counter + 1;
    document.querySelector(counterId).value = currentValue;
  } else if (action === "decrease") {
    const currentValue = counter - 1;
    if (currentValue < 0) {
      return 0;
    }
    document.querySelector(counterId).value = currentValue;
  }
}

function subTotal() {
  const firstClassCounter = parseInt(
    document.querySelector("#first-class-counter").value
  );
  const economyCounter = parseInt(
    document.querySelector("#economy-counter").value
  );
  const firstClassPrice = firstClassCounter * 150;
  const economyPrice = economyCounter * 100;
  const updatedSubTotal = firstClassPrice + economyPrice;
  document.querySelector("#sub-total").innerText = updatedSubTotal;
}

function vat() {
  const subTotalValue = parseInt(
    document.querySelector("#sub-total").innerText
  );
  const vatAmount = (subTotalValue * 10) / 100;
  document.querySelector("#vat").innerText = vatAmount;
}

function total() {
  const subTotal = parseInt(document.querySelector("#sub-total").innerText);
  const vat = parseInt(document.querySelector("#vat").innerText);
  const totalAmount = subTotal + vat;
  document.querySelector("#total").innerText = totalAmount;
}

const increaseButton = document.querySelectorAll(".increase-counter");
const decreaseButton = document.querySelectorAll(".decrease-counter");

const firstClassIncreaseButton = increaseButton[0].addEventListener(
  "click",
  () => {
    counterUpdater("#first-class-counter", "increase");
    subTotal();
    vat();
    total();
  }
);

const firstClassDecreaseButton = decreaseButton[0].addEventListener(
  "click",
  () => {
    counterUpdater("#first-class-counter", "decrease");
    subTotal();
    vat();
    total();
  }
);

const economyIncreaseButton = increaseButton[1].addEventListener(
  "click",
  () => {
    counterUpdater("#economy-counter", "increase");
    subTotal();
    vat();
    total();
  }
);

const economyDecreaseButton = decreaseButton[1].addEventListener(
  "click",
  () => {
    counterUpdater("#economy-counter", "decrease");
    subTotal();
    vat();
    total();
  }
);
