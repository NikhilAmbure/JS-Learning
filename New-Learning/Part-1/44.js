// sort method
// ASCII table


// const numbers = [3, 2, 1, 0, 1200, 400];
// js converts these numbers into a string
// And sorts as strings according to their ascii values
// numbers.sort((a, b) => a-b);
// console.log(numbers);
// for ascending order
// a = 1200, b = 400
// a - b = 800
// a-b ---> positive
// 400, 1200 ---> b, a  like these arranged

// if a-b is negative
// 0, 1200
// a-b = -1200
// a, b => 0, 1200 are arranged

// for descending order
// numbers.sort((a,b) => b-a);



// const usernames = ['john', 'hari', 'arate', 'cs', "ABXYZ"];
// usernames.sort();
// console.log(usernames);


// In flipcart
// price lowTohigh highTolow 
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
];

// lowToHigh
// slice for cloning products
const lowToHigh = products.slice(0).sort((a, b)=>a.price-b.price);
console.log(products);
console.log(lowToHigh);


// HighTolow
const HighTolow = products.slice(0).sort((a, b)=>b.price-a.price);
console.log(HighTolow);
