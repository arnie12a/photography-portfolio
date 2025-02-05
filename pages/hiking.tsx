import React, { useState } from 'react';
import Modal from './modal';
import Link from "next/link"


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
        name: 'South Kaibab Trail to Skeleton Point',
        location: 'Grand Canyon, Arizona',
        enjoyment: 8,
        difficulty: 8,
        description: 'Hiking into the Grand Canyon is no joke.',
        detailedDescription: `
            The hike on the South Kaibab trail to Skeleton Point is only 5.8 miles out and back, but my god, it took a toll on my body. 
            I remember dragging my feet at the end of the hike, begging for a bed to plop onto. But it was all worth it. 
            
            My favorite part of the hike was the overwhelming sense of scale—no matter how deep I ventured into the Grand Canyon, its vastness remained endless. 
            The canyon stretched beyond sight in every direction, with no visible end ahead, to the left, or to the right. 
            
            I look forward to being able to reach the very bottom and hiking rim to rim upon my return to the Grand Canyon!
        `,
        photo: '/landscape/grandCanyon.jpeg',
    },
    {
        id: 2,
        name: 'Cinque Torri + Hike to Rifugio Averau',
        location: "Cortina d'Ampezzo, Italy",
        enjoyment: 9,
        difficulty: 6,
        description: 'My favorite hike in the Dolomites.',
        detailedDescription: `
            The backdrop you get once you reach Rifugio Averau is jaw-dropping. Nothing can beat it. 
            So much so that now, when I log onto my work laptop, it's the first thing I see every day. 
            It makes me smile every time and reminds me why I love hiking so much. 
            
            I guess the fresh ham and cheese sandwich had a factor in my rating as well 🙂.
        `,
        photo: '/landscape/dolomites2.jpg',
    }
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
                <Link href="/" className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90">
                    Back to Portfolio
                </Link>
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
                                className="rounded-lg bg-stone-800 p-4 shadow-lg cursor-pointer "
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
