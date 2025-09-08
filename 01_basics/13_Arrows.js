const user = {
    username: "Ali",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "Ahmed"
//user.welcomeMessage()

//console.log(this);

//function chai(){
  //  console.log(this);
//}

//chai()

//const chai = () => {
  //  let username= " Zaameer"
    //console.log(this);
//}
//chai()


const addtwo = (num1, num2) => {
    return num1 + num2

}
console.log (addtwo(3,4))