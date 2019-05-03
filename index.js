function produceDrivingRange(blocks){
  return function (start, end){

    let start = parseInt(start);
    let end = parseInt(end);
    let distance = Math.abs(end-start);
    let difference = blocks - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}