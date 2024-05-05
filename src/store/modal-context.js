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