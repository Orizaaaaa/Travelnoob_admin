'use client'

import { FC, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    className?: string
}

const Modal: FC<ModalProps> = ({ isOpen, children, className }) => {
    useEffect(() => {
        if (isOpen) {
            const modal = document.getElementById('my_modal_5');
            if (modal instanceof HTMLDialogElement) {
                modal.showModal();
            }
        } else {
            const modal = document.getElementById('my_modal_5');
            if (modal instanceof HTMLDialogElement) {
                modal.close();
            }
        }
    }, [isOpen]);

    return (
        <dialog id="my_modal_5" className="modal rounded-md modal-bottom sm:modal-middle">
            <div className="modal-box  ">
                <div className={`modal-action p-3 ${className}`}>
                    {children}
                </div>
            </div>
        </dialog>
    )
}

export default Modal;
