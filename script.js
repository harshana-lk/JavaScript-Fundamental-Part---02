"use strict";

// const hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I like to drive a car 🚗");

// function logger() {
//   console.log("My name is Harshana");
// }

// // Calling / Invoking / Running Function
// logger();

// // ==>Parameterized Function
// function fruitProccesor(apple, orange) {
//   console.log(apple, orange);
//   const juice = `Juice with ${apple} Aplles and ${orange} Oranges .`;
//   return juice;
// }

// const appleJuice = fruitProccesor(5, 3);
// console.log(appleJuice);
// console.log(fruitProccesor(5, 8));

// ==>Function Declaration-------------------------------------------------------------------------------------------------------------------------------

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const calcAge = calcAge1(2000);
console.log(calcAge);

// ==>Annonymous / Expression Function-------------------------------------------------------------------------------------------------------------------

const myAge = function (birthYear) {
  return 2023 - birthYear;
};

const calcAge2 = myAge(2000);
console.log(calcAge2);
