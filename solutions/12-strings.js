
// BEGIN
const makeCensored = (text, array) =>{
    const arrayText = text.split(' ')
    for (let i =0; i<arrayText.length; i+=1){
        if (array.includes(arrayText[i])){
            arrayText[i] = '$#%!'
        }
    }
    const res = arrayText.join(' ')
    return res
}

export default makeCensored
// END