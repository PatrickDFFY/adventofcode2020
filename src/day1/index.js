const { uniq } = require("shelljs");
const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput()).split('\n').map((i) => parseInt(i));
const SUM_TOTAL = 2020;

const goA = (input) => {
  for(let number of input) {
    let match = input.find((i) => SUM_TOTAL - number === i);
    if(match) {
      return number * match;  
    }
  }
}

const goB = (input) => {
  for(let numberOne of input) {
    for(let numberTwo of input) {
      let match = input.find((i) => SUM_TOTAL - numberOne - numberTwo === i);
      if(match) {
        return numberOne * numberTwo * match;  
      } 
    } 
  }
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
