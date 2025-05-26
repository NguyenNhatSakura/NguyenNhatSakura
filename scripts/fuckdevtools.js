// The CONFIG:
var disable_right_click = /* If this was true, the user cannot right click and if they do, they see alert DevTools? */ true;
var disable_f12 = /* If this was true, users cannot do f12 */ true;
var disable_csi = /* if this was true, users cannot do control shift i */ true;
document.onkeydown = function(event) {
    if (disable_f12 == true){
        if (event.keyCode == 123) {
            event.preventDefault();
            location.replace("about:blank");

        }
    }
    // if the user pressed the Control + Shift + I key
    if (disable_csi == true){
        
        if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            event.preventDefault();
            location.replace("about:blank");
        }
    }
}
if (disable_right_click == true){
    
    document.oncontextmenu = function() {
        event.preventDefault();
        FuiToast.error("Devtools?")
    }
}
