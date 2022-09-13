//ES6 fat arrow function

//normal function
/*function number(){
    return 10;
}*/

//arrow function
/*let number = () => {
  return 10;
};*/

//simplest form of arrow function (remove return statement)
/*let number = () => 10;*/

//let number = () => console.log(10);

//Step~1
/*function number(n){
    return n;
}*/

//let number = (n) => n;
//let number = n => n;
//let number = (a,b) => a+b;

/*let number = (a,b) => {
  return a+b;
}*/

//console.log(number());
//number();
//console.log(number(10,5));




/**** Simple Example of ES6 fat arrow function ****/

/*var javascript = {
    name: "JavaScript",
    libraries: ["React","Angular","Vue"],
    printLibraries: function (){
        //console.log(this);
        var self = this; // this way is not convenient
        /!* this.libraries.forEach(function (a){
            //console.log(this); //Here forEach change the outer this
            console.log(`${self.name} loves ${a}`);
        });*!/

        //~implement js fat arrow function
        //here "this" value is same outside & inside this function
        //this = {javascript}
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

javascript.printLibraries();*/



/**** Using arrow function in "EventListener" ****/

/*const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks")*/

/*** Normal Function that works perfectly ***/
/*function show() {
    //console.log(this);
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function (){
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 1000);
}*/

//searchInput.addEventListener("keyup",show);

/*** Arow function can't solve this problem ***/
/*
searchInput.addEventListener("keyup",() => {
    display.innerHTML = this.value;
});*/


/** New keyword in fat arrow function ***/
//simple function
/*function Person(name){
    this.name = name;
}

var chandan = new Person('Chandan');
console.log(chandan);*/

//arrow function
var Person = (name) => {
    this.name = name;
}

var chandan = new Person('Chandan');
console.log(chandan);

//summary~ arrow function is an anonymous so this function can not use some "built in" js feature...
