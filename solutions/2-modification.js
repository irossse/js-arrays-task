// BEGIN
const swap = (array) =>{
    if (array.length<2){
        return array
    }

    const temp = array[array.length-1]
    array[array.length-1]=array[0]
    array[0]=temp
    return array

}

export{swap}
// END