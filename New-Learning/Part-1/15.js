//  How to clone array
// concatenation

let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1, ["item3", "item4"]);
// Also, 
// let array2 = array1.slice(0).concat(["item3", "item4"]); // added new items also

// new way to clone
// spread operator
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];
console.log(array2);