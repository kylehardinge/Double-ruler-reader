// Outputs for both


// Double ruler outputs
var gap_height = document.getElementById("dual-bar-gap-height");
var ruler_height = document.getElementById("dual-bar-height");

// decode_color(full_color);

function decode_color(color) {
    var color = color[0].toString() + "," + color[1].toString() + "," + color[2].toString();
    var alpha = color[3];
    console.log(color);
    console.log(alpha);
}