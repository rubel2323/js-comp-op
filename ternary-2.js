let price = 1811;
const isLeader = true;
// if (isLeader == false) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 100;
// }

price =
  isLeader == true ? (price > 1000 ? (price = price / 2) : 0) : price + 100;
console.log(price);
