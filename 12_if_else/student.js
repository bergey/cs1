// return true if input is less than 5.
var lessThanFive = function (x) {

};

// return true if input is greater than or equal to 11
var gteEleven = function (x) {

};

// return "small" if input is less than 10, "big" otherwise
var bigTen = function (x) {

};

// return "small" if input is less than 50, "just right" if it's 50, "big" otherwise
var justRight = function(x) {

};

// return "too small" if input is less than 0,
// "small" if less than or equal to 100, "big" otherwise
var tooSmall = function(x) {

};

// return "uppercase" if the input is an uppercase letter
// "lowercase" if it's a lowercase letter
// "error" if it's not a letter
// You can use l.toLowerCase() and l.toUpperCase()
var letterCase = function(l) {

};

// return "negative"  if the input is less than 0
// "zero" if it is 0
// "even" if it is even
// "odd" if it is odd
// "fraction" if it is not an integer (whole number)
var evenOdd = function(x) {
    if (x % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

// return the absolute value of the input
var absolute = function (x) {

};

// return "fizz" if the input is divisible by 3 and 7
// return "buzz" if it's divisible by 3 but not by 7
// return "baz" otherwise
var fizzBuzz = function(x) {

};

// There are at least 3 ways to write the function above
// Write all 3 - call them fizzBuzz2, fizzBuzz3
// (Whichever one you already wrote above counts.)
// 1. Using nested ifs
// 2. Using if / else if / else, dividing by (3 * 7)
// 3. Using && to combine tests - this is new.
// && is pronounced "and"; it works like this

var showAnd = function(x) {
    if (x == 1 && x == 2)
        // this only happens if both sides of the && are true
        console.log("the impossible happened");
    else if (x % 2 == 0 && x % 3 == 0) {
        console.log("divisible by 6");
    } else {
        console.log(x);
    }
};

// return "yelling" if all the letters in the input are upper case
// return "name" if the first letter is uppercase but they are not all upper case
// return "word" if all the letters are lower case
// use &&
var wordCase = function(word) {

};

// || means "or"
// we use it like &&, but the result is true if either side is true
// return 1 if the input is divisible by 2 and 5
// return 2 if it is divisible by 2 or 5, but not both
// return 3 otherwise
// use && and ||
var divTen = function(x) {

};

// return 1 if the input starts with an upper case letter and has 5 letters
// return 2 if it starts with an uppercase letter and has more than 5 letters
// return 3 if it starts with a lowercase "a" and has more than 10 letters
// return 4 if it starts with a lowercase "a" and has fewer than 10 letters
// return 5 if none of these are true
// use && and || and x.length (no parens)
// Yes, I know this is a silly function.
var caseLength = function(x) {

};
