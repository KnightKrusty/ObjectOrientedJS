// subClassing

function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctions = {
  sayName: function () {
    console.log(`I am ${this.name}`);
  },
  increment: function () {
    this.score++;
  },
};

const user1 = userCreator("deve", 3);
user1.sayName(); // I am deve

// sub factory function
function paidUserCreation(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunction);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunction = {
  increseBalance: function () {
    this.accountBalance++;
  },
};

Object.setPrototypeOf(paidUserFunction, userFunctions);

const paidUser1 = paidUserCreation("Alyyas", 8, 25);
paidUser1.increseBalance();
paidUser1.sayName();

console.log(paidUser1);
console.log(user1);
