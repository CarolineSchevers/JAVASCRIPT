// TEST
// Variables
let x = "5";
let y = 4;
var car = {type:"Fiat", model:"500", color:"white"}; //
let w = "Hallo ";
const z = 20; // we cannot change constant primitive values, but we can change the properties of constant objects.

/*let gives you the privilege to declare variables that are limited in scope to the block, statement of expression unlike var.
var is rather a keyword which defines a variable globally regardless of block scope. */

console.log(car); // console.log still just prints out the object as a string
console.log(y); 
console.log(z);

console.dir(car); // console.dir recognizes the string as an object
console.dir(y);
console.dir(z);

s = x + y
console.log(s) 
t = x - y
console.log(t)
//Data types

/* 
number: Numbers can be written with or without decimals
string: zero or more characters written inside "" or '', used for text
array: used to store multiple values in a single variable
boolean: represents one of two values: true or false
*/

var age = 24;
var name = "Caroline";
var animal = ["dog", "cat", "pigeon"];

// Operators
/* List of operators: 
    Assignment operators
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Logical operators
    String operators
    Conditional (ternary) operator
    Comma operator
    Unary operators
    Relational operators
*/

/* An assignment operator assigns a value to its left operand based on the value of its right operand. 
The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. 
That is, x = y assigns the value of y to x.

+=  
-=  
*=  
/=  
%=  
... */

/* Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. 
The standard arithmetic operators are:
Addition (+)
Subtraction (-)
Multiplication (*)
Exponentiation (**)
Division (/)
Modulus (Division Remainder) (%)
Increment (++)
Decrement (--) 
*/

y += name
console.log(y)

/* z -= age //const value can not be changed that's why there's an error.
console.log(z)
*/

age *= 3
console.log(age)

age = 24
age /= z
console.log(age)

age = 24
console.log(age)
age %= 5
console.log(age)

y = "Bonjour "
a = y + name
console.log(a)

age = 24
b = age - 5
console.log(b)

c = z * 3 
console.log(c)

d = z**2
console.log(d)

e = z % 7
console.log(e)

f = Boolean(e > 9)
console.log(f)

g = e < 9
console.log(g)

h = age == 4
console.log(h)

var l = 26
l++
    console.log(l)

// Functions for HTML-file
// Arithmetic operators
function addition() {
    let x = 26
    let y = 4
    x = x + y
    document.getElementById("add").innerHTML = x;
}

function additionS() {
    let x = "Hello "
    let y = "World"
    x = x + y
    document.getElementById("addS").innerHTML = x;
}

function additionSN() {
    let s = "Hello "
    let x = 26
    x = s + x
    document.getElementById("addSN").innerHTML = x;
}

function additionSnN() {
    let sn = "5"
    let x = 26
    x = sn + x
    document.getElementById("addSnN").innerHTML = x;
}

function additionSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s + a
    document.getElementById("addSA").innerHTML = x;
}

function substraction() {
    let x = 26
    let y = 4
    x = x - y
    document.getElementById("sub").innerHTML = x;
}

function substractionS() {
    let x = "Hello "
    let y = "World"
    x = x - y
    document.getElementById("subS").innerHTML = x;
}

function substractionSN() {
    let s = "Hello "
    let x = 26
    x = s - x
    document.getElementById("subSN").innerHTML = x;
}

function substractionSnN() {
    let sn = "5"
    let x = 26
    x = sn - x
    document.getElementById("subSnN").innerHTML = x;
}

function substractionSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s - a
    document.getElementById("subSA").innerHTML = x;
}

function division() {
    let x = 26
    let y = 4
    x = x / y
    document.getElementById("div").innerHTML = x;
}

function divisionS() {
    let x = "Hello "
    let y = "World"
    x = x / y
    document.getElementById("divS").innerHTML = x;
}

function divisionSN() {
    let s = "Hello "
    let x = 26
    x = s / x
    document.getElementById("divSN").innerHTML = x;
}

function divisionSnN() {
    let sn = "5"
    let x = 26
    y = sn / x
    document.getElementById("divSnN").innerHTML = y;
}

function divisionSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s / a
    document.getElementById("divSA").innerHTML = x;
}

function multiplication() {
    let x = 26
    let y = 4
    x = x * y
    document.getElementById("mul").innerHTML = x;
}

function multiplicationS() {
    let x = "Hello "
    let y = "World"
    x = x * y
    document.getElementById("mulS").innerHTML = x;
}

function multiplicationSN() {
    let s = "Hello "
    let x = 26
    x = s * x
    document.getElementById("mulSN").innerHTML = x;
}

function multiplicationSnN() {
    let sn = "5"
    let x = 26
    y = sn * x
    document.getElementById("mulSnN").innerHTML = y;
}

function multiplicationSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s * a
    document.getElementById("mulSA").innerHTML = x;
}

function remainder() {
    let x = 26
    let y = 4
    x = x % y
    document.getElementById("re").innerHTML = x;
}

function remainderS() {
    let x = "Hello "
    let y = "World"
    x = x % y
    document.getElementById("reS").innerHTML = x;
}

function remainderSN() {
    let s = "Hello "
    let x = 26
    x = s % x
    document.getElementById("reSN").innerHTML = x;
}

function remainderSnN() {
    let sn = "5"
    let x = 26
    y = sn % x
    document.getElementById("reSnN").innerHTML = y;
}

function remainderSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s % a
    document.getElementById("reSA").innerHTML = x;
}

function exponentiation() {
    let x = 26
    let y = 4
    x = x ** y
    document.getElementById("ex").innerHTML = x;
}

function exponentiationS() {
    let x = "Hello "
    let y = "World"
    x = x ** y
    document.getElementById("exS").innerHTML = x;
}

function exponentiationSN() {
    let s = "Hello "
    let x = 26
    x = s ** x
    document.getElementById("exSN").innerHTML = x;
}

function exponentiationSnN() {
    let sn = "5"
    let x = 26
    y = sn ** x
    document.getElementById("exSnN").innerHTML = y;
}

function exponentiationSA() {
    let s = "Hello "
    let a = animal = ["dog", "cat", "pigeon"];
    x = s ** a
    document.getElementById("exSA").innerHTML = x;
}

function increment() {
    let x = 26
    x++
    document.getElementById("inc").innerHTML = x;
}

function incrementS() {
    let s = "Hello "
    s++
    document.getElementById("incS").innerHTML = s;
}

function incrementSnN() {
    let sn = "5"
    sn++
    document.getElementById("incSnN").innerHTML = sn;
}

function incrementSA() {
    let x = animal = ["dog", "cat", "pigeon"];
    x++
    document.getElementById("incSA").innerHTML = x;
}

function decrement() {
    let x = 26
    x--
    document.getElementById("dec").innerHTML = x;
}

function decrementS() {
    let s = "Hello "
    s--
    document.getElementById("decS").innerHTML = s;
}

function decrementSnN() {
    let sn = "5"
    sn--
    document.getElementById("decSnN").innerHTML = sn;
}

function decrementSA() {
    let x = animal = ["dog", "cat", "pigeon"];
    x--
    document.getElementById("decSA").innerHTML = x;
}

// Assignment operators
function additionAs() {
    let x = 13
    let y = 7
    x += y
    document.getElementById("add-as").innerHTML = x;
}

function substractionAs() {
    let x = 13
    let y = 7
    x -= y
    document.getElementById("sub-as").innerHTML = x;
}

function divisionAs() {
    let x = 13
    let y = 7
    x /= y
    document.getElementById("div-as").innerHTML = x;
}

function multiplicationAs() {
    let x = 13
    let y = 7
    x *= y
    document.getElementById("mul-as").innerHTML = x;
}

function remainderAs() {
    let x = 13
    let y = 7
    x %= y
    document.getElementById("re-as").innerHTML = x;
}

function exponentiationAs() {
    let x = 13
    let y = 7
    x **= y
    document.getElementById("ex-as").innerHTML = x;
}