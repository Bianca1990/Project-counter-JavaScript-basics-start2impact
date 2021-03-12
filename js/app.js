"use strict";

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const zeroDisplay = document.getElementById("zero-display");
const resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click", addNumber);
function addNumber() {
  count++;
  zeroDisplay.innerHTML = count;
  colorChange();
}

minusBtn.addEventListener("click", subtractNumber);
function subtractNumber() {
  count--;
  zeroDisplay.innerHTML = count;
  colorChange();
}

function colorChange() {
  if (count < 0) {
    zeroDisplay.style.color = "red";
  } else {
    zeroDisplay.style.color = "black";
  }
}

resetBtn.addEventListener("click", resetAll);
function resetAll() {
  count = 0;
  zeroDisplay.innerHTML = "0";
  zeroDisplay.style.color = "black";
}
