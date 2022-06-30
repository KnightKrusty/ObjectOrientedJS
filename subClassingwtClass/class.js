class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log(`${this.name} is my name`);
  }

  increaseScore() {
    this.score++;
  }
}

userCreator.prototype.hello = function () {
  console.log(`Hello world`);
};

const user1 = new userCreator("Phill", 10);

console.log(user1);
user1.sayName();

class paidUser extends userCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }

  increaseBalance() {
    this.accountBalance++;
  }
}

const user2 = new paidUser("Alyisaa", 2, 25);
user2.increaseBalance();
console.log(user2);
user2.sayName();

user2.hello();
