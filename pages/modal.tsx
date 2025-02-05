import React from 'react';

interface Hike {
    id: number;
    name: string;
    location: string;
    enjoyment: number;
    difficulty: number;
    description: string;
    detailedDescription: string;
    photo: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    hike: Hike | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, hike }) => {
    if (!isOpen || !hike) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-stone-900 rounded-lg p-6 max-w-lg w-full text-white overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{hike.name}</h2>
                <img
                    src={hike.photo}
                    alt={hike.name}
                    className="rounded-lg object-cover mb-4 w-full h-64"
                />
                <p className="text-gray-300">{hike.detailedDescription}</p>
                <button
                    onClick={onClose}
                    className="mt-6 bg-white text-stone-900 px-4 py-2 rounded-lg hover:bg-opacity-90"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
