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