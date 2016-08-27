
var x = 8;
function addNumber(value) {
  return value +18;
  }
function multiplyNumber(value) {
  return value *10;

}
function subtractNumber(value) {
  return value -4;

}
function myNumber(value) {
  return value = addNumber(multiplyNumber(subtractNumber(x)));
}
x = myNumber (x);
console.log (x);
