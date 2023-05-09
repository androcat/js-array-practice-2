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

    // OR
    // use Array.prototype.fill(value you want to fill, start, end - up to but not including it)
    // return Array(i).fill(str);
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

    // OR
    // const result = [];
    // for (let i = 0; i <  arr.length; i++){
    // result.unshift(arr[i]); //keep adding to the front
    // }
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
  // ERROR EXPLAINED: bc it moves the index for that last falsy in a row, so we end up skipping it. See solutions below vvv
  function removeFalsies(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
    // Working logic:
    // const result = [];
    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i]) { // if value is a truthy, then push it into our result array
    //         result.push(arr[i]);
    //     }
    // }
    // return result;

    // OR
    // return arr.filter((el) => el);
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
      obj[currentNestedArrKey] = arr[i][1]; // When key is computed, NEED [] notation
      // Or in one line:
      // obj[arr[i][0]] = arr[i][1];
    }
    // OR with for ...  of
    //for (const nestedArr in arr) {
    //     obj[nestedArr[0]] = nestedArr[1];
    // }
    return obj;

    // OR
    // use fromEntries:
    // - to delete from obj: delete (which is a keyword) obj.keyName;
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
    return [...new Set(arr)]; // bc set has uniquely distinct values only

    // OR
    // return arr.filter((item, index) => arr.indexOf(item) === index);
    // AKA it grabs the first index of the word then checks it against the index of given item in the actual array,
    // if they match (!ex mango's first index is 1 vs the 2nd mango that has an index of 4 in the array)
    // then it passes thru the filter :^)
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

  function compareArrays(arr1, arr2) {
    // if they dont even have the same length, don't bother
    if (arr1.length !== arr2.length) {
      return false;
    }
    //put them in same order so that we can compare number by number
    arr1.sort();
    arr2.sort();

    // got thru and compare side by side
    for (let i = 0; i < arr.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // if at any point they don't match, then 'quit' to stop running and return false
      }
    }
    return true; //otherwise it makes it here bc passes all the tests
  }

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
  // Define a function that takes an array and returns a new array with all sub-array
  // elements concatenated into it
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
