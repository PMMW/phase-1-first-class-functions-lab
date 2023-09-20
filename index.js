
    // Code your solution in this file!
// drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
// const returnFirstTwoDrivers = function(){return (drivers.slice(0,1))};
// const returnFirstTwoDrivers = function () {
//     return returnFirstTwoDrivers();   
//   };
function returnFirstTwoDrivers (drivers){
    return drivers.slice(0,2);
      
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
    
}

// const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
// // let selectingDrivers;
// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// // const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(num1){
    return function(fare){
      return fare*num1;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(arrayOfDrivers, functions) {
    return functions(arrayOfDrivers);
  };
  