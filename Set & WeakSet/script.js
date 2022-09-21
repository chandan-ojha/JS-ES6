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
let myArray = "Bangladesh";
let mySet = new Set(myArray);
//log([...mySet]);
mySet.add(4);
log(Array.from(mySet));

//~ 16:13 second Completed

//set usage




