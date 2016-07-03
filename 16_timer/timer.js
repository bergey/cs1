 $(document).ready(function () {
    // These variables keep track of the time remaining
    var seconds = 0;
    var minutes = 40;
    var hours = 0;

    var running = true; // Is the timer running down, or paused?

    // write a function called `draw` that updates the HTML with the current
    // values of the variables above
    var draw = function() {

    };

    // Write a function `countDown` that substracts one second.
    // There is code later that calls this every second
    // Think about what happens if seconds = 0.

    // Fill in the function called when the minus button below seconds is pressed
    $("#minus-second").click(function () {

    });

    // What should happen for the other 8 buttons?
    // Write a function for each, and attach them to the buttons using $

    // This updates the HTML once when the page loads.
    draw();

    // This runs the countDown function once every second.
    window.setInterval(function() {
        countDown();
    }, 1000);

    // This runs the draw function often enough to look smooth.
    var loop = function() {
        window.requestAnimationFrame(function () {
            draw();
            loop();
        });
    };
    loop();
})
