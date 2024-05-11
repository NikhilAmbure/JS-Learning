// Callback functions

function myfunc2(name){
    console.log("Inside f2");
    console.log(`my name is ${name}`);
}

function myfunc(a){
    // console.log(a);
    console.log("F here");
    a("Nikhil");
}

myfunc(myfunc2);