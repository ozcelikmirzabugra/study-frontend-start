let user1 = {
  name: "Mirza",
  last: "Ozcelik",
  age: 23,
  address: {
    city: "Ankara",
    town: "Etimesgut",
  },
  hobbies: ["gym", "watching videos"],
};

let user2 = {
  name: "Sude",
  last: "Misirlioglu",
  age: 23,
  address: {
    city: "Ankara",
    town: "Incek",
  },
  hobbies: ["gym", "watching films"],
};

let users = [user1, user2];

let sonuc = users[1].hobbies[1];

console.log(sonuc);
