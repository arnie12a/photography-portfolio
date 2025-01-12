import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface Hike {
    id: number;
    name: string;
    location: string;
    enjoyment: number; // Rating from 1-10
    difficulty: number; // Rating from 1-10
    description: string;
    photo: string; // Path to the photo
}

const hikes: Hike[] = [
    {
        id: 1,
        name: 'Tre Cime di Lavaredo',
        location: 'Dolomites, Italy',
        enjoyment: 9,
        difficulty: 7,
        description:
            'A stunning loop hike in the Dolomites featuring breathtaking views of jagged peaks and pristine alpine lakes.',
        photo: '/images/tre-cime.jpg',
    },
    {
        id: 2,
        name: 'Valley of Flowers',
        location: 'India',
        enjoyment: 8,
        difficulty: 6,
        description:
            'A serene hike through a UNESCO World Heritage site filled with vibrant flowers and majestic landscapes.',
        photo: '/images/valley-of-flowers.jpg',
    },
    {
        id: 3,
        name: 'Kalalau Trail',
        location: 'Kauai, Hawaii',
        enjoyment: 10,
        difficulty: 9,
        description:
            'An epic trail along the Na Pali Coast offering jaw-dropping ocean views and lush tropical scenery.',
        photo: '/images/kalalau-trail.jpg',
    },
    {
        id: 4,
        name: 'Bright Angel Trail',
        location: 'Grand Canyon, USA',
        enjoyment: 9,
        difficulty: 8,
        description:
            'A classic hike descending into the Grand Canyon with unparalleled views of the canyon walls.',
        photo: '/images/bright-angel.jpg',
    },
    // Add more hikes as needed
];

export default function Hiking() {
    const [filters, setFilters] = useState({ enjoyment: 0, difficulty: 0 });

    const filteredHikes = hikes.filter(
        (hike) =>
            hike.enjoyment >= filters.enjoyment &&
            hike.difficulty >= filters.difficulty
    );

    return (
        <div className="h-full bg-stone-950 overflow-auto">
            <Head>
                <title>Arnav Karnik Photography</title>
                <meta name="description" content="Blog post about hiking adventures" />
                <link rel="icon" href="/camera.png" />
            </Head>

            <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
                <span className="uppercase text-lg font-large text-white">
                    Arnav Karnik Photography
                </span>
                <Link
                    href="/"
                    className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
                >
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
                                className="rounded-lg bg-stone-800 p-4 shadow-lg"
                            >
                                <Image
                                    src={hike.photo}
                                    alt={hike.name}
                                    width={500}
                                    height={300}
                                    className="rounded-lg object-cover mb-4"
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

            <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium text-white">
                <p>Arnav Karnik Photography</p>
            </footer>
        </div>
    );
}
