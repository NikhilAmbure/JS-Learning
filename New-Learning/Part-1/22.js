// Difference betwn Dot and Bracket notations
const key = "email";
const person = {
    name: "Nikhil",
    age: 20,
    "person hobbies": ["Abc", "Games"],

};

console.log(person["person hobbies"]);

// person.key = "ajbsufbsi@gmail.com";
// console.log(person);
// Not like above

person[key] = "ajbsufbsi@gmail.com";
console.log(person);