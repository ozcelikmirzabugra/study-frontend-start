// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let numbers = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);

let user = {
  first_name: "Mirza",
  last_name: "Ozcelik",
  age: 23,
  password: "qwe123",
  email: "ozcelik.mirzabugra@gmail.com",
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
