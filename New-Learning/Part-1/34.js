// block scope vs function scope


// let and const are block scope
// var is function scope

// {
//     let fname = "Nikhil";
//     console.log(fname);
//     // Also , same for const
// }
// console.log(fname); // throws error

// {
//     let fname = "Mohit";
//     console.log(fname);
// }

// const fname = "Ggs";
// console.log(fname);



//  for var  == function scope
// {
//     var sname = "Harshit";
// }
// console.log(sname);

// {
//     console.log(sname);
// }

// if (true) {
//     const fname = "Harshit";
//     console.log(fname);
// }
// console.log(fname);


function myapp() {
    if (true){
        const fname = "Harshit";
        // var fname = "Harshit";
        console.log(fname);
    }
    console.log(fname); // throws error when fname is const or let
}
myapp();;