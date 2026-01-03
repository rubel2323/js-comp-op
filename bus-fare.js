const fare = 800;
const age = 40;
let isStudents = false;
if (age <= 10) {
  console.log("It is children.So, fare is free");
} else if (isStudents == true) {
  console.log("Your fare is 50%,=", fare / 2);
} else if (age >= 60) {
  console.log(
    "They are senior citizen,they will get 15% discount",
    (fare * 15) / 100
  );
} else {
  console.log("It is regular fare =", fare);
}
