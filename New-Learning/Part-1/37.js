// parameter destructuring

// Used with object
// react

const person = {
    firstname: "Nikhil",
    gender: "Male",
}

// function printdetails(obj) {
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printdetails({firstname, gender}) {
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printdetails(person);