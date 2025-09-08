//Singleton

// objects literals

const mySyml = Symbol("key1")

const jsUser = {
    name: "Zameer",
    [mySyml]: "myKey1",
    age: 21,
    location: "sialkot",
    email: "abc@gmail.com",
    isLoggedIn: false,
}

//console.log(jsUser.age);
//console.log(jsUser["name"]);
//console.log(jsUser[mySyml]);

jsUser.email = "xyz@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "nmo@gmail.com"
//console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello Zameer");
}

jsUser.greeting2 = function() {
    console.log("Hello Zameer, ${this.name}");
}

//console.log(jsUser.greeting());
//console.log(jsUser.greeting2());


//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name= "Ali"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "zzzzz@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ahmed",
            lastname: "faraz"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);


//value from database

const users = [
    {
        id: 1,
        name: "hmmm"
    },

    {
        id: 1,
        name: "hmmm"
    },

     {
        id: 1,
        name: "hmmm"
    }

]

users[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));