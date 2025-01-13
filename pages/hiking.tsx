import React, { useState } from 'react';
import Modal from './modal';

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

const hikes: Hike[] = [
    {
        id: 1,
        name: 'Tre Cime di Lavaredo',
        location: 'Dolomites, Italy',
        enjoyment: 9,
        difficulty: 7,
        description: 'A stunning loop hike in the Dolomites.',
        detailedDescription:
            'Tre Cime di Lavaredo is one of the most iconic hikes in the Dolomites. The loop trail offers incredible views of jagged peaks, pristine alpine lakes, and scenic valleys. Perfect for photography enthusiasts and adventurers alike. Expect moderate difficulty with some rocky paths.',
        photo: '/images/tre-cime.jpg',
    },
    // Add more hikes here
];

export default function Hiking() {
    const [filters, setFilters] = useState({ enjoyment: 0, difficulty: 0 });
    const [selectedHike, setSelectedHike] = useState<Hike | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredHikes = hikes.filter(
        (hike) =>
            hike.enjoyment >= filters.enjoyment &&
            hike.difficulty >= filters.difficulty
    );

    const openModal = (hike: Hike) => {
        setSelectedHike(hike);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedHike(null);
        setIsModalOpen(false);
    };

    return (
        <div className="h-full bg-stone-950 overflow-auto">
            <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
                <span className="uppercase text-lg font-large text-white">
                    Hiking Adventures
                </span>
            </header>

            <main className="pt-[105px]">
                <div className="container mx-auto px-4 py-8 text-white">
                    <h1 className="text-3xl font-bold mb-6 text-center">Hiking Adventures</h1>
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div>
                            <label className="block mb-2">Minimum Enjoyment:</label>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={filters.enjoyment}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        enjoyment: Number(e.target.value),
                                    })
                                }
                                className="w-full"
                            />
                            <p>{filters.enjoyment}</p>
                        </div>
                        <div>
                            <label className="block mb-2">Minimum Difficulty:</label>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={filters.difficulty}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        difficulty: Number(e.target.value),
                                    })
                                }
                                className="w-full"
                            />
                            <p>{filters.difficulty}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredHikes.map((hike) => (
                            <div
                                key={hike.id}
                                onClick={() => openModal(hike)}
                                className="rounded-lg bg-stone-800 p-4 shadow-lg cursor-pointer"
                            >
                                <img
                                    src={hike.photo}
                                    alt={hike.name}
                                    className="rounded-lg object-cover mb-4 w-full h-64"
                                />
                                <h2 className="text-xl font-bold">{hike.name}</h2>
                                <p className="text-sm text-gray-400">{hike.location}</p>
                                <p className="mt-2">{hike.description}</p>
                                <p className="mt-4">
                                    <strong>Enjoyment:</strong> {hike.enjoyment}/10
                                </p>
                                <p>
                                    <strong>Difficulty:</strong> {hike.difficulty}/10
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                hike={selectedHike}
            />

            <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium text-white">
                <p>Hiking Adventures</p>
            </footer>
        </div>
    );
}
