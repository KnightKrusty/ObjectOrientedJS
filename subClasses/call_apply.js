/*
call and apply:

this always refers to the objects to the left to 
the dot on which the function (method to being called )
unless the override thta by running the function using
.call and .apply() which let us set the value of this inside
of the increment function

call: in call we pass argument 
obj.increment.call(otherobj, first argument, sec argumen)

wehre as in 
apply: in apply we pass an array of argument 
obj.increment.apply(otherobj, [firstargu, secagrument])

*/

const obj = {
  num: 3,
  increment: function () {
    this.num++;
  },
};

const otherObj = {
  num: 10,
};

obj.increment();

obj.increment.call(otherObj);
