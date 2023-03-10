'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { 
//eslint-disable-line
let sumValue = a + b;
let message = `The sum of ${a} and ${b} is ${sumValue}.`;
return [sumValue, message];
}


//Here is the test for sum(); uncomment it to run it
testSum(4, 7); 

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { 
  //eslint-disable-line
  let mSum = a * b;
  let sumMultiply = `The product of ${a} and ${b} is ${mSum}.`;
  return [mSum, sumMultiply];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { 
  //eslint-disable-line
let sum1 =  sum(a, b);
console.log(sum1[0]);
let answer = sum(sum1[0], c);
console.log (answer[0])

let firstX = multiply(a, b);
console.log(firstX[0])
let answerX = multiply(firstX[0], c);
console.log(answerX[0])

let Thirdele = `${a} and ${b} and ${c} sum to ${answer[0]}.`
let Fourthele = `The product of ${a} and ${b} and ${c} is ${answerX[0]}.`


return[answer[0], answerX[0], Thirdele, Fourthele]

console.log(answer[0], answerX[0], Thirdele, Fourthele);


}




// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
let a = testArray[0];
let b = testArray[1];
let c = testArray[2];

let testSum1 = sum(testArray[0], testArray[1]);
console.log(testSum1[0]);
let Testanswer = sum(testSum1[0], testArray[2]);
console.log(Testanswer[0]);

let AnsThird = `${testArray} was passed in as an array of numbers, and ${Testanswer[0]} is their sum.`

return[Testanswer[0], AnsThird]
console.log(testSum1, Testanswer,AnsThird);

}

// Here is the test for sumArray(); uncomment it to run it

 testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
let MulArray = [2, 3, 4]

function multiplyArray(multArr) { //eslint-disable-line
  let a = MulArray[0]
  let b = MulArray[1]
  let c = MulArray[2]

  let Mulsum = multiply(MulArray[0], MulArray[1]);
  console.log(Mulsum[0]);
  let Mulans = multiply(Mulsum[0], MulArray[2]);
  console.log(Mulans[0]);
  let Multhird = `The numbers ${MulArray} have a product of ${Mulans[0]}.`

  return[Mulans[0], Multhird];



}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  let a = testDynamicArray[0]
  let b = testDynamicArray[1]
  let c = testDynamicArray[2]
  let d = testDynamicArray[3]
  let e = testDynamicArray[4]

  let Dsum = multiply(testDynamicArray[0], testDynamicArray[1]);
  console.log(Dsum[0]);
  let Dansw = multiply(Dsum[0], testDynamicArray[2]);
  console.log(Dansw[0]);
  let Dtansw = multiply(Dansw[0], testDynamicArray[3]);
  console.log(Dtansw[0]);
  let finanswer = multiply(Dtansw[0], testDynamicArray[4]);
  console.log(finanswer[0]);

  let Testelement = `The numbers ${testDynamicArray} have a product of ${finanswer[0]}.`
  return[finanswer[0], Testelement]
}

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
