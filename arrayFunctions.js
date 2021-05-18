/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
 var x= [2,7,6,5,4]
function isArrayLengthOdd (x) {
    
  if (x.length%2 !== 0) 
          {return true}
      else {return false }
    }

  console.log (`your value is ${isArrayLengthOdd (x)}` )

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
var y=[1,2,3,4]
function isArrayLengthEven(y) {
  if (y.length%2 === 0) 
          {return true}
      else {return false }
    }

    console.log(`the value ${isArrayLengthEven(y)}`)
    console.log(`the value ${isArrayLengthEven([4,3,2])}`)

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

  let instructors = ["Mshary", "Hasan"]
  function addLailaToArray(instructors) {
  instructors.push("Laila")
  return  instructors
 } 
console.log (addLailaToArray(instructors) )
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
var Teams =["Brazil", "Germany", "Italy"]
function eliminateTeam(Teams) {
  Teams.shift()
  const lastElement = Teams.pop()
 return lastElement
}
console.log( eliminateTeam(Teams))
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

      

let fruits= []

function secondHalfOfArrayIfItIsEven(fruits) {

  if(fruits.length%2 > 0 ){
fruits= []
    return fruits

  }
  else{
   fruits = fruits.splice( fruits.length/2,(fruits.length + 1))

return fruits 

  } 



}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]))
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]))
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
 
function youGottaCalmDown(shout) {
  
  


  while (shout[shout.length - 2] === "!") {
   
    shout = shout.slice(0,-1);
  }

  return shout;
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"))
module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
