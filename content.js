//content.js
// Inject HTML
var main_div = document.createElement("div");
var top_bar = document.createElement("div");
var gap_bar = document.createElement("div");
var bottom_bar = document.createElement("div");
main_div.appendChild(top_bar);
main_div.appendChild(gap_bar);
main_div.appendChild(bottom_bar);  

main_div.setAttribute("id", "reading-lines-injected");
top_bar.setAttribute("id", "top-bar-reading-line");
gap_bar.setAttribute("id", "gap-reading-line");
bottom_bar.setAttribute("id", "bottom-bar-reading-line");

document.body.appendChild(main_div);


//Make the DIV element draggable:
dragElement(document.getElementById("reading-lines-injected"), document.getElementById("top-bar-reading-line"), document.getElementById("bottom-bar-reading-line"));

function dragElement(body, elmnt, elmnt2) {
    var pos1 = 0, pos2 = 0;

    elmnt.onmousedown = dragMouseDown;
    elmnt2.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos2 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientY;
        pos2 = e.clientY;
        // set the element's new position:
        body.style.top = (body.offsetTop - pos1) + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}     