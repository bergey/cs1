$(document).ready(function() {

    var eq = function(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    var prettyArgs = function(input) {
        if (input.length == 1) {
            return input.toString();
        } else {
            return ( "(" + input.toString() + ")" );
        }
    };

    var prettyArray = function (input) {
        if (input == undefined) {
            return "()";
        } else if (Array.isArray(input)) {
            return ("[" + input.toString() + "]")
        } else {
            return input.toString()
        }
    };

    var test = function(id, f, input, output, desc) {
        var got = f.apply(this, input);
        if (arguments.length == 4 ) {
            desc = prettyArgs(input) + " -> " + prettyArray(output);
        }
        if (!eq(got, output)) {
            desc += " (got: " + prettyArray(got) + ")";
        }
        var li = $("<li>" + desc + "</li>").appendTo(id);
        if (eq(got, output)) {
            li.addClass("right");
        } else {
            li.addClass("wrong");
        }
    };

    var test1 = function(id, f, input, output) {
        var desc = prettyArray(input) + " -> " + prettyArray(output);
        test(id, f, [input], output, desc);
    };


    test1("#product10", product10, undefined, 3628800);

    test1("#productK", product100, undefined, 9.33262154439441e+157);

    test1("#first", first, [1,2,3], 1);
    test1("#first", first, [2,3,4], 2);
    test1("#first", first, [1,2,3,4], 1);
    test1("#first", first, "abcde", "a");

    test1("#second", second, [1,2,3], 2);
    test1("#second", second, [2,3,4], 3);
    test1("#second", second, [1,2,3,4], 2);
    test1("#second", second, "abcde", "b");
    test1("#second", second, "hello CS1", "e");

    test1("#append0", append0, [], [0]);
    test1("#append0", append0, [1], [1,0]);
    test1("#append0", append0, [3,2,1], [3,2,1,0]);
    test1("#append0", append0, ["hello", "world"], ["hello", "world", 0]);

    test1("#append123", append123, [], [1,2,3]);
    test1("#append123", append123, [0], [0,1,2,3]);
    test1("#append123", append123, ["append"], ["append", 1, 2, 3]);
    test1("#append123", append123, [4, 5, 6], [4, 5, 6, 1, 2, 3]);

    test1("#prepend0", prepend0, [], [0]);
    test1("#prepend0", prepend0, [1], [0, 1]);
    test1("#prepend0", prepend0, [1, 2, 3], [0, 1, 2, 3]);
    test1("#prepend0", prepend0, ["prepend"], [0, "prepend"]);

    test1("#plusOne", plusOne, [], []);
    test1("#plusOne", plusOne, [1], [2]);
    test1("#plusOne", plusOne, [65535], [65536]);
    test1("#plusOne", plusOne, [1, 3, 7, 15], [2, 4, 8, 16]);
    test1("#plusOne", plusOne, [-1, 0, 2, -8], [0, 1, 3, -7]);

    test1("#absoluteList", absoluteList, [], []);
    test1("#absoluteList", absoluteList, [1,2,5,7,11], [1,2,5,7,11]);
    test1("#absoluteList", absoluteList, [-1], [1]);
    test1("#absoluteList", absoluteList, [-1024], [1024]);
    test1("#absoluteList", absoluteList, [-13, -17, -19, -23, -29], [13, 17, 19, 23, 29]);
    test1("#absoluteList", absoluteList, [-31, 37, -41, 43, -47], [31, 37, 41, 43, 47]);

    test1("#product", product, [1], 1);
    test1("#product", product, [1,2], 2);
    test1("#product", product, [2,3,4], 24);
    test1("#product", product, [2,2,2,2,2,2,2,2], 256);
    test1("#product", product, [], 1);

    test1("#range1", range, 2, [1,2]);
    test1("#range1", range, 3, [1,2,3]);
    test1("#range1", range, 10, [1,2,3,4,5,6,7,8,9,10]);
    test1("#range1", range, 1, [1]);

    test1("#range2", range2, 2, [1,2]);
    test1("#range2", range2, 3, [1,2,3]);
    test1("#range2", range2, 10, [1,2,3,4,5,6,7,8,9,10]);
    test1("#range2", range2, 1, [1]);
    test1("#range2", range2, 0, [1,0]);
    test1("#range2", range2, -1, [1,0,-1]);
    test1("#range2", range2, -3, [1, 0, -1, -2, -3]);

    test("#range3", range3, [1,3], [1,2,3]);
    test("#range3", range3, [1,5], [1,2,3,4,5]);
    test("#range3", range3, [1,1], [1]);
    test("#range3", range3, [-3, 2], [-3,-2,-1,0,1,2]);
    test("#range3", range3, [2, -2], [-2, -1, 0, 1, 2]);
    test("#range3", range3, [-2, -4], [-4, -3, -2]);

    test("#range4", range4, [1,3], [1,2,3]);
    test("#range4", range4, [1,5], [1,2,3,4,5]);
    test("#range4", range4, [1,1], [1]);
    test("#range4", range4, [-3, 2], [-3,-2,-1,0,1,2]);
    test("#range4", range4, [2, -2], [2, 1, 0, -1, -2]);
    test("#range4", range4, [-2, -4], [-2, -3, -4]);

    test1("#rangeStep1", rangeStep1, 1, [0,1,2,3,4,5,6,7,8,9]);
    test1("#rangeStep1", rangeStep1, 2, [0,2,4,6,8]);
    test1("#rangeStep1", rangeStep1, 5, [0,5]);
    test1("#rangeStep1", rangeStep1, 2.5, [0,2.5,5,7.5]);

    test("#rangeStep2", rangeStep2, [1,10,1], [1,2,3,4,5,6,7,8,9]);
    test("#rangeStep2", rangeStep2, [1,10,2], [1,3,5,7,9]);
    test("#rangeStep2", rangeStep2, [1,10,5], [1, 6]);
    test("#rangeStep2", rangeStep2, [1,10, 2.5], [1, 3.5, 6, 8.5]);
    test("#rangeStep2", rangeStep2, [1,5,1], [1,2,3,4]);
    test("#rangeStep2", rangeStep2, [1, 6, 2], [1,3,5]);
    test("#rangeStep2", rangeStep2, [10, 20, 3.5], [10, 13.5, 17]);
    test("#rangeStep2", rangeStep2, [-5, 11, 5], [-5,0, 5, 10]);
    test("#rangeStep2", rangeStep2, [-3, 5, 2], [-3, -1, 1, 3]);

});
