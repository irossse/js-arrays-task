// BEGIN
import _ from 'lodash';
const countUniqChars = (str) =>{
    const array = str.split('')
    const uniq = _.uniq(array)
    const res = uniq.length
    return res
}

export default countUniqChars

// END