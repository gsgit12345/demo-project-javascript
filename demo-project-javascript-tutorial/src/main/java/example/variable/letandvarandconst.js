// let ,var and const

function  helloVar()
{
var a=10;
console.log(a);

let c=10;

var a=9;  //declared no error

//let c=10;  //it will throw error
console.log(c)
{
var a=30;
let c=40;
console.log(a+"="+c);
}

const sh="hello";

//sh ="hhh";  //it can reassigned ;
console.log(sh);

//find the type of variable

//objects in javascript.it is not primitive datatype
const item ={   //it is like a map in java
"a": 100,
"c": 200,
"d": true,
"hello":"hello how are "

}

console.log(item["c"]);

}

helloVar();
