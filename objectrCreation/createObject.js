/*
encapsulation: Put appropriate functionanility 
with apropriate data
*/

// object literal

const user1 = {
  name: "Derek",
  scroe: 4,
  increment: function () {
    user1.scroe++;
  },
};

user1.increment();

// object create

const user3 = Object.create(null);

user3.name = "Evea";
user3.scroe = 4;
user3.increment = function () {
  user3.scroe++;
};

console.log(user3);

// generate object using a function

/*
    Problem..
    Hard to add feature
    not performant in terms of memory
    (duplication of methods stored with every new object)
*/

function userCreation(name, scroe = 0) {
  const newUser = {};
  newUser.name = name;
  newUser.scroe = scroe;
  newUser.increment = function () {
    newUser.scroe++;
  };

  return newUser;
}

const user4 = userCreation("Ram");
const user5 = userCreation("Lakshay", 4);

user4.increment();
console.log(user4);
console.log(user5);
