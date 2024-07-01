// some method

// const numbers = [23, 3, 1, 12, 2, 13];

// if any number is even then true
// else false

// const ans = numbers.some((number)=> number%2==0);
// console.log(ans);


const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
];

const res = products.some((product)=> product.price > 3000);
console.log(res);