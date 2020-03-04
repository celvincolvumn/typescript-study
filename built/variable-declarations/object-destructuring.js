"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a, b } = o;
// ({ a, b } = { a: "baz", b: 101 });
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
