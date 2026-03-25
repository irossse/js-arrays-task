

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, point) =>{
  if (locations.length === 0){
    return null
  }
  const [x1,y1] = point
  let elementMin = getDistance(locations[0][1],[x1,y1])
  let element = locations[0]

  for (const [name, [x,y]] of locations){

    if (getDistance([x,y], [x1,y1])<elementMin){
      elementMin = getDistance([x,y], [x1,y1])
      element = [name, [x,y]]
    }
  }

  return element
}

export {getTheNearestLocation}
// END
