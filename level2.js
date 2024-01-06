const bigCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// ["Facebook", "Google", "Microsoft"]
// const result = [];
// let cmt = 0;
// for (let index = 0; index < bigCompanies.length; index++) {
//   for (let index2 = 0; index2 < bigCompanies[index].length; index2++) {
//     if (bigCompanies[index][index2] == "o") cmt++;
//   }

//   if (cmt == 2) result.push(bigCompanies[index]);
//   cmt = 0;
// }
// console.log(result);

// const result = bigCompanies.filter((item) => {
//   let re = /[o]/g;
//   return item.match(re)?.length >= 2;
// });
// console.log(result);
// 15
// console.log(bigCompanies.sort());
// console.log(bigCompanies.reverse());

// 17 Slice out the first 3 companies

// const firstThreeCompanies = bigCompanies.slice(0, 3);

// console.log("First 3 companies:", firstThreeCompanies);
// // 18// Slice out the last 3 companies
// const lastThreeCompanies = bigCompanies.slice(-3);

// console.log("Last 3 companies:", lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array
// if (bigCompanies.length % 2 != 0) {
//   console.log(bigCompanies[(bigCompanies.length - 1) / 2]);
// } else {
//   console.log(
//     bigCompanies[Math.floor(bigCompanies.length / 2) - 1],
//     bigCompanies[Math.floor(bigCompanies.length) / 2]
//   );
// }
// console.log(Math.round(3.1));
// 20. Remove the first IT company from the array
// let removedCpmpany = bigCompanies.shift();
// console.log(removedCpmpany);
// console.log(bigCompanies);
// 21. Remove the middle IT company or companies from the array

// if (bigCompanies.length % 2 != 0) {
//   let middleIndex = (bigCompanies.length - 1) / 2;
//   bigCompanies.splice(middleIndex, 1);
// } else {
//   let middleIndex = Math.floor(bigCompanies.length / 2) - 1;
//   bigCompanies.splice(middleIndex, 2);
//   // bigCompanies[Math.floor(bigCompanies.length) / 2];
// }
// console.log(bigCompanies);
//  Remove the last IT company from the array
// bigCompanies.pop();
// console.log(bigCompanies);
// 20.Remove all IT companies
// bigCompanies.splice(0);
// console.log(bigCompanies);
