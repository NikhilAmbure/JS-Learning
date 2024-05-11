// array destructuring

const myArr = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArr[0];
// let myvar2 = myArr[1];
// console.log("myvar1 : ", myvar1);
// console.log("myvar2 : ", myvar2);
// let [myvar1, myvar2, myvar3] = myArr;
let [myvar1, ,myvar2, ...mynewarry] = myArr;  // , ,skips one index
// let mynewarry = myArr.slice(2);
console.log(mynewarry);
console.log("myvar1 : ", myvar1);
console.log("myvar2 : ", myvar2);
// console.log("myvar3 : ", myvar3);