function distanceFromHqInBlocks(x) {
  if (x >= 42) {
    return x - 42;
  } else {
    return 42 - x;
  }
}

function distanceFromHqInFeet(x){
    if (x >= 42) {
    return (x - 42)*264;
  } else {
    return (42 - x)*264;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  } else {
    return 0;
  }
}