import React from "react";
import "./style.css";
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}
export declare function Modal({ isOpen, onClose, title, children }: ModalProps): React.JSX.Element | null;
