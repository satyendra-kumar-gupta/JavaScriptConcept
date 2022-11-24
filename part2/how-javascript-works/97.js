// lexical environment, scope chain

const lastName = "kumar";

const printName = function(){
    const firstName = "satyendra";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();