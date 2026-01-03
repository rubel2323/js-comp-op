let weight = 22.9;
let height;
let BMI = weight(kg) / height(m) ** 2;
let manIs;
if (weight < 18.5) {
  manIs = "underweight";
} else if (weight >= 18.5 && weight <= 24.9) {
  manIs = "Normal";
} else if (weight >= 25 && weight <= 29.9) {
  manIs = "Overweight";
} else {
  manIs = "Obese";
}
console.log("The person is ", manIs);
