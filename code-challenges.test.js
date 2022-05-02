// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Run the file with the following command: $ yarn jest
// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleColors", () => {
  it("takes in an array of colors, removes first item from array and shuffles the array of colors", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(shuffleColors(colors1)).toEqual(expect.arrayHolding(["yellow", "blue", "pink", "green"]))
    expect(shuffleColors(colors2)).toEqual(expect.arrayHolding(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
     })
})

// // FAIL  ./code-challenges.test.js
// // shuffleColors
// //   ✕ takes in an array of colors, removes first item from array and shuffles the array of colors
// // ● shuffleColors › takes in an array of colors, removes first item from array and shuffles the array of colors
// //   ReferenceError: shuffleColors is not defined

// // b) Create the function that makes the test pass.

// //Pseudo Code: 
// // Create a function that takes in an array. 
// // The function is called "shuffleColors"
// // To iterate the array use a loop, for all the values aka colors in the array 
// // Then to remove the first item in the array with the shift method 
// // The .shift method: Removes the first element from an array and returns it. 
// // If the array is empty, undefined is returned and the array is not modified.
// // Will need to use Math.floor and math random to shuffle the colors in the array 
// // Output : ["yellow", "blue", "pink", "green"] 
// ///Output : ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

 const shuffleColors = (array) => {
   array.shift () 
   for (let i = 0; i < array.length; i++) {
    let shuffled = Math.floor(Math.random() * array.length)
    let newArray = array[i] 
    array[i]= array[shuffled]
    array[shuffled] =newArray
 }
    return array 
 }

// PASS  ./code-challenges.test.js
// shuffleColors
//   ✓ takes in an array of colors, removes first item from array and shuffles the array of colors

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.169 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minmumMaxium", () => {
  it ("takes in an array of numbers and returns an array of the minimum and maxium numbers in that order", () => {
       const nums1 = [3, 56, 90, -8, 0, 23, 6]
       const nums2 = [109, 5, 9, 67, 8, 24]  
       expect(minmunMaxium(nums1)).toEqual(expect.arrayMinmax([-8, 90]))
       expect(minmunMaxium(nums2)).toEqual(expect.arrayMinmax([5, 109]))
  })  
 })
//  FAIL  ./code-challenges.test.js
//   minmumMaxium
//     ✕ takes in an array of numbers and returns an array of the minimum and maxium numbers in that order

//   ● minmumMaxium › takes in an array of numbers and returns an array of the minimum and maxium numbers in that order

//     ReferenceError: minmunMaxium is not defined

// b) Create the function that makes the test pass.
//Pseudo Code
//Create a function 
//The function will be called "minimumMaxium"
//the Array will returned the smallest & biggest number order.  
//Iterate the values in the array 
//use the spread operator 
//create variables for Math.min and Math.max
//output: [-8,90]
//output: [5, 109]
// minimumMaximum= (array) 
// var new_array = []
// for (var i = 0; i < array.length; i++){
// if (array[i] === Math.max.apply(Math, array)){
//  new_array.unshift(array[i])
//  else if (array[i] === Math.min.apply(Math, array)) 

  const minimumMaximum =(arrary) => {
    let minimum = Math.min(...arraryarray) 
    let maximum = Math.max(...array)
    let result = ([minimum, maximum])
    return result
  }
//   PASS  ./code-challenges.test.js
//   minmumMaxium
//     ✓ takes in an array of numbers and returns an array of the minimum and maxium numbers in that order (1 ms)
// Test Suites: 1 passed, 1 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// //Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("twoarrays", () => {
    it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//      expect(twoarrays(testArrary1,testArray2).toEqual(expect.arrayoutput([3, 7, 10, 5, 4, 3, 3])[7, 8, 2, 3, 1, 5, 4]))
 })
 }) 
// FAIL  ./code-challenges.test.js
// twoarrays
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)
// ● twoarrays › takes in two arrays as arguments and returns one array with no duplicate values
//   ReferenceError: twoarrays is not defined
// b) Create the function that makes the test pass.
// Pseudo Code: 
// Create a function that takes in 2 arrays 
// The function will be called "twoarrays"
// It returns no duplicate values, so no same numbers 
// This means it will have to do a matching process
// Can uuse For Loop. 
// Other option use concat & filter 
// or can try the spread operator to iterate over numbers in the array
// let testarray1 = [3, 7, 10, 5, 4, 3, 3]
// let testarray2 = [7, 8, 2, 3, 1, 5, 4];
// let testarray3 = [];
// for(let i=0;i<array1.length;i++){
//   if(array3.indexOf(array1[i]) == -1)
//      array3.push(array1[i])
// }
// for(let i=0;i<array2.length;i++){
//   if(array3.indexOf(array2[i]) == -1)
//      array3.push(array2[i])
// }

// Other Option 
// let array3 = array1.concat(array2);
// array3 = array3.filter((item,index)=>{
//    return (array3.indexOf(item) == index)

//Spread Operator 

const twoArrays = (array1, array2) => {
  return [...new Set([...array1,...array2])] 
} 
// PASS  ./code-challenges.test.js
// minmumMaxium
//   ✓ takes in an array of numbers and returns an array of the minimum and maxium numbers in that order
// twoarrays
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values
// Test Suites: 1 passed, 1 total