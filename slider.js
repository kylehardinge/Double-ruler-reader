function Slider(s, pb, mb) { 
    var slider = document.getElementById(s);
    var plus_button = document.getElementById(pb);
    var minus_button = document.getElementById(mb);
    var slider_value = slider.value;
    plus_button.addEventListener("click", () => {
        slider_value += 1;
    })
    minus_button.addEventListener("click", () => {
        slider_value -= 1;
    })
    
}