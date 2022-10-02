//Array.prototype.find()
/*var numbers = [1,2,3,4,5,6,7,8,9,10];

var result = numbers.find(function (currentValue,currentIndex,arr) {
    return currentValue > 4;
},this);
console.log(result)*/

/** Example-01 solve by this keyword **/
/*class Student {
    constructor(name,age){
        this.name = name;
        this.age= age;
    }
    test(){
        console.log("hello");
    }
    examplefunction(){
        let array = [1,2,3];
        array.find(function (){
            this.test();
        },this);
    }
}
let student = new Student("Chanda",25)
student.examplefunction();*/

/** Example-01 solve by arrow function **/
class Student {
    constructor(name,age){
        this.name = name;
        this.age= age;
    }
    test(){
        console.log("hello");
    }
    examplefunction(){
        let array = [1,2,3];
        array.find(() => {
            this.test();
        });
    }
}
let student = new Student("Chandan",25)
student.examplefunction();