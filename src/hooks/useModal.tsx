import { useState } from "react";

const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
      setShowModal(false);
    };
    const handleShowModal = () => {
      setShowModal(true);
    };

    return {showModal, handleClose, handleShowModal}
}

export default useModal;