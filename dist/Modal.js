import React, { useEffect, useRef } from "react";
import "./style.css";
export function Modal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    var modalRef = useRef(null);
    // cliquer en dehors
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
            document.body.classList.add("modal-open");
        }
        else {
            document.body.classList.remove("modal-open");
        }
        return function () {
            document.body.classList.remove("modal-open");
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
    }, [isOpen, handleOutsideClick, handleEscapeKey]);
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "modal-overlay" },
        React.createElement("div", { ref: modalRef, className: "modal-container", style: { maxHeight: "calc(100vh - 3rem)" } },
            React.createElement("button", { className: "modal-close-button", onClick: onClose, "aria-label": "Close" },
                React.createElement("svg", { className: "modal-close-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))),
            title && (React.createElement("div", { className: "modal-header" },
                React.createElement("h3", { className: "modal-title" }, title))),
            React.createElement("div", { className: "modal-body ".concat(title ? "modal-body-with-title" : "modal-body-without-title") }, children))));
}
