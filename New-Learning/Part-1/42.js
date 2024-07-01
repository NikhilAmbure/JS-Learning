// important array methods
// creates a new array
// filter method
// returns true or false

const numbers = [1, 3, 4, 5, 6, 7, 8, 9]

// const isEven = function(number){
    // return number%2===0;
// }

// const everNumbers = numbers.filter(isEven);
const everNumbers = numbers.filter((number)=>{
    return number%2===0;
});
console.log(everNumbers);