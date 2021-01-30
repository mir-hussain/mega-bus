///////////////////// Booking Section (Main part of assignment) ///////////////////////

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

//////////////////Book Now button (Bonus part of assignment)///////////////

function displayUpdater() {
  document.querySelector(".booking-content").style.display = "none";
  document.querySelector(".booking-form").style.display = "none";
  document.querySelector(".main-content").style.display = "block";
  document.querySelector(".confirmation-area").style.display = "flex";
}

const bookNowButton = document
  .querySelector("#book-now-button")
  .addEventListener("click", function () {
    const form = document.querySelector("#from").value;
    const to = document.querySelector("#to").value;
    const departureDate = document.querySelector("#departure-date").value;
    const firstClassTicketQuantity = document.querySelector(
      "#first-class-counter"
    ).value;
    const economyTicketQuantity = document.querySelector("#economy-counter")
      .value;
    const total = document.querySelector("#total").innerText;
    if(form === "" || to === "" || departureDate === "") {
      alert("You have to input value in the stared sections.")
    }
    else {
    displayUpdater();
    document.querySelector("#message")
      .append("You are travelling from " + form + " to " + to + " on " + departureDate + " ." + "You have purchased " + firstClassTicketQuantity + " First Class ticket(s) and " + economyTicketQuantity + " Economy ticket(s)." + "Your grand total (with vat) is " + total + " $ .");
    }
  });

document.querySelector("#first-class-counter").value = 0;
document.querySelector("#economy-counter").value = 0;
document.querySelector("#from").value = '';
document.querySelector("#to").value = '';
document.querySelector("#departure-date").value = 0;