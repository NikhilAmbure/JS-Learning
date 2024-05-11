// Objects : Reference type
// Object dont have index

// const person = {name: "Nikhil", age: 20};
const person = {
    name: "Nikhil",
    age: 20,
    hobbies: ["Abc", "Games"]
}
console.log(person);

// Access data from objects
// Key is a string in js i.e name from object
console.log(person["name"]);
// console.log(person.hobbies);

// How to add key value pair to objects
// person.gender = "Male";
person["person"] = "Male";
console.log(person);