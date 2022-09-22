//copyWithin() method...
function log(anything){
    return console.log(anything);
}

let a = ['JavaScript','PHP','Python','Ruby','C++','RUST'];
a.copyWithin(-3,-2,-1);
log(a);