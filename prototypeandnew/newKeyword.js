/*
new keyword Automate the process of creating 
an object and linking its functionalities 
using __proto__ property
*/

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5; // 5
multiplyBy2(3); // 6

// property  in function object combo
console.log(multiplyBy2.prototype); // {}

// new keyword to create object

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.login = function () {
  console.log("login");
};

/*
    new keyword mutating the execution context of the
    called of that function, and we created a new excution
    context,

    new keyword will add alot of things inside of that 
    excution content,

    1. insert this assignment to an empty object
    2. assign arguments to the parameters this.name, score
    
    1. this: {} 
    2. add __proto__ property which links to prototype
        object
        __proto__  link to objectName.prototype
    3. set the passed arguments to stored property in this object
        this.score = score
    4. auto return the object {name: "phil", score: 4, __proto__: link to prototype}
    

*/

const user1 = new UserCreator("eva", 9);
user1.increment();

console.log(user1.__proto__);

console.log(user1.__proto__); //{ increment: [Function (anonymous)], login: [Function (anonymous)] }
