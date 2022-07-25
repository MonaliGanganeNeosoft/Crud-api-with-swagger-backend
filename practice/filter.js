let vals = [2, 3, 4, 5, 6];
function isEven(num) {
  return num % 2 == 0;
}
vals = vals.filter(isEven);
console.log(vals);
