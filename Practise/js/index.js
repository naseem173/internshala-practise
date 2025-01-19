// palindrome using string reversal

function pal(num) {
  let numstr = num.toString();
  let result = numstr.split("").reverse().join("");
  return numstr === result;
}

console.log(pal(121));
console.log(pal(123331));
console.log(pal(123321));
console.log(4666666666666666666666666666666666666666666666666666666666666666666666666666666645465465456454541215414141225555000000000000000000000000000000000000);