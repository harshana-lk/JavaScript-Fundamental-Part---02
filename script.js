"use strict";

// const hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I like to drive a car 🚗");

function logger() {
  console.log("My name is Harshana");
}

// Calling / Invoking / Running Function
logger();

// ==>Parameterized Function
function fruitProccesor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} Aplles and ${orange} Oranges .`;
  return juice;
}

const appleJuice = fruitProccesor(5, 3);
console.log(appleJuice);
console.log(fruitProccesor(5, 8));
