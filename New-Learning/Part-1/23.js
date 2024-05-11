// How to iterate object

const person = {
    name: "Nikhil",
    age: 20,
    "person hobbies": ["Abc", "Games"]
};

// for in loop
// Object.keys

// for (let key in person){
//     // console.log(key);
//     // console.log(`${key}: ${person[key]}`);
//     console.log(key, " : ",  person[key]);
// }

// console.log(Object.keys(person));

for (let key of Object.keys(person)){
    console.log(person[key]);
}