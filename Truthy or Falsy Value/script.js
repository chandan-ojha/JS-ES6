//truthy falsy
var myVar = [5,6,7];

//False~ 0,"",Null,Undefined,Nan

if(myVar){
    console.log("I am truthy");
} else {
    console.log("I am falsy");
}

//revise
if(!myVar){
    console.log("I am truthy");
} else {
    console.log("I am falsy");
}