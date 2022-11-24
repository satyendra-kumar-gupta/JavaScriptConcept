// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = createUser('satyendra', 'kumar', 'satyendra@gmail.com', 9, "my address");
const user2 = createUser('anurag', 'kumar', 'anurag@gmail.com', 9, "my address");
const user3 = createUser('asmit', 'kumar', 'asmit@gmail.com', 9, "my address");
console.log(user1.about());
console.log(user1);
console.log(user1.is18());