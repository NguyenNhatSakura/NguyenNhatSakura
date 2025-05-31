const disable_right_click = true;
const disable_f12 = true;
const disable_csi = true;
const disable_cs_j = true;
const disable_ctrl_u = true;

document.addEventListener('contextmenu', function (e) {
    if (disable_right_click) {
        e.preventDefault();
        FuiToast.error("DevTools?")
    }
});

document.addEventListener('keydown', function (e) {
    // F12
    if (disable_f12 && e.keyCode === 123) {
        e.preventDefault();
        FuiToast.error("F12 bị chặn!")
        return false;
    }

    // Ctrl + Shift + I
    if (disable_csi && e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        FuiToast.error("Ctrl+Shift+I bị chặn!")
        return false;
    }

    // Ctrl + Shift + J
    if (disable_cs_j && e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        FuiToast.error("Ctrl+Shift+J bị chặn!")
        return false;
    }

    // Ctrl + U
    if (disable_ctrl_u && e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        FuiToast.error("Ctrl+U bị chặn!")
        return false;
    }
});
