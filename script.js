function solve(input) {
  let string = "";
  input = input.trim();
  if (input[input.length - 1] == ",") {
    input = input.substr(0, input.length - 1);
  }

  if (input[0] == ",") {
    input = input.substr(1, input.length - 1);
  }

  let arr = input.split(",");
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  let arrResult = Array.from(set).sort(function (a, b) {
    return a - b;
  });

  let i = 0;
  while (i < arrResult.length) {
    if (+arrResult[i] + 1 != +arrResult[i + 1]) {
      string = string + arrResult[i] + ",";
      i++;
    } else {
      string += arrResult[i] + "-";

      while (i + 1 < arrResult.length) {
        if (+arrResult[i] + 1 == +arrResult[i + 1]) {
          i++;
        } else {
          string += arrResult[i] + ",";
          i++;
          break;
        }
      }
    }
  }
  let newString = "";
  newString = string.substr(0, string.length - 1);

  return newString;
}

let input="1,3,1,4,5,45,78,1,77,76,79,42";

console.log(solve(input));
