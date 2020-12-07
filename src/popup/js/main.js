var on_off_switch = document.getElementById("on-off");
var settings = document.getElementById("settings")
var single_line_button = document.getElementById("single-line-btn");
var single_line_settings = document.getElementById("single-line")
var dual_line_button = document.getElementById("dual-line-btn");
var dual_line_settings = document.getElementById("dual-line");

// style vars
var background_color = ["none",  "#4D7EA8"];
var display = ["none", "inherit"]

on_off_switch.addEventListener("change", () => {
    if (on_off_switch.checked) {
        settings.style.display = "inherit"
    } else {
        settings.style.display = "none"
    }
})

single_line_button.addEventListener("click", () => {
    single_line_button.style.background = background_color[1];
    single_line_settings.style.display = display[1];
    dual_line_button.style.background = background_color[0];
    dual_line_settings.style.display = display[0];
})
dual_line_button.addEventListener("click", () => {
    single_line_button.style.background = background_color[0];
    single_line_settings.style.display = display[0];
    dual_line_button.style.background = background_color[1];
    dual_line_settings.style.display = display[1];
    
})
function swap(i) {
    var opposite = abs(i - 1)
    single_line_button.style.background = background_color[0];
    single_line_settings.style.display = display[0];
    dual_line_button.style.background = background_color[1];
    dual_line_settings.style.display = display[1];

}

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('save', (color, instance) => {
    color = color.toHEXA()
    
    console.log("save", color)
    if (color.length == 4); { 
        
    }
});