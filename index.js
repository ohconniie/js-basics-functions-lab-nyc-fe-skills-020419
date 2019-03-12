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
  
}