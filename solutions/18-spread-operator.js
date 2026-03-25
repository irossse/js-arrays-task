

// BEGIN
const flatten = (array) =>{
    let res = []
    for (const element of array){
        if (Array.isArray(element)){
            res.push(...element)
        }
        else{
            res.push(element)
        }
    }
    return res
        
}

export {flatten}
// END