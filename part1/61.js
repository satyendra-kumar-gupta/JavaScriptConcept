// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "satyendra"},
    {userId : 2, userName: "kumar"},
    {userId : 3, userName: "manish"},
    {userId : 4, userName: "anurag"},
    {userId : 5, userName: "asmit"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);