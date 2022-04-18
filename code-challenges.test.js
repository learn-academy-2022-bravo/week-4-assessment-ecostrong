// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("arraycolors", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it ('takes in an array of colors and removes first item from array and shuffles the array')
    expect(arraycolors(["purple", "blue", "green", "yellow", "pink"])).toEqual();
}
)

//Jest testing is not working, it is failing due to syntax, I think I am missing something in the testing argument.

// b) Create the function that makes the test pass.

//First step is to remove the first item in the array

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const firstElement = colors1.sort()
console.log(firstElement)

// // Output:
// // (['blue', 'green', 'yellow', 'pink']

// //Second step is to shuffle the array.
// //Combine with first step for removing first element, and then shuffle.
// //Used the .sort, and math.floor/mathrandom method.

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const sortArray = colors1.sort((a, b) => 0.5 - Math.random());
const firstElement = colors1.sort()
const shuffleArray = colors1 => {
    for (let i = colors1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = colors1[i];
      colors1[i] = colors1[j];
      colors1[j] = temp;
    }
}
    console.log(sortArray)
    console.log(shuffleArray)
    console.log(colors1)
    console.log(firstElement)

//     //Output:

//     (5) ['blue', 'green', 'pink', 'purple', 'yellow']

    ///I am able to shuffle array, but the first element is not being removed when combinded.


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
Expected output: [5, 109]

describe("arraynumber", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
    it ("takes in an array of numbers and returns an array of the minimum and maxium numbers in that order", () => {
    expect(arraynumber().toEqual[-8, 90])
    expect(arraynumber().toEqual[5, 109])
})  

})

// FAIL  ./code-challenges.test.js
// arraynumber
//   ✕ takes in an array of numbers and returns an array of the minimum and maxium numbers in that order (1 ms)

// ● arraynumber › takes in an array of numbers and returns an array of the minimum and maxium numbers in that order

//   ReferenceError: arraynumber is not defined

// b) Create the function that makes the test pass.

//Array will be returned the smallest & biggest number order.  

const nums1 = [3, 56, 90, -8, 0, 23, 6] 
const nums2 = [109, 5, 9, 67, 8, 24]
smallest_biggest = (array) 
  var new_array = []
  for (var i = 0; i < array.length; i++){
    if (array[i] === Math.max.apply(Math, array)){
      new_array.unshift(array[i])
    } else if (array[i] === Math.min.apply(Math, array)) 


 console.log(nums1)
 console.log(nums2)
 console.log(new_array)
 console.log(smallest_biggest)

  }

  //Not running


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("twoarrays", () => {
     const testArray1 = [3, 7, 10, 5, 4, 3, 3]
     const testArray2 = [7, 8, 2, 3, 1, 5, 4]
     it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
     expect(twoarrays().toEqual[3, 7, 10, 5, 4, 3, 3])
     expect(twoarrays().toEqual[7, 8, 2, 3, 1, 5, 4])
})
}) 

// FAIL  ./code-challenges.test.js
// twoarrays
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● twoarrays › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: twoarrays is not defined


// b) Create the function that makes the test pass.

//Create a function that takes in 2 arrays 
//Returns no duplicate values, so no same numbers 
//This means it will have to do a matching process
//Use a For Loop 
//Other option use concat & filter 
//Need to Test 

let testarray1 = [3, 7, 10, 5, 4, 3, 3]
let testarray2 = [7, 8, 2, 3, 1, 5, 4];
let testarray3 = [];
for(let i=0;i<array1.length;i++){
  if(array3.indexOf(array1[i]) == -1)
     array3.push(array1[i])
}
for(let i=0;i<array2.length;i++){
  if(array3.indexOf(array2[i]) == -1)
     array3.push(array2[i])
}

Other Option 
let array3 = array1.concat(array2);
array3 = array3.filter((item,index)=>{
   return (array3.indexOf(item) == index)
})

//Was unable to complete/test 