// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
function numerateArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1 + ": " + arr[i];
  }
  return arr;
}

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
const arr = (N) => {
  /* the numbers 0 to N-1 */
  let a = [];
  for (let i = 0; i < N; i++) {
    a.push(i);
  }
  return a;
};

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
function flyBy(lamps, drone) {
  let arr = [...lamps];
  let newArr = [];
  for (let i = 0; i < drone.length; i++) {
    newArr.push("o");
  }
  newArr[drone.length] = lamps.slice(drone.length);
  return newArr.join("");
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
