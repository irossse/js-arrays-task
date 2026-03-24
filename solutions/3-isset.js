// BEGIN
const get = (array, index, value=null) =>{
    if (index>=array.length || index<0){
        return value
    }
    else{
        return array[index]
    }
}
export{get}
// END