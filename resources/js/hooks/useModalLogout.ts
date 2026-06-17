import { useState } from 'react';

const useModalLogout = () => {
    const [show, setShow] = useState(false);
    const onClose = () => setShow(false);
    const onOpen = () => setShow(true);
    const toggle = () => setShow((prev) => !prev);
    return {
        show,
        onClose,
        onOpen,
        toggle,
    };
};

export default useModalLogout;
