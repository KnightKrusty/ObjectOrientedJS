const obj = {
  num: 3,
};

obj.num; // 3

/*

we will add obj to global memory
we will look into obj for function name "hasOwnProperty"
then we wont find it there 
then it will look into __proto__ property
then it will move object.prototype link from __proto__
"object.prototype"  which is function object combo
then it will find "hasOwnProperty function and excute it" 


*/

console.log(obj.__proto__);
console.log(obj.hasOwnProperty("num"));

console.log(Function.prototype.toString());

// function prototype

/*

Js function also have some extra function or goodies 
in them   eg toString, call, bind, apply

when we use them on funcationName.toString it will 
look into that funcation object and would not find it then
it will look into __proto__ property that link to 
Funcation.prototype which will have those funcation
and Funcation.prototype.__proto__ will link to Object.prototype
to access object mehtod on function and if you look intoi
Object.prototype its __proto__ property will say null 

if js hit that property it will return method not found


*/

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.toString();

Function.prototype; // will give access to funcation method eg call bind apply

multiplyBy2.hasOwnProperty("score");

Function.prototype.__proto__;
