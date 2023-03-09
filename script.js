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

// const calcAge = function (birthYear) {
//   return 1950 - birthYear;
// };

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const retirement = calcAge(birthYear);
//   if (retirement > 0) {
//     return `${firstName} you are retiring in ${retirement} years`;
//   } else {
//     return `${firstName} you are already retired`;
//   }
// };

// console.log(yearsUntillRetirement(2000, "Harshana"));

const friend1 = "Nermo";
const friend2 = "Garfield"; //==> Without Arrays
const friend3 = "Olivia";

const friends = ["Nermo", "Garfield", "Olivia"]; //==> With Arrays(Method 1)
console.log(friends);
const newFriends = new Array("Harshana", "Hansi"); //==> With Arrays(Method 2)
console.log(newFriends);

console.log(friends[0]); // To print an specific index in an Array
console.log(friends[friends.length - 1]);

friends[2] = "Harshana";
console.log(friends); // can change specified index value in an Array

const firstName = "Harshana";
const harshana = [firstName, "Jayaweera", 2023 - 2000, "Student", friends];
console.log(harshana);
console.log(harshana.length);

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const year = [2000, 2001, 2002];
console.log(calcAge(year)); // this cant be happen , this is wrong

console.log(calcAge(year[0]));
console.log(calcAge(year[1]));
console.log(calcAge(year[year.length - 1]));

const age = [
  calcAge(year[0], calcAge(year[1], calcAge(year[year.length - 1]))), // Arrays can assign methods (Expression - When they produces a value)
];
console.log(age);
