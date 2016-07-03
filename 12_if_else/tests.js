$(document).ready(function() {
    var test = function(id, f, input, output, desc) {
        if (arguments.length < 5) {
            desc = input.toString();
        }
        var li = $("<li>" + desc + "</li>").appendTo(id);
        if ( f(input) == output ) {
            li.addClass("right");
        } else {
            li.addClass("wrong");
        }
    };

    test("#lessThanFive", lessThanFive, -1, true, "-1<5");
    test("#lessThanFive", lessThanFive, 0, true, "0<5");
    test("#lessThanFive", lessThanFive, 1, true, "1<5");
    test("#lessThanFive", lessThanFive, 5, false, "5<5");
    test("#lessThanFive", lessThanFive, 10, false, "10<5");

    test("#gteEleven", gteEleven, -10, false);
    test("#gteEleven", gteEleven, 0, false);
    test("#gteEleven", gteEleven, 1, false);
    test("#gteEleven", gteEleven, 11, true);
    test("#gteEleven", gteEleven, -20, true);

    test("#bigTen", bigTen, 5, "small");
    test("#bigTen", bigTen, 10, "big");
    test("#bigTen", bigTen, 20, "big");
    test("#bigTen", bigTen, -1, "small");
    test("#bigTen", bigTen, 1000, "big");
    test("#bigTen", bigTen, Number.MAX_SAFE_INTEGER, "big");
    test("#bigTen", bigTen, Number.MIN_SAFE_INTEGER, "small");

    test("#justRight", justRight, -1, "small");
    test("#justRight", justRight, 0, "small");
    test("#justRight", justRight, 10, "small");
    test("#justRight", justRight, 49.9999999, "small");
    test("#justRight", justRight, 50, "just right");
    test("#justRight", justRight, 50.000001, "big");
    test("#justRight", justRight, 1000, "big");

    test("#tooSmall", tooSmall, -100, "too small");
    test("#tooSmall", tooSmall, -0.00001, "too small");
    test("#tooSmall", tooSmall, 0, "small");
    test("#tooSmall", tooSmall, 50, "small");
    test("#tooSmall", tooSmall, 100, "small");
    test("#tooSmall", tooSmall, 101, "big");
    test("#tooSmall", tooSmall, 1000, "big");

    test("#letterCase", letterCase, "a", "lowercase");
    test("#letterCase", letterCase, "z", "lowercase");
    test("#letterCase", letterCase, "D", "uppercase");
    test("#letterCase", letterCase, "B", "uppercase");
    test("#letterCase", letterCase, 0, "error");
    test("#letterCase", letterCase, "abc", "error");
    test("#letterCase", letterCase, "ABC", "error");

    test("#evenOdd", evenOdd, -1, "negative");
    test("#evenOdd", evenOdd, 0, "zero");
    test("#evenOdd", evenOdd, 1, "odd");
    test("#evenOdd", evenOdd, 2, "even");
    test("#evenOdd", evenOdd, 5, "odd");
    test("#evenOdd", evenOdd, 1024, "even");
    test("#evenOdd", evenOdd, 1.5, "fraction");

    test("#absolute", absolute, 0, 0);
    test("#absolute", absolute, 1, 1);
    test("#absolute", absolute, 1000, 1000);
    test("#absolute", absolute, -1, 1);
    test("#absolute", absolute, -100, 100);
    test("#absolute", absolute, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    test("#fizzBuzz", fizzBuzz, 3, "buzz");
    test("#fizzBuzz", fizzBuzz, 21, "fizz");
    test("#fizzBuzz", fizzBuzz, 357, "fizz");
    test("#fizzBuzz", fizzBuzz, 91, "buzz");
    test("#fizzBuzz", fizzBuzz, 531441, "buzz");
    test("#fizzBuzz", fizzBuzz, 7, "baz");
    test("#fizzBuzz", fizzBuzz, 14, "baz");
    test("#fizzBuzz", fizzBuzz, 2048, "baz");

    test("#wordCase", wordCase, "small", "word");
    test("#wordCase", wordCase, "words", "word");
    test("#wordCase", wordCase, "Daniel", "name");
    test("#wordCase", wordCase, "Bergey", "name");
    test("#wordCase", wordCase, "JavaScript", "name");
    test("#wordCase", wordCase, "BIG", "yelling");
    test("#wordCase", wordCase, "LOUD", "yelling");

    test("#divTen", divTen, 10, 1);
    test("#divTen", divTen, 100, 1);
    test("#divTen", divTen, 8, 2);
    test("#divTen", divTen, 625, 2);
    test("#divTen", divTen, 65536, 2);
    test("#divTen", divTen, 1, 3);
    test("#divTen", divTen, 49, 3);

    test("#caseLength", caseLength, "baz", 5);
    test("#caseLength", caseLength, "bazaar", 5);
    test("#caseLength", caseLength, "alphabet", 4);
    test("#caseLength", caseLength, "alphabet soup", 3);
    test("#caseLength", caseLength, "awesomesauce",3);
    test("#caseLength", caseLength, "Friends", 2);
    test("#caseLength", caseLength, "CS1", 5);
    test("#caseLength", caseLength, "Seven", 1);

});
