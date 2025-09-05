//arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["Ali","Ahmed"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0]);
//console.log(myHeros[0]);
//console.log(myArr2[3]);

//Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.shift()
//myArr.unshift(9)

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));


//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);

  //slice, splice

  //console.log("A", myArr);

  const myn1 = myArr.slice(1,3)

  //console.log(myn1);
  //console.log("B", myArr);

  const myn2 = myArr.splice(1,3)
//console.log("C", myArr);
  //console.log(myn2);


  const marvel_heros = ["Ali,Umir","Zameer"]
  const dc_heros = ["superman", "flash","batman"]

  marvel_heros.push(dc_heros)

  //console.log(marvel_heros);
  //console.log(marvel_heros);

  const allHeros = marvel_heros.concat(dc_heros)
  //console.log(allHeros);

  const all_new_heros = [...marvel_heros, ...allHeros]

  //console.log(all_new_heros);


  const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

  const real_another_array = another_array.flat(Infinity)
  //console.log(real_another_array);


  