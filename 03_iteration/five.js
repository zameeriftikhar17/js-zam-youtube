//for each loop

const coding = ["js", "cpp", "ruby"]

coding.forEach( function (item) {
   // console.log(item);
} )


/*coding.forEach(item => {
    console.log(item);
    
})*/


coding.forEach((item, index, arr)=> {
    console.log(item,index,arr);
    
})
