const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0,2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]);

const createFareMultiplier = function(multiplier) {
  return function(fare){
    return fare * multiplier;
  }
}
console.log(createFareMultiplier());

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(20));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(20));

const selectDifferentDrivers = function(drivers, selectFunction) {
  return selectFunction(drivers);
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));
