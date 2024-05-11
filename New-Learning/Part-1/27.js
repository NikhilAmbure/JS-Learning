// Object inside array
// Useful in real world projects

const users = [
    {userId: 1, firstName: 'Nikhil', gender: 'Male'},
    {userId: 2, firstName: 'Nitish', gender: 'Male'},
    {userId: 3, firstName: 'Nitin', gender: 'Male'},
]
// console.log(users);

for (let user of users) {
    // console.log(user);
    // console.log(user.userId);
    console.log(user.firstName);
}