// spread operator 

// const newArray = [..."123456789"];
// console.log(newArray);


// Spread operator in objects
const obj1 = {
    key1 : "Val1",
    key2 : "val2",
};

const obj2 = {
    key1 : "ValChange",
    key3 : "Val3",
    key4 : "val4",
};

// const newObj = {...obj1, ...obj2, key69: "value69"};
const newObj = {..."abc"};
console.log(newObj);