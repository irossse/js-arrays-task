// BEGIN
const addPrefix = (array, prefix) =>{
    const newArray=[]
    for(let i=0;i<array.length;i+=1){
        newArray[i]=`${prefix} ${array[i]}`
    }
    return newArray
}
export default addPrefix
// END