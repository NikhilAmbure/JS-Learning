// splice method
// start , delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete
// Also returns the deleted item
// staring from first index and delete 1 item
// const deletedItem = myArray.splice(1, 1);
// console.log(deleteItem);

// insert 
// myArray.splice(1, 0, 'inserted item4');
// console.log(myArray);


// insert and delete together
myArray.splice(1, 2, 'inserted newItem', 'inserted item9');
console.log(myArray);