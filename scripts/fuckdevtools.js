const disable_right_click = true;
const disable_f12 = true;
const disable_csi = true;
const disable_cs_j = true;
const disable_ctrl_u = true;

document.addEventListener('contextmenu', function (e) {
    if (disable_right_click) {
        e.preventDefault();
        FuiToast.error("Đè Cái Gì? Chuột Phải Cái Gì? :))");
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

(function () {
    const domain = window.location.hostname;

    // Kiểm tra nếu không phải localhost hoặc 127.0.0.1
    if (domain !== 'localhost' && !domain.startsWith('127.0.0.1')) {
        
(function () {
    const relax = {
        clear: true,
        debug: true,
        debugTime: 3000,
        bfcache: true,
    };

    (function (e, t) {
        "use strict";
        var i = function () {
            return (i = Object.assign || function (e) {
                for (var t, i = 1, n = arguments.length; i < n; i++)
                    for (var o in t = arguments[i])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments)
        };

        var n = { clear: !0, debug: !0, debugTime: 3e3, bfcache: !0 },
            o = function (e) {
                return ~navigator.userAgent.toLowerCase().indexOf(e)
            },
            r = function (e, t) {
                2 !== t ? location.href = e : location.replace(e)
            },
            c = 0,
            a = 0,
            f = function (e) {
                var t = 0,
                    i = 1 << c++;
                return function () {
                    (!a || a & i) && 2 == ++t && (a |= i, e(), t = 1)
                }
            };

        var u = function () {
            function e(e) {
                var t = i(i({}, n), e),
                    o = t.clear,
                    r = t.debug,
                    c = t.debugTime,
                    a = t.callback,
                    f = t.redirect,
                    u = t.write,
                    l = t.bfcache;
                this._debug = r;
                this._debugTime = c;
                this._clear = o;
                this._bfcache = l;
                this._callback = a;
                this._redirect = f;
                this._write = u;
            }

            e.prototype.clear = function () {
                this._clear && (console.clear = function () { });
            };

            e.prototype.bfcache = function () {
                this._bfcache && (
                    window.addEventListener("unload", function () { }),
                    window.addEventListener("beforeunload", function () { })
                );
            };

            e.prototype.debug = function () {
                if (this._debug) {
                    var e = new Function("");
                    setInterval(e, this._debugTime);
                }
            };

            e.prototype.redirect = function (e) {
                var t = this._redirect;
                if (t)
                    if (0 !== t.indexOf("http")) {
                        var i, n = location.pathname + location.search;
                        ((i = t) ? "/" !== i[0] ? "/" + i : i : "/") !== n && r(t, e);
                    } else
                        location.href !== t && r(t, e);
            };

            e.prototype.callback = function () {
                if ((this._callback || this._redirect || this._write) && window) {
                    var e, t = this.fire.bind(this),
                        i = window.chrome || o("chrome"),
                        n = o("firefox");
                    if (!i)
                        return n ? ((e = /./).toString = t, void console.log(e)) : void function (e) {
                            var t = new Image;
                            Object.defineProperty(t, "id", {
                                get: function () { e(2) }
                            });
                            console.log(t);
                        }(t);

                    (function (e) {
                        var t = /./,
                            i = function () { return t };
                        i.toString = f(e);
                        var n = new Date;
                        n.toString = f(e);
                        console.log("%c", i, i(), n);
                        var o, r, c = f(e);
                        o = c;
                        r = new Error;
                        Object.defineProperty(r, "message", {
                            get: function () { o() }
                        });
                        console.log(r);
                    })(t);
                }
            };

            e.prototype.write = function () {
                var e = this._write;
                e && (document.body.innerHTML = "string" == typeof e ? e : e.innerHTML);
            };

            e.prototype.fire = function (e) {
                this._callback ? this._callback.call(null) : (this.redirect(e), this._redirect || this.write());
            };

            e.prototype.prepare = function () {
                this.clear();
                this.bfcache();
                this.debug();
            };

            e.prototype.ban = function () {
                this.prepare();
                this.callback();
            };

            return e;
        }();

        e.init = function (e) {
            new u(e).ban();
        };
    })(relax, typeof globalThis != "undefined" ? globalThis : typeof global != "undefined" ? global : typeof self != "undefined" && self);

    relax.init();

    relax.init({
        redirect: "//google.com"
    });
})();
        const url = window.location.href;
        if (url.indexOf("https") < 0) {
            const secureUrl = url.replace("http:", "https:");
            window.location.replace(secureUrl);
        }
    }
})();

if (document.documentElement.outerHTML.indexOf("view-source:") !== -1) {
    location.replace("about:blank");
}

if (document.documentElement.outerHTML.indexOf("javascript:") !== -1) {
    location.replace("about:blank");
}

if (document.documentElement.outerHTML.indexOf("data:text/javascript") !== -1) {
    location.replace("about:blank");
}

(function () {
    const threshold = 160; 

    function detectDevTools(openedCallback) {
        const start = new Date();
        debugger;
        const end = new Date();
        if (end - start > threshold) {
            openedCallback();
        }
    }

    setInterval(function () {
        detectDevTools(() => {
            location.reload();
        });
    }, 1000);
})();

(() => {
    let scriptSrc = document.createElement("script");

    scriptSrc.innerText = 'for (var i = 111; i < 222; i++) { console.error("%c[" + i.toString(16) + "] HTML Guard sees you!", "font-size: 25px; text-shadow: 0 0 1px black; color: red;") }';

    document.head.appendChild(scriptSrc);
})();

const HtmlGuard = {
    protections: {
        antiDevTools() {

            function isNative(func) { // Designed for functions returning values
                return typeof func === "function" && (
                    window.eval.toString().includes("return") === false &&
                    window.eval.toString().includes("[native code]") &&
                    window.eval.toString().length < 40
                )
            }


            // DevTools detector
            let antiDevToolsInterval = setInterval(() => {

                // Antispoof
                if (!isNative(Date.now) ||
                    !isNative(window.eval) ||
                    window.eval("2+2") !== 4) {

                    alert("Do not spoof functions!");

                    document.head.innerHTML = "";
                    document.body.innerHTML = "";
                    location.reload();

                    clearInterval(antiDevToolsInterval);
                }

                let started = Date.now(),
                    end;

                window.eval("// The use of DevTools is prohibited in this web application\n" + "debugger");

                end = Date.now();

                if ((end - started) > 50) {

                    alert("DevTools not allowed!");

                    document.head.innerHTML = "";
                    document.body.innerHTML = "";
                    location.reload();

                    clearInterval(antiDevToolsInterval);
                }
            }, 150);
        },
        blockContextMenu() {
            document.oncontextmenu = () => {
                return false;
            };
        },
        blockDrag() {
            document.ondragstart = () => {
                return false;
            };
        },
        blockSelection() {
            document.onselectstart = () => {
                return false;
            };
        },
        blockConsoleOutput() {
            ["log", "debug", "warn", "error", "dir", "dirxml", "assert", "table"].forEach(funcName => {
                console[funcName] = () => { return null; };
            });
        }
    },
    loader: {
        loadStyleByRef(stylePath) {
            let styleLink = document.createElement("link");

            styleLink.rel = "stylesheet";
            styleLink.href = stylePath;

            document.head.appendChild(styleLink);
        },
        loadScriptBySrc(scriptPath) {
            let scriptSrc = document.createElement("script");

            scriptSrc.src = scriptPath;

            document.head.appendChild(scriptSrc);
        },
        loadScriptBySrc_ContentLoaded(scriptPath) {

            document.addEventListener("DOMContentLoaded", () => {
                HtmlGuard.loader.loadScriptBySrc(scriptPath);
            });

        }
    }
};

(() => {

    if (Math.random() == Math.random() == Math.random()) {
        document.head.innerHTML = "";
        document.body.innerHTML = "";
        location.reload();
    }

    document.onkeydown = (e) => {
        if (event.keyCode == 123) { return false; } // F12
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Ctrl + Shift + I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Ctrl + Shift + J
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Ctrl + U
    }

    document.addEventListener("DOMContentLoaded", () => {

        obfuscatePageSource();

        setInterval(() => {
            obfuscatePageSource();
        }, 2000);

        function obfuscatePageSource() {
            const
                attributeName = "html-guard-attribute",
                notGuardedSelector = ":not([" + attributeName + "])";

            // Junk comments
            for (const element of document.querySelectorAll("*" + notGuardedSelector)) {
                for (var i = 0; i < randomByRange(5, 15); i++) {

                    let comment = "";

                    for (var o = 0; o < randomByRange(10, 20); o++) {
                        comment += generateRandomString(1, 5) + "\n";
                    }

                    element.parentNode.insertBefore(document.createComment(comment), element);

                }
            }


            // Add fake IDs
            for (const element of document.querySelectorAll(":not([id])" + notGuardedSelector)) {
                element.id = generateRandomString(5, 15);
            }


            // Protected attributes
            for (const element of document.querySelectorAll("*")) {

                const attributes = element.attributes;

                for (const attribute of attributes) {
                    if (attribute.name.startsWith("_")) {
                        element.setAttribute(attribute.name.substring(1), attribute.value);

                        element.removeAttribute(attribute.name);
                    }
                }


            }


            for (const element of document.querySelectorAll("*" + notGuardedSelector)) {
                // Junk classes
                for (let i = 0; i < randomByRange(1, 8); i++) {
                    element.classList.add(generateRandomString(6, 20));
                }

                // Junk attributes
                for (let i = 0; i < randomByRange(10, 55); i++) {
                    element.setAttribute(generateRandomString(6, 12), (randomByRange(0, 1) == 1) ? generateRandomString(1, 5) : "");
                }

                element.setAttribute(attributeName, "");
            }

        }

        function generateRandomString(min, max) {
            if (min > max) {
                throw new RangeError("min > max");
            }

            const length = Math.floor(Math.random() * (max - min + 1)) + min;
            const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            let randomString = "";
            for (let i = 0; i < length; i++) {
                randomString += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return randomString;
        }


        function randomByRange(min, max) {
            if (min > max) {
                throw new RangeError("min > max");
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
})();