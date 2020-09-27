var single_line_button = document.getElementById("single-line-btn");
var single_line_settings = document.getElementById("single-line")
var dual_line_button = document.getElementById("dual-line-btn");
var dual_line_settings = document.getElementById("dual-line");

single_line_button.addEventListener("click", () => {
    single_line_button.style.background = "#F1D302";
    single_line_settings.style.display = "inherit";
    dual_line_button.style.background = "none";
    dual_line_settings.style.display = "none";

})
dual_line_button.addEventListener("click", () => {
    single_line_button.style.background = "none";
    single_line_settings.style.display = "none";
    dual_line_button.style.background = "#F1D302";
    dual_line_settings.style.display = "inherit";
    
})


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