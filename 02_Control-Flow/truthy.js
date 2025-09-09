const userEmail = []

if(userEmail)
{
    console.log("Got user Email");
}
else 
{
    console.log("Dont have user Email");
}

//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy value

// "0", 'false', "  ", [], {}, function(){}

/*if (userEmail.length === 0)
{
    console.log("Array is Empty");
}*/

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
// val1 =null ?? 10 ?? 20

console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 100") : console.log("more than 100") 