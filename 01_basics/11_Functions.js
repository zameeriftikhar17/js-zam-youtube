

function sayMyName()
{

console.log("H");
console.log("I");
console.log("J");
console.log("K");

}
//sayMyName()

function addTwoNumbers(number1, number2)
{
   //let result =number1+number2;
   //return result

   return number1 + number2

}
const result = addTwoNumbers(3,4)
//console.log("Result:", result);

function loginUserMessage(username){
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Zameer"));

console.log(loginUserMessage("Zameer"))

