const name = "ali"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`hi my name is zameer ${name} and my repoCount is 50 ${repoCount}`)

const gameName = new String('Zameer')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  zameer  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ryvu.com/%10zam"
console.log(url.replace('%10', '-'))
console.log(url.includes('Ifii'))
console.log(gameName.split('-'));