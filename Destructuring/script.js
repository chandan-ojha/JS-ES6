//Destructuring

//Object Destructuring

/*Step-01*/
/*const user = {
    id: 339,
    name: 'Chandan',
    age: 35
};*/

//const {name: title} = user;
//console.log(title);

/* Step-02 Nested Way */
/*const user = {
    id: 2425,
    name: 'Chandan',
    age: 24,
    education: {
        degree: "BSC in SWE",
    },
};

const {education : {degree : x} = {} } = user;
console.log(x);*/

//Array Destructuring
//var numbers = [1, 2, [3, 100, 500], 4, 5, 6];
//var [a,b] = numbers;
//var [, a, , , ,b] = numbers;
/*var [,,[,a,b]] = numbers;
console.log(a,b);*/

//Destructuring Swap Example
var a = 1;
var b = 2;

//the old way
/*var temp = a;
a = b;
b = temp;*/

//new way
[b,a] = [a, b];

console.log(a, b);
