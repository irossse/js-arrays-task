// BEGIN
const buildDefinitionList = (array) =>{
    if (array.length === 0){
        return ''
    }

    let str = ''
    for(let i = 0; i<array.length; i+=1){
        let dt = `<dt>${array[i][0]}</dt>`
        let dd = `<dd>${array[i][1]}</dd>`
        str = str + dt + dd
    }

    
    const res = `<dl>${str}</dl>`
    return res
}

export default buildDefinitionList
// END