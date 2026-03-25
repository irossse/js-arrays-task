// BEGIN
const getMax = (array) =>{
    if(array.length === 0){
        return null
    }
    const [element1, ...rest] = array
    let max = element1
    for(const element of rest){
        if (element>max){
            max = element
        }
    }
    return max

}

export {getMax}
// END