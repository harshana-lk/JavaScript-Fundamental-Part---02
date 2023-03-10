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

// const friend1 = "Nermo";
// const friend2 = "Garfield"; //==> Without Arrays
// const friend3 = "Olivia";

// const friends = ["Nermo", "Garfield", "Olivia"]; //==> With Arrays(Method 1)
// console.log(friends);
// const newFriends = new Array("Harshana", "Hansi"); //==> With Arrays(Method 2)
// console.log(newFriends);

// console.log(friends[0]); // To print an specific index in an Array
// console.log(friends[friends.length - 1]);

// friends[2] = "Harshana";
// console.log(friends); // can change specified index value in an Array

// const firstName = "Harshana";
// const harshana = [firstName, "Jayaweera", 2023 - 2000, "Student", friends];
// console.log(harshana);
// console.log(harshana.length);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const year = [2000, 2001, 2002];
// console.log(calcAge(year)); // this cant be happen , this is wrong

// console.log(calcAge(year[0]));
// console.log(calcAge(year[1]));
// console.log(calcAge(year[year.length - 1]));

// const age = [
//   calcAge(year[0], calcAge(year[1], calcAge(year[year.length - 1]))), // Arrays can assign methods (Expression - When they produces a value)
// ];
// console.log(age);

// const friends = ["Nermo", "Garfield", "Olivia"];

// // Add elements
// friends.push("Harshana"); // addling element to end of the array
// console.log(friends);
// friends.unshift("Sewwandi"); // adding element to begining of the array
// console.log(friends);

// // Remove elements
// friends.pop(); // removing the element that located in last of the array
// console.log(friends);
// friends.shift(); // removing the element that locatedm in the beginig of the array
// console.log(friends);

// console.log(friends.indexOf("Nermo")); //returning the index of the element

// console.log(friends.includes("Nermo"));

// if (friends.includes("Nermo")) {
//   console.log("You have a friend called Nermo");
// }

// const harshana = {
//   firstName: "Harshana",
//   lastName: "Jayaweera",
//   age: 22,
//   job: "Student",
//   friends: ["Nethsara", "Thamindu", "Sewwandi"],
// };

// console.log(harshana);
// console.log(harshana.firstName);
// console.log(harshana["lastName"]);

// const nameKey = "Name";
// console.log(harshana["first" + nameKey]);
// console.log(harshana["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to konw about harshana?Choose between firstName,lastName,age,job,friends"
// );

// if (harshana[interestedIn]) {
//   console.log(harshana[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName,lastName,age,job,friends"
//   );
// }

// harshana.location = "Sri Lanka";
// harshana["Twitter"] = "@harshana___lk";
// console.log(harshana);

// console.log(
//   `${harshana.firstName} has ${harshana.friends.length} friends and ${harshana.friends[0]} is the best friend`
// );

// const harshana = {
//   firstName: "Harshana",
//   lastName: "Jayaweera",
//   year: 2000,
//   job: "Student",
//   friends: ["Nethsara", "Thamindu", "Sewwandi"],
//   hasDriversLicence: true,

//   calcAge: function () {
//     this.age = 2023 - this.year;
//     return this.age;
//   },

//   about: function () {
//     console.log(
//       `${
//         this.firstName
//       } is a ${this.calcAge()} years old student , and he has ${
//         harshana.hasDriversLicence ? "Drivers Licenece" : "not drivers Licence"
//       }`
//     );
//   },
// };

// console.log(harshana.calcAge());
// console.log(harshana.about());

// const mark = {
//   name: "mark",
//   height: 1.8,
//   mass: 72,

//   marksBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   name: "john",
//   height: 1.5,
//   mass: 65,

//   johnsBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (mark.marksBMI() > john.johnsBMI()) {
//   console.log(
//     `${mark.name}'s BMI (${mark.marksBMI()}) is higher than ${
//       john.name
//     }'s BMI (${john.johnsBMI()})`
//   );
// } else {
//   console.log(
//     `${john.name}'s BMI (${john.johnsBMI()}) is higher than ${
//       mark.name
//     }'s BMI (${mark.marksBMI()})`
//   );
// }

// for (let rep = 0; rep <= 10; rep++) {
//   console.log(`Harshana kariya ${rep} 👍`);
// }

const harshana = [
  "Harshana",
  "Jayaweera",
  22,
  "Student",
  ["Nethsara", "Thamindu", "Sewwandi"],
];

const type = [];

for (let index = 0; index < harshana.length; index++) {
  console.log(harshana[index]);
  type.push(typeof harshana[index]);
}

console.log(type);

const years = [2000, 2001, 2002, 2003, 2004];
const ages = [];

for (let index = 0; index < years.length; index++) {
  ages.push(2023 - years[index]);
}

console.log(ages);

console.log("---------ONLY STRINGS-----------");
for (let index = 0; index < harshana.length; index++) {
  if (typeof harshana[index] !== "string") {
    continue;
  }
  console.log(harshana[index], typeof harshana[index]);
}
