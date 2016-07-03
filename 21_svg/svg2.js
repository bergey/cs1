$(document).ready( function () {


    var x1 = 0;  // circle position
    var moveOne = function () {
        // select a circle inside the SVG with ID 'one'
        // Set the attribute cx to the value of the variable x1.
        $("#one>circle").attr("cx", x1);

        x1 = x1 + 1; // increase x1 for the next frame

        // ask the browser to run this function again sometime soon
        // requestAnimationFrame takes a function as input
        // The browser will call this function once
        // We make it into a loop by having moveOne call itself again.
        requestAnimationFrame(moveOne);
    };

    // start the moveOne animation
    moveOne();

    // Keyboard Input

    $(document).keydown(function (ev) {
        // This function is called when any key is pressed
        // look at the `ev` input to find out which key was pressed
        // See other keycodes - https://api.jqueryui.com/jQuery.ui.keyCode/
        if (ev.which == $.ui.keyCode.RIGHT) {
            // lookup the `cx` attribute, and convert the String to a Number
            var cx = parseInt($("#key1 circle").attr("cx"));
            $("#key1 circle").attr("cx", cx + 5);
        }
    });
})
