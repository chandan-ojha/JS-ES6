//for loop, for in, for of

//step~1 [for loop]
/*let i = 1;
for (; i <= 5; i++){
    console.log(i);
}*/

//step~2 [for loop]
/*let i = 1;
for (;  ; i++){
    if(i <= 5){
        console.log(i);
    } else {
        break;
    }
}*/

//for in loop [Use into Object]
/*const myobj = {
    name: 'Javascript',
    estd: '1995',
    founder: 'Brendan Eich'
};

for(property in myobj){
    console.log(myobj[property]);
}*/

//for of loop [Use into Array]
/*const myArray = [1,2,3,4,5,6,7,8,9,10];

for(element of myArray){
    console.log(element);
}*/

//for of loop [Use into Array]
const myString = "I love Javascript";

for(element of myString){
    console.log(element);
}