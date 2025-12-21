// const marks = 40;
// if (marks >= 0 && marks <= 32) {
//   const grade = "F";
//   console.log(grade);
// } else if (marks >= 33 && marks <= 39) {
//   const marks = "D";
//   console.log(marks);
// } else if (marks >= 40 && marks <= 49) {
//   const marks = "C";
//   console.log(marks);
// } else if (marks >= 50 && marks <= 59) {
//   const marks = "B";
//   console.log(marks);
// } else if (marks >= 60 && marks <= 69) {
//   const marks = "A-";
//   console.log(marks);
// } else if (marks >= 70 && marks <= 79) {
//   const marks = "A";
//   console.log(marks);
// } else {
//   const marks = "A+";
//   console.log(marks);
// }

let marks = 40;
if (marks >= 0 && marks <= 32) {
  grade = "F";
} else if (marks >= 33 && marks <= 39) {
  grade = "D";
} else if (marks >= 40 && marks <= 49) {
  grade = "C";
} else if (marks >= 50 && marks <= 59) {
  grade = "B";
} else if (marks >= 60 && marks <= 69) {
  grade = "A-";
} else if (marks >= 70 && marks <= 79) {
  grade = "A";
} else if (marks >= 80 && marks <= 100) {
  grade = "A+";
} else {
  grade = "Invalid marks";
}

console.log("Your grade is:", grade);
