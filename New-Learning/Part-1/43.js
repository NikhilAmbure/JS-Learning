// reduce method array
const numbers = [1, 2, 3, 4, 5];



const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

// // passing initial value
// const sum1 = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);
// console.log(sum1);

// accumulator  , currentValue,    return 
// 1                2                3
// 3                3                6
// 6                4                10
// 10               5                15

// accumulator saves the previous return value
console.log(sum);


const userCart = [
    {   procutId:1,
        productName: "mobile",
        price: 12000
    },

    {   procutId:2,
        productName: "laptop",
        price: 12000
    },

    {   procutId:2,
        productName: "tv",
        price: 12000
    }

]

const Total = userCart.reduce((totalprice, currentProduct)=>{
    return totalprice + currentProduct.price;
}, 0);

console.log(Total);