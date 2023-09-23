"use client";

import ReactConfetti from "react-confetti";

import { create } from "zustand";

type ConfettiStore = {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
};

export const useConfettiStore = create<ConfettiStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
}));

export const ConfettiProvider = () => {
    const confetti = useConfettiStore();

    if (!confetti.isOpen) return null;

    return (
        <ReactConfetti
            className="pointer-events-none z-[100]"
            numberOfPieces={500}
            recycle={false}
            onConfettiComplete={() => {
                confetti.onClose();
            }}
        />
    )
}