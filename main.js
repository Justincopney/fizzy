/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// make a function that takes in a num

function fizzy(num){

//  check num is evenly divisible by 3 and not not divisible by 5
// if so, return fizz
if (num % 3 === 0  && num % 5 !== 0){
  return 'Fizz'
}
//  check num is evenly divisible by 5 and not not divisible by 3
// if so, return buzz
if (num % 5 === 0  && num % 3 !== 0) {
  return 'Buzz'
}
// check if num is divisible by both
// return fizzbuz
if (num % 3 === 0  && num % 5 === 0) {
  return 'FizzBuzz'
}
else {
  return num
}
// if none are true, return num

}
/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
