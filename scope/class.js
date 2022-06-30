class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log(`login`);
  }
}

const user1 = new UserCreator("deve", 4);
const user2 = new UserCreator("de", 0);

user1.increment();
user1.login();
console.log(user1);
console.log(user2);
