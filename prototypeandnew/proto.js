// avoiding duplication using prototype chain

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log(`${this.name}, You are logged in`);
  },
};

const user1 = userCreator("Ram", 4);
const user2 = userCreator("Lakshman", 4);
user1.increment();
user1.login();

// __proto__ property not prototype that is diffrent
console.log(user1.__proto__);
console.log(user2);
