import React, { useEffect, useRef } from "react";
export function Modal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    var modalRef = useRef(null);
    // cliquer en d ehors
    var handleOutsideClick = function (e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    // touche echap
    var handleEscapeKey = function (e) {
        if (e.key === "Escape") {
            onClose();
        }
    };
    useEffect(function () {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
        return function () {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    useEffect(function () {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    });
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/50 transition-opacity" },
        React.createElement("div", { ref: modalRef, className: "relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transition-all duration-300 transform", style: { maxHeight: "calc(100vh - 3rem)" } },
            React.createElement("button", { className: "absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none", onClick: onClose, "aria-label": "Close" },
                React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))),
            title && (React.createElement("div", { className: "px-6 py-4 border-b border-gray-200" },
                React.createElement("h3", { className: "text-lg font-medium text-gray-900" }, title))),
            React.createElement("div", { className: "".concat(title ? "py-4" : "pt-8 pb-4", " px-6 overflow-y-auto") }, children))));
}
