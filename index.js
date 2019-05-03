function produceDrivingRange(blocks){
  return function (startblock, endblock){

    let start = parseInt(startblock);
    let end = parseInt(endblock);
    let distance = Math.abs(end-start);
    let difference = blocks - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

