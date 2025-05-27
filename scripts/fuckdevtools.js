// fuckdevtool.js
toast.config({ position: 'top-center' });

(function() {
    const disable_right_click = true;
    const disable_f12 = true;
    const disable_csi = true;
    const disable_cs_j = true;
    const disable_ctrl_u = true;

    // Right-click block
    if (disable_right_click) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            FuiToast.error("DevTools?");
        });
    }

    // Key blocks
    document.addEventListener('keydown', function(e) {
        // F12
        if (disable_f12 && e.key === "F12") {
            e.preventDefault();
            location.replace("about:blank");
        }

        // Ctrl+Shift+I
        if (disable_csi && e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {
            e.preventDefault();
            location.replace("about:blank");
        }

        // Ctrl+Shift+J
        if (disable_cs_j && e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) {
            e.preventDefault();
            location.replace("about:blank");
        }

        // Ctrl+U
        if (disable_ctrl_u && e.ctrlKey && (e.key === "U" || e.key === "u")) {
            e.preventDefault();
            FuiToast.error("View source? Nope.");
        }
    });
})();
