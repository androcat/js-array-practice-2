(function () {
  "use strict";

  // ---------------------
  // Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
  // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
  // ---------------------

  // Put your answer below -------------------------

  function wordArray(str, i) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      arr.push(str);
    }
    return arr;
  }
  console.log(wordArray("sunshine", 3));
  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and reverses all the values in an array
  // The function should not mutate the original array
  // ---------------------

  // Put your answer below -------------------------

  function reverseArr(arr) {
    return [...arr].reverse();
  }
  let arr1 = [1, 2, 3];
  console.log("Should be different:", arr1, reverseArr(arr1));

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and removes all falsy values from the array
  // ---------------------

  // Put your answer below -------------------------
  let arr2 = [1, 0, true, false, "yes", "", "", null, "hi", undefined];
  console.log(arr2);
  // NOTE: there is an error in my logic that causes the last of consecutive falsies to not be removed
  function removeFalsies(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  console.log(removeFalsies(arr2));
  console.log(!null);
  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
  // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
  // returns { name: 'Charlie', color: 'brown', age: 10 };
  // ---------------------

  // Put your answer below -------------------------
  // wat (https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array)
  // Why do I keep getting this error: "1506:9 Uncaught TypeError: Cannot set properties of undefined (setting '0')
  //  at nestedArrToObj (<anonymous>:9:31)
  //  at <anonymous>:14:5n" for line 74
  function nestedArrToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      const currentNestedArrKey = arr[i][0];
      obj[currentNestedArrKey] = arr[i][1];
    }
    return obj;
  }
  console.log(
    nestedArrToObj([
      ["name", "Charlie"],
      ["color", "brown"],
      ["age", 10],
    ])
  );
  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and removes duplicate values
  // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
  // ---------------------

  // Put your answer below -------------------------
  // use reduce ?????
  function removeDups(arr) {
    return [...new Set(arr)];
  }

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
  // [1,2,3,4] and [1,2,3,4] should return true
  // [1,2,3,4,5] and [1,2,3,4] should return false
  // [1,2,3,4] and [1,2,3,4,4] should return false
  // [1,2,3,4] and [1,4,3,2] should return true
  // ---------------------

  // Put your answer below -------------------------

  // -----------------------------------------------

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //            ___  ____  _  ____  ______        //
  //           / _ )/ __ \/ |/ / / / / __/        //
  //          / _  / /_/ /    / /_/ /\ \          //
  //         /____/\____/_/|_/\____/___/          //
  //                                              //
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // ---------------------
  // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
  // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
  // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
  // DO NOT USE Array.prototype.flat()
  // ---------------------

  // Put your answer below -------------------------

  // -----------------------------------------------

  // ---------------------
  // Define a function that takes an array and splits it into parts of size i
  // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
  // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
  // ---------------------

  // Put your answer below -------------------------

  // -----------------------------------------------
})();
