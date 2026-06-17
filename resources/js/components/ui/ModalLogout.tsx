import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';

type ModalLogoutProps = {
    show: boolean;
    onClose: () => void;
};

const ModalLogout: FC<ModalLogoutProps> = ({ onClose, show }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (
                modalRef.current &&
                !isLoading &&
                !modalRef.current.contains(e.target as Node)
            ) {
                onClose();
            }
        };
        window.addEventListener('mousedown', clickOutside);
        return () => window.removeEventListener('mousedown', clickOutside);
    }, [isLoading]);
    const handleLogout = () => {
        router.get(
            '/auth/logout',
            {},
            {
                onBefore: () => setIsLoading(true),
            },
        );
    };
    return (
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed z-9999 flex h-full w-full items-center justify-center bg-black/40"
                >
                    <div
                        ref={modalRef}
                        className="flex h-40 w-100 flex-col justify-between rounded-xl bg-white p-5"
                    >
                        <div>
                            <h1 className="text-xl font-bold">
                                Logout Account
                            </h1>
                            <p className="mt-2">
                                Are you sure you want to log out of your
                                account?
                            </p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <button
                                onClick={onClose}
                                disabled={isLoading}
                                className="cursor-pointer rounded-xl bg-gray-800 px-5 py-2 font-medium text-white transition duration-300 hover:bg-gray-700 disabled:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                disabled={isLoading}
                                className="cursor-pointer rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition duration-300 hover:bg-red-500 disabled:bg-red-400"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalLogout;
