// const for creating array
// Mostly use const to declare the array

// Heap memory ["Apple", "Mango"] 0x11
// fruits contains the address of the array
const fruits = ["Apple", "Mango"]; // fruits = 0x11
// fruits = ["Grapes"] // it shows error but u can use push
fruits.push("Banana");
console.log(fruits);