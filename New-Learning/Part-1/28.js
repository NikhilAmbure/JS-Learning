// Nested Destructuring

const users = [
    {userId: 1, firstName: 'Nikhil', gender: 'Male'},
    {userId: 2, firstName: 'Nitish', gender: 'Male'},
    {userId: 3, firstName: 'Nitin', gender: 'Male'},
]

// const [user1, user2, user3] = users;
const [{firstName:var1, userId:user1}, , {gender:var2}] = users;
console.log(var1, user1);