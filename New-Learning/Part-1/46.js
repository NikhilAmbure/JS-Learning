// every method 

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.every((number) => number%2===0);
// every method returns true or false (boolean)
// console.log(res);


const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
];

// check every product price < 3000
const ans = products.every((product) => product.price < 13000);
console.log(ans);