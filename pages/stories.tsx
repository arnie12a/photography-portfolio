import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Importing Font Awesome icon

export default function Stories() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="h-full bg-stone-950 overflow-auto">
            <Head>
                <title>Arnav's Photography Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/camera.png" />
            </Head>

            <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
                <span className="uppercase text-lg font-large text-white">
                    Arnav Karnik Photography
                </span>
                <Link href="/" className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90">
                    Back to favorites
                </Link>
            </header>

            <main className="pt-[105px]">
                <div className="flex flex-col items-center h-full">
                    <div
                        onClick={handleOpenModal}
                        className="mt-5 cursor-pointer rounded-3xl bg-slate-400 text-stone-900 px-6 py-4 hover:bg-opacity-90 shadow-lg flex items-center justify-center space-x-3 w-80 h-40"
                    >
                        <FaMapMarkerAlt className="text-red-500 text-2xl" />
                        <div>
                            <h2 className="text-xl font-semibold">India Trip</h2>
                            <p className="text-sm">Check out my favorite visits</p>
                        </div>
                    </div>
                </div>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <div className="bg-blue-50 rounded-lg p-8 w-3/4 max-w-3xl overflow-y-auto max-h-[80vh] text-black shadow-2xl">
                  <h2 className="text-2xl font-bold mb-6">India Blog Post</h2>
                  <div className="space-y-6">
                    <div className="text-lg">
                      <strong>India Trip</strong><br />
                      From Jan 2024 - Mar 2024, I had the privilege to explore all over India and Sri Lanka. I ventured through very different climates and landscapes ranging from the snowcap mountains in the Himalayan region of Sikkim, to the tea plantations in Munnar, and finally all the way to the pristine water and perfect sand beaches of Sri Lanka. I really got a dose of everything.
                    </div>
                    <div className="text-lg">
                      Growing up, my family and I visited India once every two years. But, we would only visit family, so my idea of India was basically the crowded and noisy streets of Mumbai. However, I knew that India had a lot more to offer, so after some extensive research, I decided to jot down a couple of places I would visit after I graduated from college.
                    </div>
                    <div className="text-lg">
                      Here are my thoughts about my trip…
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-lg">
                        <strong>The Most Beautiful?</strong><br />
                        <strong>Sikkim</strong><br />
                        Located on a thin strip of land between Nepal and Bhutan, Sikkim is home to the world’s third tallest mountain, Mount Kanchenjunga. The region is notable for its biodiversity, including alpine and subtropical climates along with its rich culture.
                        <br /><br />
                        On my visit, I had the privilege to explore three different cities: Darjeeling, Pelling, and Gangtok. Each had its own beauty, so here is a bit about each:
                        <br /><br />
                        <strong>Darjeeling</strong> is widely known for its tea, which is exported to places all over the globe. You may very well be sitting down at your dining table right now sipping some tea which is actually grown here. The highlights here include sunrise at Tiger Hill viewpoint where I got my first view of Mount Kanchenjunga, seeing Himalayan Mountaineering Institution, the zoo, and the tea plantations.
                        <br /><br />
                        Unfortunately for us, the clouds took over in Pelling. Typically the view of Kanchenjunga from here is the best of the few cities we visited which was a huge bummer. But, the small town did provide its beauty through its monasteries located at the very top of the foothills. The drives in Pelling also hit differently. The moment that hit me was when we were driving through the valleys of the mountains and at the top of the ridges are huts. And I am just thinking, how do these people get food, water, transport things, etc. Their way of life is completely different from mine. They essentially live in the wild. And this is something that I always experience when I come to India, that people from the other side of the globe live life in ways that you cannot even imagine. And there is definitely a beauty in that which I believe everyone should experience once in their lives.
                        <br /><br />
                        Then was Gangtok, the capital of Sikkim, which happened to be my favorite. An enormous city scattered throughout the ridge of a mountain. The only way to venture around is by climbing up and down or taking on the winding roads. My highlight was our adventure to Tsomgo Lake. On the way there we saw the absolute best view of Kanchenjunga. I still remember the first instant I saw it and the adrenaline that rushed through me. I can’t wait to return and hike up to the base camp of Kanchenjunga.
                      </div>
                      <div>
                        <img src="sikkim-image-url-1" alt="Darjeeling" className="w-full h-auto mb-4" />
                        <img src="sikkim-image-url-2" alt="Pelling" className="w-full h-auto mb-4" />
                        <img src="sikkim-image-url-3" alt="Gangtok" className="w-full h-auto mb-4" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-lg">
                        <strong>Miscellaneous Award?</strong><br />
                        <strong>Sri Lanka</strong><br />
                        Located just below India, Sri Lanka is a tropical paradise. My mom and I explored the southern region of the country which is very well known for its pristine beaches and wildlife. The highlight for me was learning photography tips from my tour driver at Yala National Park. The wildlife sanctuary is widely popular for its variety of wildlife and important conservation of Sri Lankan elephants, Sri Lankan leopards, and aquatic birds. Here are a couple of my favorite animals I was able to capture on the safari.
                        <br /><br />
                        And you cannot forget about the pristine beaches of Mirissa. Waking up to the waves hitting the sand and having Sri Lankan curries on a table right beside the ocean.
                      </div>
                      <div>
                        <img src="sri-lanka-image-url-1" alt="Yala National Park" className="w-full h-auto mb-4" />
                        <img src="sri-lanka-image-url-2" alt="Mirissa Beach" className="w-full h-auto mb-4" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-lg">
                        <strong>My Favorite?</strong><br />
                        <strong>Munnar</strong><br />
                        On the horizon and in every direction, all you see are tea plantations. Located in the southern state of Kerala, Munnar is a popular hill station known for its sprawling tea gardens, misty mountains, and pleasant climate. It is a paradise for trekkers and nature enthusiasts which is exactly why I had a great experience here.
                        <br /><br />
                        Never thought that beauty existed in India. Like the valleys of Kolukkumalia in Munnar are quite similar to the valleys you would see in Kauai. Makes you realize that everything is very similar all across the globe, but there are obviously little differences that are accounted for by biodiversity and evolution by location.
                      </div>
                      <div>
                        <img src="munnar-image-url-1" alt="Munnar Tea Plantations" className="w-full h-auto mb-4" />
                        <img src="munnar-image-url-2" alt="Kolukkumalia Valley" className="w-full h-auto mb-4" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-lg">
                        <strong>Historic Favorite?</strong><br />
                        <strong>Maharashtra</strong><br />
                        Learning about the history behind my family’s home state was a real eye-opener for me. When visiting the city of Pune, my dad and I visited two very prominent forts named Raigad and Sinhagad fort.
                        <br /><br />
                        <strong>Raigad Fort</strong>, situated in the Sahyadri mountain range of Maharashtra, served as the capital of the Maratha Empire and was the site of Chhatrapati Shivaji Maharaj's coronation in 1674.
                        <br /><br />
                        <strong>Sinhagad Fort</strong>, located near Pune, Maharashtra, is renowned for its strategic importance and the heroic 1647 battle led by Tanaji Malusare under Chhatrapati Shivaji Maharaj.
                      </div>
                      <div>
                        <img src="maharashtra-image-url-1" alt="Raigad Fort" className="w-full h-auto mb-4" />
                        <img src="maharashtra-image-url-2" alt="Sinhagad Fort" className="w-full h-auto mb-4" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="mt-6 rounded-3xl bg-red-500 text-white px-4 py-2 hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
              
              
            )}

            <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium text-white">
                <p>Arnav Karnik Photography</p>
            </footer>
        </div>
    );
}