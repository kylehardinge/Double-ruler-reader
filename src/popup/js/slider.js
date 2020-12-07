export default function Slider(s, pb, mb, v) { 
    var slider = document.getElementById(s);
    var plus_button = document.getElementById(pb);
    var minus_button = document.getElementById(mb);
    var value = document.getElementById(v);
    var slider_value = slider.value;

    plus_button.addEventListener("click", () => {
        slider_value = slider_value + 1;
        value.innerText = slider_value;
    });
    minus_button.addEventListener("click", () => {
        slider_value = slider_value - 1;
        value.innerText = slider_value;
    });
    
}