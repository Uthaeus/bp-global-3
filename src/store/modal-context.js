import { createContext, useState } from "react";

export const ModalContext = createContext({
    modalOpen: false,
    openModal: () => {},
    closeModal: () => {}
});

export const ModalContextProvider = ({ children }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        console.log('close modal');
        setModalOpen(false);
    }

    const value = {
        modalOpen,
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}