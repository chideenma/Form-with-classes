console.log('User created');

class Person {
    constructor (firstName,lastName, age, address){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
    }

//     createUser(){
//         const userFirstName = document.getElementById("firstName").value;
//     const userLastName = document.getElementById("lastName").value;
//     const userAge = document.getElementById("age").value;
//     const userAddress = document.getElementById("address").value;
//    const user = new Person(userFirstName,userLastName, userAddress, userAge);
//    console.log(user, userFirstName,userLastName, userAddress, userAge, 'User')
//     }
}

document.addEventListener("submit", function(e){
    e.preventDefault();
    const userFirstName = document.getElementById("firstName").value;
    const userLastName = document.getElementById("lastName").value;
    const userAge = document.getElementById("age").value;
    const userAddress = document.getElementById("address").value;
   const user = new Person(userFirstName,userLastName, userAddress, userAge);
   console.log(user)
});

// if(firstname, lastname, age && address){
    //localStorage.setItem('firstName', 'lastName', 'age', 'address');

//}
// location.reload();

//localStorage.removeItem('');
//console.log('localStorage')