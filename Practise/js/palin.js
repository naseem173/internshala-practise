// palindrome check using recursion

function palindromeCheck(num) {
  let numstr = num.toString();

  return ispalindrome(numstr, 0, numstr.length - 1);
}

function ispalindrome(str, start, end) {
    if (start >= end) return true; //comparing assending value
    if (str[start] !== str[end]) return false;
    return ispalindrome(str, start + 1, end - 1);
}

console.log(palindromeCheck(123456345465476587937568798787608094886524354765780982436358645235243656456787987857854534635768965836573666756876978078099780956763765879008654321));
console.log(palindromeCheck(123021));
