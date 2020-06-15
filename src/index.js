
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  console.log(matrix)
  if(Array.isArray(matrix)){
    matrix.forEach((element, i) => {
      (i%2 === 0) ? arr.push(...element) : arr.push(...element.reverse());
    });
  }
  console.log(arr)
  return arr;
}
