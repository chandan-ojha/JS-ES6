//Spread Operator
var numbers = [1,2,3,4];

var a = [...numbers] //here "a" is independent [exact copy of numbers]
var b = numbers;

//var newNumbers = [numbers[0],numbers[1],numbers[2],4,5,6];
var newNumbers = [...numbers,4,5,6];

//numbers.push(6);
//console.log(numbers);
//console.log(a);
//console.log(b);
//console.log(newNumbers);


//concat array by using spread operator
var numbers1 = [1,2,3];
var numbers2 = [4,5,6];

var numbers3 = [...numbers1, ...numbers2];
console.log(numbers3);

//object spreading
var myObj1 = {
    x: 1,
    y: 2
}

var myObj2 = {
    a: 1,
    b: 2
}

console.log({
    ...myObj1,
    ...myObj2
});