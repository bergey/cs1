$(document).ready(function () {
    $("#ex1").mousemove(function (ev) {
        var svgOffset = $("#ex1").offset();
        $("#ex2").empty();
        $("#ex2").append("<li>SVG position on page = (" + svgOffset.left + ", "
                       + svgOffset.top + ")</li>");
        $("#ex2").append("<li>Mouse position on page = (" + ev.pageX + ", "
                       + ev.pageY + ")</li>");
        $("#ex2").append("<li>Mouse position in SVG = ("
                       + (ev.pageX - svgOffset.left) + ", "
                       + (ev.pageY - svgOffset.top) + ")</li>");
    });

    var svg = function(tag) {
        return $(document.createElementNS('http://www.w3.org/2000/svg', tag));
    };

    $("#ex3").append(svg("circle").attr("cx", 60).attr("cy", 60).attr("r", 15).attr("fill", "blue"));
    // you can also save the shape to a variable
    var rect = svg("rect");
    rect.attr("x", 100).attr("y", 45);
    rect.attr("width", 30).attr("height", 30);
    $("#ex3").append(rect);

});
