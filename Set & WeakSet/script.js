//Set & WeakSet

function log(anything){
    return console.log(anything);
}

//Array Declaration
//let myArray = [] //literal syntax
//let myArray = new Array();
//myArray[0] = 5;
//myArray[1] = 2;
//log(myArray);

//Set Declaration
//let mySet = new Set();
/*mySet.add(15);
mySet.add("Bangladesh");
mySet.delete("Bangladesh");*/
//mySet.add(5).add(6).add("Bangladesh").delete(5);
//log(mySet.size);

//mySet.clear();
//log(mySet.has("Bangladesh"));
//log(mySet);

//Array Convert to Set
/*let myArray = [1,2,3];
let mySet = new Set(myArray);
log(mySet);*/

//set is iterable
/*let mySet1 = new Set("Bangladesh");
for(let value of mySet1){
    log(value);
}*/
//log(mySet1);


//convert Sets to Array
//let myArray = [1,2,3];
//let myArray = "Bangladesh";
//let mySet = new Set(myArray);
//log([...mySet]);
//mySet.add(4);
//log(Array.from(mySet));

//~ 16:13 second Completed

//set usage
/*let myArray = [1,2,3];

let mySet = new Set(myArray);
mySet.add({
    a: 5,
    b: 2
});

mySet.add({
    a: 5,
    b: 2
});

let object = {
    a: 9,
    b: 10
}


mySet.add(object);
mySet.add(object); //~Set always allow unique value
mySet.add(object);

log(mySet);*/

//Example-01

//find unique element using by set
let myArray = [1, 2, 3, 4, 5, 5, 5, 6, 5];

/* first of all this array convert to a set element and
remove the duplicate value and
then the set element convert to a array */

log([...new Set(myArray)]);




