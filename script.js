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

// // ==>Function Declaration-------------------------------------------------------------------------------------------------------------------------------

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const calcAge = calcAge1(2000);
// console.log(calcAge);

// // ==>Annonymous / Expression Function-------------------------------------------------------------------------------------------------------------------

// const myAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const calcAge2 = myAge(2000);
// console.log(calcAge2);

// //==> Arrow Function---------------------------------------------------------------------------------------------------------------------------------------
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);

// const yearsUntillRetirement = (age3, firstName) => {
//   const retirement = 65 - age3;
//   return `${firstName} you are retiring in ${retirement} years`;
// };

// console.log(yearsUntillRetirement(age3, "Harshana"));

// // ==>Nested Functions--------------------------------------------------------------------------------------------------------------------------------------
// function cutFruits(fruits) {
//   return fruits * 4;
// }

// function fruitProccesor(apple, orange) {
//   const appleFruit = cutFruits(apple);
//   const orangeFruit = cutFruits(orange);
//   const juice = `Juice with ${appleFruit} Aplles and ${orangeFruit} Oranges .`;
//   return juice;
// }

// console.log(fruitProccesor(5, 2));

const calcAge = function (birthYear) {
  return 1950 - birthYear;
};

const yearsUntillRetirement = (birthYear, firstName) => {
  const retirement = calcAge(birthYear);
  if (retirement > 0) {
    return `${firstName} you are retiring in ${retirement} years`;
  } else {
    return `${firstName} you are already retired`;
  }
};

console.log(yearsUntillRetirement(2000, "Harshana"));
