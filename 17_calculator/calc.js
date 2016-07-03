$(document).ready( function () {
    var displayVal = 0; // current displayVal
    var lastVal = 0; // displayVal before last operator was pressed
    var lastOp = 'eq' // last operator pressed, as string

    // if we're displaying the previous result, clear the display when a number is pressed
    var clear = false;

    // list of operators
    var operators = ['plus', 'minus', 'times', 'divide', 'eq'];

    // write a function called `draw` that updates the HTML with the current
    // values of the variables above
    var draw = function () {

    };

    // fill in the function called when the 1 key is pressed
    // What global variables does it depend on?
    // What global variables does it change?
    $('#k1').click(function () {

    });

    // Write similar code for the other 9 number keys

    // What should happen when the plus key is pressed?
    // What global variables does it depend on?
    // What global variables does it change?

    // This updates the HTML once when the page loads.
    draw();

    // This runs the draw function often enough to look smooth.
    var loop = function() {
        window.requestAnimationFrame(function () {
            draw();
            loop();
        });
    };
    loop();
})
