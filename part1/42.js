// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'Satyendra', gender: 'male'},
    {userId: 2,firstName: 'Anurag', gender: 'male'},
    {userId: 3,firstName: 'Asmit', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}
