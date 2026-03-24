// BEGIN
const calculateAverage= (array) =>{
    if(array.length === 0){
        return null
    }

    let sum = 0

    for(const i of array){
        sum = sum+i
    }
    const result = sum/(array.length)
    return result

}

export default calculateAverage
// END