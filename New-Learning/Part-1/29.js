// function declaration and function expression

// function singHBD(){
//     console.log("HBD");
// }

// Anonymus function()
const singHBD = function() {
    console.log("HBD");
}
singHBD();

// function twoplusfour(a, b){
//     console.log(a + b);
//     return a + b;
// }

const twoplusfour = function(a, b) {
    console.log(a + b);
}
twoplusfour(2, 4);

// function isEven(num1){
//     return num1%2===0;
// }
// console.log(isEven(2));

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("Zbc"));

// function targets(arr, target){
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

const targets = function(arr, target) {
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

// const arr = [1,2,4,4,5,23,2,2,31,32];
// console.log(targets(arr, 31));