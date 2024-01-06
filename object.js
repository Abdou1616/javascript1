//              exo2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// // 1. Find the person who has many skills in the users object.
// let maxSkills = 0;
// let personWithMostSkills = null;

// // Iterate through the users object
// for (const person in users) {
//   const skillsCount = users[person].skills.length;

//   // Check if the current person has more skills than the current maximum
//   if (skillsCount > maxSkills) {
//     maxSkills = skillsCount;
//     personWithMostSkills = person;
//   }
// }
// console.log(personWithMostSkills);
// //2 Count logged in users,count users having greater than equal to 50 points from the
// // following object.
// for (const person in users) {
//   const isLoggedIn = users[person].isLoggedIn;
//   const points = users[person].points;
//   if (isLoggedIn == true && points >= 50) {
//     console.log(person);
//   }
// }
// 1. Find people who are MERN stack developer from the users object
for (const person in users) {
  const skills1 = users[person].skills;

  if (
    skills1.includes("MongoDB") &&
    skills1.includes("Express") &&
    skills1.includes("React") &&
    skills1.includes("Node")
  ) {
    console.log(person);
  }
}
