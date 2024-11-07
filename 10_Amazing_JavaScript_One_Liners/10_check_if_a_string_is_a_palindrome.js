const str = 'radar';
const str2 = 'rarer';

const isPalindrome = str => str === str.split("").reverse().join("");

console.log(isPalindrome(str));
console.log(isPalindrome(str2));