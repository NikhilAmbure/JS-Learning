// find method

// const myArray = ["hello", "world", "worldwide"];

// returns only first occurrence
// ans = myArray.find((string) => string.length === 5);
// console.log(ans);

const users = [
    {userId: 1, userName: "John"},
    {userId: 2, userName: "patrick"},
    {userId: 3, userName: "joa"},
    {userId: 4, userName: "apple"},
    {userId: 5, userName: "administrator"},
];

const res = users.find((user) => user.userId === 3);
console.log(res);