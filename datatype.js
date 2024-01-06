// 1. Declare a variable named challenge and assign it to an initial value ' '.

let challenge = " Full stack JS track";
// 2. Print the string on the browser console using console.log()

console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log("Length of the string:", challenge.length);
// 4. Change all the string characters to capital letters using toUpperCase() method

let challengeUpperCase = challenge.toUpperCase();
console.log("Uppercase:", challengeUpperCase);
// 5. Change all the string characters to lowercase letters using toLowerCase() method
let challengeLowerCase = challenge.toLowerCase();
console.log("LowerCase:", challengeLowerCase);
// 6. Cut (slice) out the first word of the string using substr() or substring() method
let firstWord = challenge.substring(5, challenge.length);
console.log("First word:", firstWord);
// part2
let randomNUmber = Math.random();
// Math.floor(Math.random()*(max-min)+min)
console.log(Math.floor(randomNUmber * 50 + 50));
// 2
// Math.floor(Math.random()*(max-min)+min)
console.log(Math.floor(randomNUmber * 255));

// exo1
console.log(parseInt("10") === 10);

const now = new Date();
// const d = "1970-01-01";
// // const date = 1970 - 01 - 01;
// console.log((now - date) * 12 * 30 * 24 * 60 * 60);

// bla bla
// let base = prompt("give base");
// let height = prompt("give height");

// let surface = base * height * 0.5;
// alert(surface);
// 2
// let Birthyear = prompt("Enter your birthyear");
// let year = now.getFullYear();
// alert(year - Birthyear);
// let firstName = prompt("Enter your firstname");
// let lastName = prompt("Enter your lastname");
// let message;
// if (firstName.length - lastName.length > 0) {
//   message = `your first name  ${firstName} ${} is longer than your lastname ${lastName}`;
// } else {
//   message = `your  lastname ${lastName} is longer than your first name  ${firstName}`;
// }
// alert(message);

// let userInput = prompt("Enter a number:");
// // Convert the input to a number
// let enteredNumber = parseInt(userInput);
// if (enteredNumber % 2 === 0) {
//   alert("The entered number is even paire.");
// }

// console.log('full stakc java');
// console.log('full stakc java');
// for (let i = 0; i <= 100; i++) {
//   console.log(`full stakc java ${i}`);
// }
// for (let index = 0; index < 100; index++) {
//       console.log(`full stakc java ${i}`);

// }
// let i = 43;
// while (i < 10) {
//   console.log(`full stakc java ${i}`);
//   i++;
// }
// do {
//   console.log(`full stakc java ${i}`);
//   i++;
// } while (i < 4);

// let age = prompt("Enter your age");

// let message;
// if (age >= 18) {
//   message = ` you're old enough to drive`;
// } else {
//   message = `your left with  ${18 - age}  years to drive `;
// }
// alert(message);
// --------------
// let userInput = prompt("Enter a number:");
// // Convert the input to a number
// let enteredNumber = parseInt(userInput);
// if (enteredNumber % 2 === 0) {
//   alert("The entered number is even paire.");
// } else {
//   alert("The entered number is odd ");
// }
//

// let score = prompt("Enter your score");

// if (score > 80 && score <= 100) {
//   console.log("A");
// } else if (score > 70 && score <= 79) {
//   console.log("B");
// } else {
//   console.log("Not accepted");
// }
//  switch (day) {
// let day = prompt("What is the day  today?");
//  case 'saturday':
//  case 'sunday':
// alert(`${day} is a weekend.`)
// break; n
//  }
//4  An area of a rectangle is calculated as follows: area = length x width. Write a
// function which calculates areaOfRectangle
function areaOfRectangle(length, width) {
  return length * width;
}

const rectangleArea = areaOfRectangle(5, 10);
console.log(`The area of the rectangle is: ${rectangleArea}`);
// 5 . A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

const rectanglePerimeter = perimeterOfRectangle(5, 10);
console.log(`The perimeter of the rectangle is: ${rectanglePerimeter}`);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x
// height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

const rectPrismVolume = volumeOfRectPrism(5, 10, 2);
console.log(`The volume of the rectangular prism is: ${rectPrismVolume}`);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which
// calculates areaOfCircle
function areaOfCircle(r) {
  return Math.PI * r * r;
}
const r = 3;
const circleArea = areaOfCircle(r);
console.log(`The area of the circle is: ${circleArea}`);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x
// height) in m2. Write a function which calculates bmi. BMI is used to broadly define
// different weight groups in adults 20 years old or older.Check if a person
// is underweight, normal, overweight or obese based the information given below
function BodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  let message = "";
  console.log(bmi);
  switch (true) {
    case bmi < 18.5:
      message = "youre underweight";
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      message = " youre normal weight";
      break;
    case bmi >= 25 && bmi <= 29.9:
      message = "youre overweight";
      break;
    case bmi >= 30:
      message = "youre obese";
      break;

    default:
      message = "good luck";
  }
  return message;
}

const bmi = BodyMassIndex(59, 1.7);
console.log(bmi);
