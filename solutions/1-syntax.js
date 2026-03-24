
// BEGIN (write your solution here)
const getWeekends = (format = ('long')) =>{

    if (format === 'long'){
        return ['saturday', 'sunday']
    }
    if(format==='short'){
        return ['sat', 'sun']
    }
}


export{getWeekends}
// END
