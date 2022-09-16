//Array.prototype.filter()
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.filter((currentvalue,index,arr) => {
    console.log(index);
    console.log(arr)
    return currentvalue > 4;
});
//console.log(numbers);
console.log(result);