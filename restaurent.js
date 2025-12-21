const age = 20;
const price = 3000;
if (age <= 12) {
  console.log("Eat freely");
} else if (price >= 4000) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log("you hav to pay full");
}
