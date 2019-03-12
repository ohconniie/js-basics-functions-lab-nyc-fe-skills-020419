// Code your solution in this file!
const headquartersBlock = 42
const feetPerBlock = 264

function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquartersBlock)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * feetPerBlock
}

function distanceTravelledInFeet(start, destination) {
 return Math.abs((start - destination) * feetPerBlock)
}

function calculatesFarePrice(start, destination) {
  let feetTraveled = distanceTravelledInFeet(start, destination)
  if (feetTraveled < 400) {
    return 0
  } else if  (feetTraveled >= 400 && feetTraveled <= 2000) {
  return (feetTraveled - 400) * 0.02
   } else if (feetTraveled > 2000 && feetTraveled <=2500) {
     return 25
   } else {
     return 'cannot travel that far'
   }
}