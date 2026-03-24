// BEGIN
const reverse = (aray) =>{
    for(let i = 0; i<aray.length/2; i+=1){
        
        let temp = aray[i]
        aray[i]=aray[(aray.length-1)-i]
        aray[(aray.length-1)-i]=temp
    }
    return aray

}
export{reverse}
// END