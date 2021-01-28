"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransition = void 0;
var react_toastify_1 = require("react-toastify");
function getTransition(type) {
    switch (type) {
        case "slide": return react_toastify_1.Slide;
        case "zoom": return react_toastify_1.Zoom;
        case "bounce": return react_toastify_1.Bounce;
    }
}
exports.getTransition = getTransition;
