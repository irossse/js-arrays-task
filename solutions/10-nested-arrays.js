// BEGIN
const getSuperSeriesWinner = (array) =>{
    let sumCanada = 0
    let sumUssr = 0
    
    for (let i =0; i<array.length; i+=1){
        if(array[i][0]>array[i][1]){
            sumCanada = sumCanada + 1
        }
        if(array[i][0]<array[i][1]){
            sumUssr = sumUssr + 1
        }
    }

    if (sumCanada > sumUssr) {
        return 'canada'
    }

    if (sumCanada < sumUssr) {
        return 'ussr'
    }

    if (sumCanada === sumUssr) {
        return null
    }
}

export default getSuperSeriesWinner



// END