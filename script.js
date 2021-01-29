document.querySelector("#first-class-counter").value = 0;

const increaseButton = document.querySelectorAll(".increase-counter");
const decreaseButton = document.querySelectorAll(".decrease-counter");

const firstClassIncreaseButton =  increaseButton[0].addEventListener("click", () => {
   const counter = parseInt(document.querySelector("#first-class-counter").value);
   const currentValue = counter + 1
   document.querySelector("#first-class-counter").value = currentValue;
})

const firstClassDecreaseButton =  decreaseButton[0].addEventListener("click", () => {
    const counter = parseInt(document.querySelector("#first-class-counter").value);
    const currentValue = counter - 1
    document.querySelector("#first-class-counter").value = currentValue;
 })

 const economyIncreaseButton =  increaseButton[1].addEventListener("click", () => {
    const counter = parseInt(document.querySelector("#economy-counter").value);
    const currentValue = counter + 1
    document.querySelector("#economy-counter").value = currentValue;
 })

 const economyDecreaseButton =  decreaseButton[1].addEventListener("click", () => {
    const counter = parseInt(document.querySelector("#economy-counter").value);
    const currentValue = counter - 1
    document.querySelector("#economy-counter").value = currentValue;
 })