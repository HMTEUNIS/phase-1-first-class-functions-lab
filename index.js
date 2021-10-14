const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2)

}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
    
    }


const  selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier (multiplier) {
    return function(x) {
        return x * multiplier
    }
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, callback) {
  if  (callback === returnFirstTwoDrivers){
      return drivers.slice(0,2)
  } else if (callback === returnLastTwoDrivers){
      return drivers.slice(-2)
  }
}

