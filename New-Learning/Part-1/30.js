// Arrow function


const singHBD = ()=> {
    console.log("HBD");
}
singHBD();

const twoplusfour = (a, b)=> {
    // console.log(a + b);
    return a + b;
}
// twoplusfour(2, 4);
const ans = twoplusfour(2, 4);
console.log(ans);

const targets = (arr, target)=> {
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}
const res = targets([1,2], 3);
console.log(res);

// for 1 parameter
const even = number=> number%2==0;
console.log(even(2));

const firstChar = anystring=> anystring[0];
console.log(firstChar("ABC"));