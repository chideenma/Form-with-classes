console.log('User created');

class Person {
    constructor (firstName,lastName, age, address){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
    }

    createUser() {

        const currentUsersJOSN = localStorage.getItem("person");
        let currentUser = JSON.parse(currentUsersJOSN) || [];
    
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          address: this.address
        };
        const newUserArray = [...currentUser, user];

        localStorage.setItem("person", JSON.stringify(newUserArray));
      }

    displayUser() {

        let users = JSON.parse(localStorage.getItem("person"));

        const list = document.getElementById("list-item");
        const row = document.createElement("tr");

        row.innerHTML = 
        `<td>${users.firstName}</td>
        <td>${users.lastName}</td>
        <td>${users.age}</td>
        <td>${users.address}</td>
        <td onclick="deleteUser()"><a href="#" id="delete">X</a></td>`

        list.appendChild(row)

    }

deleteUser() {
    let users = localStorage.getItem("person");
    localStorage.removeItem("person", users);
}
}

document.addEventListener("submit", function(e){
    e.preventDefault();
    const userFirstName = document.getElementById("firstName").value;
    const userLastName = document.getElementById("lastName").value;
    const userAge = document.getElementById("age").value;
    const userAddress = document.getElementById("address").value;
   const user = new Person(userFirstName,userLastName, userAddress, userAge);
//    user.createUser();
   user.displayUser();
   console.log(user);
   localStorage.setItem('person', JSON.stringify(user));

});

// if(firstname, lastname, age && address){
    //localStorage.setItem('firstName', 'lastName', 'age', 'address');
// const user = {firstName:this.firstName, lastName:this.lastName, address:this.address, age:this.age};
// localStorage.setItem('person', JSON.stringify(user));
//}
// location.reload();

//localStorage.removeItem('');
//console.log('localStorage')


        // let currentUser = [];

        // let currentUsersJOSN = JSON.parse(localStorage.getItem("person"));

        // currentUser.push(currentUsersJOSN);