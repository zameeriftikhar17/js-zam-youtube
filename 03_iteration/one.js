// for

for (let i = 0; i < 10; i++) {
    const element = i;
if( element == 5 )
{
    //console.log("5 is best number");
}

    //console.log(element);
}

for (let i = 0; i <= 10; i++) 
    {
    for (let j = 0; j <=10; j++) 
    {
       //console.log(`Inner loop value ${j} and Inner loop ${i}`); 
       //console.log(i + '*' + j + ' = ' + i*j);
    }
    
    }

/*
  let myArray = ["Ali", "Umir", "Ahmed"]
  console.log(myArray.length);
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
  } */ 


 // break and Continue
 
 for (let index = 0; index <= 20; index++) {
    if(index == 5)
    {
        console.log(`Detected 5`);
        //break
        //continue

    }
    console.log(`value of i is ${index}`);
    
 }