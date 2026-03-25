// BEGIN
const getTotalAmount = (array, valuta) =>{
    let sum = 0
    for(let i =0; i<array.length; i+=1){
        if (array[i].slice(0,3) === valuta){
            sum=sum+Number(array[i].slice(4))
        }
    }
    return sum

}

export default getTotalAmount