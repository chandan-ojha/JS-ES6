//ternary operator
var age = 11;
/*var type;

if(age >= 18){
  type = 'adult';
} else {
    type = 'child';
}*/

// Using by ternary operator
/*var type = (age >= 18) ? "adult" : "child" ;*/

// Using by ternary operator nested way
var type = (age >= 18) ? "adult"
                       : (age < 10)
                           ? "child"
                           : "young" ;
console.log(type);

//ternary operator shorter use
var issloggedin = true;
//var access = issloggedin ? true : false;
//simple way
var access = issloggedin;

console.log(access);

//another way
var a=6;
//var access = a > 5 ? true : false;
//simple way
var access = a > 5;
console.log(access);
