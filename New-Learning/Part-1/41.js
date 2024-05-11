// important array method

// map
// map creates a new array
// you must return when u use map 

// useful in react

const numbers = [1,2,3,4,5];

// const square = function(number){
//     // console.log(number*number); // undefined in new array
//     return number*number;
// }

// const squarearray = numbers.map(number=>{
//     return number*number;
// });

// console.log(squarearray);

const users = [
    {firstname: "Mohit", age:33},
    {firstname: "lohit", age:20},
    {firstname: "cohit", age:21},
    {firstname: "rohit", age:12},
]

const usernames = users.map((user)=>{
    return user.firstname;
});
console.log(usernames);