function foo(a, b) {
  if (Object.is(a, b)) {
    return true;
  } else {
    return false; 
  }
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0));  // false

//Alternative solution using Number.isNaN and Object.is
function foo2(a,b){
    if(Number.isNaN(a) && Number.isNaN(b)) return true;
    return Object.is(a,b);
}
console.log(foo2(NaN,NaN)); //true
console.log(foo2(0,-0)); //false