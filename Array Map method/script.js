//Array.prototype.map()
var numbers = [1,2,3,4,5,6];

var result = numbers.map((num) => { //return a new array
    return 2 * num;
})

console.log(numbers);
console.log(result);