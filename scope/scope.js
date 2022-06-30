function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

/* 
implicit agrument

this will be assigned automatically to its parent scope
whome it got called from..

this will save us from assigning this to a variable and 
do things on it..
*/

UserCreator.prototype.increment = function () {
  const add1 = () => this.score++;
  add1();
};

UserCreator.prototype.login = function () {
  console.log("login");
};

const user1 = new UserCreator("Dev", 0);
user1.increment();
console.log(user1);
