let selectElementsStartingWithA = (array) => array.filter((fruit) => fruit.startsWith("a"))
// Or array.filter(fruit => fruit[0] === "a")

let selectElementsStartingWithVowel = (array) => array.filter(vowel => /^[aeiou]/i.test(vowel))
// Or array.filter(word => word.charAt(0).match(/[aeiou]+/))

let removeNullElements = (array) => array.filter(element => element !== null)

let removeNullAndFalseElements = (array) => array.filter(element => (element !== null && element !== false))

let reverseWordsInArray = (array) => array.map(word => word.split("").reverse().join(""))
// Or array.map(word => [...word].reverse().join(""))

let everyPossiblePair = (array) => array.sort().map((character, index, sortedArray) => sortedArray.filter(char => char !== character)).reverse()

let allElementsExceptFirstThree = (array) => array.splice(3)
// Or array.filter((item, index) => index > 2)

let addElementToBeginning = (array, element) => (array.unshift(element), array)
// Or [element, ...array]

let sortByLastLetter = (array) => array.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length - 1))
// https://www.codegrepper.com/code-examples/javascript/javascript+sort+array+by+last+letters
/**
 * Or
 * let sortByLastLetter = (array) => {
  for(let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if  (array[i].toString().slice(-1) > array[j].toString().slice(-1)) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
 }
 */

let getFirstHalf = (string) => string.substring(0, Math.round(string.length / 2))
// Or string.length % 2 === 0 ? string.slice(0, string.length / 2) : string.slice(0, ~~(string.length / 2) + 1) or Match.ceil(string.length / 2) for the latter

let makeNegative = (number) => -Math.abs(number)

let numberOfPalindromes = (array) => array.filter(word => word === word.split("").reverse().join("")).length
// Or array.filter(word => word === [...word].reverse().join("")).length

let shortestWord = (array) => [...array.sort((a, b) => a.length - b.length)][0]
// Or array.reduce((a, b) => a.length < b.length ? a : b)

let longestWord = (array) => [...array.sort((a, b) => b.length - a.length)][0]
// Or array.reduce((a, b) => a.length > b.length ? a : b)

let sumNumbers = (array) => array.reduce((a, b) => a + b, 0)
/* Or let sumNumbers = (array) => {
        let secondBatch = 0
        array.map(elem => secondBatch += elem)
        return secondBatch
      } 
Or same with .forEach instead of .map */

let repeatElements = (array) => [...array, ...array]
// Or Array.from({length: 2}, () => array).flat() or [...array.join("").repeat(2).split("")]
// Or Array(array.length * 2).fill().map((a, i) => array[i % array.length])
// Or array.concat(array) or [...array].concat(array) or array.concat([...array])

let stringToNumber = (string) => Number(string)
// Or +string

let calculateAverage = (array) => array.reduce((a, b) => a + b, 0) / array.length
/* Or let calculateAverage = (array) => {
        let secondBatch = 0
        array.forEach(elem => secondBatch += elem)
        return secondBatch / array.length
      } 
Or same with .map instead of forEach */

let getElementsUntilGreaterThanFive = (array) => array.slice(0, array.find((element) => element > 5))
// Or array.slice(0, array.indexOf(6)) but that's too cheap imo

let convertArrayToObject = (array) => Object.fromEntries(array.map((element, index, arr) => (index % 2 === 1) ? [arr[index - 1], arr[index]] : null).filter(element => element !== null))
// Or let convertArrayToObject = (array) => array.reduce((acc, current, index, arr) => (index % 2 ? acc[arr[index - 1]] = current : acc[current], acc), {})
// index % 2 is the same as index % 2 === 1

let getAllLetters = (array) => [...new Set(array)].join("").split("").sort()

let swapKeysAndValues = (object) => {
    let newObject = {}
    for (let key in object) newObject[object[key]] = key
    return newObject
    // https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
    // Cleaner: Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))
}

let sumKeysAndValues = (object) => Object.entries(object).join(",").split(",").reduce(((a, b) => Number(a) + Number(b)))

let removeCapitals = (string) => string.replace(/[A-Z]/g, "")
// Or string.split(/[A-Z]/g).join("")

let roundUp = (number) => Math.ceil(number)
// Or ~~number + 1

let formatDateNicely = (date) => date.toLocaleDateString("du-Be")
// Or ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()

let getDomainName = (string) => string.split("@").pop().split(".com").shift()
// Or string.slice(string.indexOf("@") + 1, string.lastIndexOf("."))

let titleize = (string) => string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (element) => element.toUpperCase())

let checkForSpecialCharacters = (string) => /\W/g.test(string)
// Or /\!/g.test(string)

let squareRoot = (number) => Math.sqrt(number)

let factorial = (number) => number <= 1 ? 1 : (number * factorial (number - 1))

let findAnagrams = (string) => {
    let results = []
    if (string.length === 1) {
        results.push(string)
        return results
    }

    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i]
        let otherChar = string.substring(0, i) + string.substring(i + 1)
        let otherAnagrams = findAnagrams(otherChar)

        for (let j = 0; j < otherAnagrams.length; j++) {
            results.push(firstChar + otherAnagrams[j])
        }
    }
    return results
} // Thanks to https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript

let convertToCelsius = (number) => Math.round((number - 32) / 1.8)
// Or ~~((number - 31) / 1.8) cause ~~ - meaning NOT NOT - acts as Math.floor(), not Math.round(). Hence number + 1 - 32, hence number - 31.

let letterPosition = (array) => array.map(element => element.toLowerCase().charCodeAt(0) - 96)
// Or using .map() method after specifying the whole alphabet through a dedicated variable...
// Or maybe through yet another RegEx? Too exhausted to look it up
