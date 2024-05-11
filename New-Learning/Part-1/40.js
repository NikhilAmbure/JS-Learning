// important array methods

// forEach
// map
// filter
// reduce


const numbers = [3, 2, 4, 5];

function mulby2(number, index){
    console.log("index:", index);
    console.log("number:", number*2);
}

// for (let i=0; i<numbers.length; i++){
//     mulby2(numbers[i], i);
// }

// numbers.forEach(mulby2);
// OR

// numbers.forEach(function(number, index){
//     console.log("index:", index);
//     console.log("number:", number*2);
// });

// numbers.forEach(function(number){
//     console.log(number*2);
// });

const users = [
    {firstname: "Mohit", age:33},
    {firstname: "lohit", age:20},
    {firstname: "cohit", age:21},
    {firstname: "rohit", age:12},
]

// users.forEach(function(user){
//     console.log(user.firstname);
// });

// using arrow function
users.forEach((user, index)=>{
    console.log(user.firstname);
});

// for (let user of users) {
//     console.log(user.firstname);
// }