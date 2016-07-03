// Use a loop to multiply together all the numbers between one and 10
var product10 = function() {
    var p = 1;
    var i = 1;
    while (i <= 10) {
        p *= i;
        i += 1;
    }
    return p;
};

// multiply together all the numbers between 1 and 100
var product100 = function() {
    var p = 1;
    var i = 1;
    while (i <= 100) {
        p *= i;
        i += 1;
    }
    return p;
};

// return the first element in the input list
var first = function(list) {
    return list[0];
};

// return the second element in the input list
var second = function(list) {
    return list[1];
};

// append 0 to the end of the list
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
var append0 = function(list) {
    list.push(0);
    return list;
};

// add 3 new elements to the end of the list:
// they should be the numbers 1, 2, & 3
var append123 = function(list) {
    list.push(1);
    list.push(2);
    list.push(3);
    return list;
};

// add 0 at the beginning of the list
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
var prepend0 = function(list) {
    list.unshift(0);
    return list;
};

// Add one to each element in a list
var plusOne = function(list) {
    var i = 0;
    while (i < list.length) {
        list[i] += 1;
        i++;
    }
    return list;
};

// replace each element in a list with its absolute value
var absoluteList = function(list) {
    var i = 0;
    while (i < list.length) {
        list[i] = Math.abs(list[i]);
        i++;
    }
    return list;
};

// calculate the product of all the numbers in a list
var product = function(list) {
    var p = 1;
    var i = 0;
    while ( i < list.length) {
        p *= list[i];
        i++;
    }
    return p;
};

// return a list with all of the numbers (integers) between 1 and the input
// Include 1 and the input.
// Assume the input is a positive integer.
var range = function(n) {
    var l = [];
    var i = 1;
    while (i <= n) {
        l.push(i);
        i++;
    }
    return l;
};

// return a list with all of the numbers (integers) between 1 and the input
// Include 1 and the input.
// The input can be any number, positive or negative
var range2 = function(n) {
    if (n == 1) {
        return [1];
    }
    var step = Math.sign(n - 1);
    var i = 1;
    var l = [];
    while ((n-i) * step >= 0) {
        l.push(i);
        i += step;
    }
    return l;
};

// Return a list with all of the integers between the two inputs
// Include both inputs.
// List the numbers in increasing order.
var range3 = function(a, b) {
    if (b < a) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var l = [];
    while (a <= b) {
        l.push(a);
        a++;
    }
    return l;
};

// Return a list with all of the integers between the two inputs
// Include both inputs.
// List the numbers in increasing order if the second input is greater than the first.
// List the numbers in decreasing order if the second input is less than the first.
var range4 = function(a, b) {
    if (a == b) {
        return [a];
    }
    var step = Math.sign(b - a);
    var l = [];
    while ((b-a) * step >= 0) {
        l.push(a);
        a += step;
    }
    return l;
};

// The input is a step size
// return a list starting with 0, with each number greater than the previous by the step size
// The biggest number in the list should be less than 10
var rangeStep1 = function(step) {
    var l = [];
    var x = 0;
    while (x < 10) {
        l.push(x);
        x += step;
    }
    return l;
};

// input: starting number, ending number, step size
// return a list starting an the given input,
// with each number greater than the previous by the step size
// The biggest number in the list should be less than the ending number
var rangeStep2 = function(start, stop, step) {
    var l = [];
    var x = start;
    while (x < stop) {
        l.push(x);
        x += step;
    }
    return l;
};
