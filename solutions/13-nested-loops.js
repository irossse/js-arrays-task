import _ from 'lodash';

// BEGIN
const getSameCount = (array11, array22) =>{
    const array1 = _.uniq(array11)
    const array2 = _.uniq(array22)
    let count =0 

    for (let i =0; i<array1.length; i+=1){
        for (let j=0; j<array2.length; j+=1){
            if (array1[i]===array2[j]){
                count +=1
            }
        }
    }
    return count

}

export default getSameCount

// END