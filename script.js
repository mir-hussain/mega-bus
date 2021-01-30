document.querySelector("#first-class-counter").value = 0;
document.querySelector("#economy-counter").value = 0;

function increaseCounter(counterId) {
  const counter = parseInt(document.querySelector(counterId).value);
  const currentValue = counter + 1;
  document.querySelector(counterId).value = currentValue;
}

function decreaseCounter(counterId) {
  const counter = parseInt(document.querySelector(counterId).value);
  const currentValue = counter - 1;
  if (currentValue < 0) {
    return 0;
  }
  document.querySelector(counterId).value = currentValue;
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

const increaseButton = document.querySelectorAll(".increase-counter");
const decreaseButton = document.querySelectorAll(".decrease-counter");

const firstClassIncreaseButton = increaseButton[0].addEventListener(
  "click",
  () => {
    increaseCounter("#first-class-counter");
    subTotal();
  }
);

const firstClassDecreaseButton = decreaseButton[0].addEventListener(
  "click",
  () => {
    decreaseCounter("#first-class-counter");
    subTotal();
  }
);

const economyIncreaseButton = increaseButton[1].addEventListener(
  "click",
  () => {
    increaseCounter("#economy-counter");
    subTotal();
  }
);

const economyDecreaseButton = decreaseButton[1].addEventListener(
  "click",
  () => {
    decreaseCounter("#economy-counter");
    subTotal();
  }
);


