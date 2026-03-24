// BEGIN
const getSameParity = (array) =>{
    const newArray = []
    if (array.length===0){
        return []
    }
    if (array[0]%2===0){
        for(let i = 0; i<array.length; i+=1){
            if ((Math.abs(array[i]))%2===0){
                newArray.push(array[i])
            }
        }
    }
    if (array[0]%2!==0){
        for(let i = 0; i<array.length; i+=1){
            if ((Math.abs(array[i]))%2!==0){
                newArray.push(array[i])
            }
        }
    }
    return newArray

}

export default getSameParity
// END