// subClassing

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function () {
  console.log(`I am ${this.name}`);
};

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator("deve", 3);
user1.sayName(); // I am deve

// sub factory function
function paidUserCreation(paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  this.accountBalance = accountBalance;
}

paidUserCreation.prototype = Object.create(userCreator.prototype);

paidUserCreation.prototype.increseBalance = function () {
  this.accountBalance++;
};

const paidUser1 = new paidUserCreation("Alyyas", 8, 25);
paidUser1.increseBalance();
paidUser1.sayName();

console.log(paidUser1);
console.log(user1);
