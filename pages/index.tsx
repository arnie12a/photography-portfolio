import Head from "next/head"
import Link from "next/link"
import {Tab} from "@headlessui/react"
import Masonry from 'react-masonry-css'
import classNames from 'classnames'
import Image from "next/image"

import type {LightGallery} from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Landscape Images
import hanaleiBay from "../public/landscape/hanaleiBay.jpg"
import kalalauLookout from "../public/landscape/kalalauLookout.jpg"
import smokeyMountainsSunset from "../public/landscape/smokeyMountainsSunset.jpg"
import khanchenjunga from "../public/landscape/khanchenjunga.jpg"
import raigad from "../public/landscape/raigad.jpg"
import dolomites2 from "../public/landscape/dolomites2.jpg"
import seceda from "../public/landscape/seceda.jpg"


// People Images
import lucasho from "../public/people/lucas.jpg"
import profilePic from "../public/people/arnie.jpg"
import nathanHalfMarathon from "../public/people/nathanHalfMarathon.jpg"


// Animal Images
import goat from "../public/animals/goat.jpg"
import hilton from "../public/animals/hilton.jpg"
import dotter from "../public/animals/dotter.jpg"
import elephants from "../public/animals/elephant.jpg"

// Structure Images
import londonBridge from "../public/structures/londonBridge.jpg"
import chicagoSkyline from "../public/structures/chicagoSkyline.jpg"
import auroville from "../public/landscape/auroville.jpg"


const favoriteImages = [
    {
      image: khanchenjunga,
      title: '<span class="text-2xl font-bold text-white">Khanchenjunga, India</span>',
      description: '<div class="text-center"><p class="text-lg text-gray-300 mb-4">Standing at <b>28,169 feet</b>, Khanchenjunga is the third highest mountain in the world.</p><p class="text-lg text-gray-300 mb-4">It holds great cultural and environmental significance for the people in Sikkim, India.</p></div>',
    },
    {
      image: raigad,
      title: '<span class="text-2xl font-bold text-white">Raigad Fort, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">Raigad Fort, situated near Pune, was the mountain stronghold of the legendary Maratha king Chhatrapati Shivaji Maharaj.</p>',
    },
    {
      image: smokeyMountainsSunset,
      title: '<span class="text-2xl font-bold text-white">Smokey Mountains National Park, USA</span>',
      description: '<p class="text-base text-gray-300 mt-2">My favorite sunset I have ever captured. The trick I learned here is that the best views from sunset come 10-15 minutes after the sun is gone below the horizon.</p>',
    },
    {
      image: lucasho,
      title: '<a href="https://www.lucasleeho.com/" target="_blank" class="text-2xl font-bold text-blue-400">Lucas Ho</a>',
      description: '<p class="text-base text-gray-300 mt-2">A first-generation Taiwanese American filmmaker, food content creator, and artist scavenging for which recipe to cook next.</p>',
    },
    
    {
      image: dotter,
      title: '<span class="text-2xl font-bold text-white">Yala National Park, Sri Lanka</span>',
      description: '<p class="text-base text-gray-300 mt-2">Dotter peering into the distance.</p>',
    },
    {
      image: hilton,
      title: '<span class="text-2xl font-bold text-white">Hilton</span>',
      description: '<p class="text-base text-gray-300 mt-2">Say hello to Hilton the hotel dog. What a fluffy and gentle boy.</p>',
    },
    {
      image: chicagoSkyline,
      title: '<span class="text-2xl font-bold text-white">Chicago Skyline</span>',
      description: '<p class="text-base text-gray-300 mt-2">Definitely my favorite way to see the city of Chicago.</p>',
    },
    {
      image: goat,
      title: '<span class="text-2xl font-bold text-white">Mountain Goat</span>',
      description: '<p class="text-base text-gray-300 mt-2">Driving through Zion National Park and this guy wanted a photoshoot.</p>',
    },
    {
      image: dolomites2,
      title: '<span class="text-2xl font-bold text-white">Rifugio Averau, Italy</span>',
      description: '<p class="text-base text-gray-300 mt-2">I cannot get enough of the panoramic views while hiking in the Dolomites.</p>',
    },
    {
      image: hanaleiBay,
      title: '<span class="text-2xl font-bold text-white">Hanelei Bay, Kauai</span>',
      description: '<p class="text-base text-gray-300 mt-2">By far my favorite place in Kauai. Loved the food and the relaxing vibes that the town had to offer. And ofcourse nothing beats the lush mountainous backdrop.</p>',
    },
    {
      image: kalalauLookout,
      title: '<span class="text-2xl font-bold text-white">Kalalau Valley Lookout</span>',
      description: '<p class="text-base text-gray-300 mt-2">At 4,000 feet elevation, the valley and surrounding coast here have served as the backdrop to many films which the biggest being <i>Jurassic Park</i>.</p>',
    },
    {
      image: nathanHalfMarathon,
      title: '<span class="text-2xl font-bold text-white">Nathan</span>',
      description: '<p class="text-base text-gray-300 mt-2">Just 15 second shy of his personal best for a half marathon in Madison.</p>',
    },
    {
      image: londonBridge,
      title: '<span class="text-2xl font-bold text-white">View from Horizon 22</span>',
      description: '<p class="text-base text-gray-300 mt-2">Got a glimpse of all of London from above.</p>',
    },
    
    {
      image: auroville,
      title: '<span class="text-2xl font-bold text-white">Auroville, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">A town where men and women of all countries are able to live in peace and harmony, the Matrimandir sits here.</p>'
    },
  
    {
      image: elephants,
      title: '<span class="text-2xl font-bold text-white">Yala National Park, Sri Lanka</span>',
      description: '<p class="text-base text-gray-300 mt-2">Elephant herd at sunset preparing for the night ahead.</p>',
    },
    {
      image: seceda,
      title: '<span class="text-2xl font-bold text-white">Seceda in the Dolomites</span>',
      description: '<p class="text-base text-gray-300 mt-2">One of the prettiest views I have ever seen.</p>',
    },
  ];
  


import { useRef } from "react"

const tabs = [
    {
        key: 'myfavorites',
        display: 'My Favorites'
    },
    {
        key: 'portfolio',
        display: 'Portfolio'
    },
    {
        key: 'aboutme',
        display: 'About Me'
    }
]

export default function TempIndex() {

    const lightboxRef = useRef<LightGallery | null>(null)

    return (
        <div className="h-full bg-stone-950 overflow-auto">
        <Head>
            <title>Arnav's Photography Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/camera.png" />
        </Head>

        <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
            <span className="uppercase text-lg font-large">
            Arnav Karnik Photography
            </span>
            

        </header>

        <main className="pt-[105px]">
            <div className="flex flex-col items-center h-full">
            <Tab.Group>
                <Tab.List className="flex items-center gap-8">
                {tabs.map((tab) => {
                    return <Tab key={tab.key} className="p-2">
                    {({selected}) => (
                    <span className={classNames("uppercase text-lg", selected ? 'text-white' : 'text-stone-600')}>
                        {tab.display}
                    </span>
                    )}
                </Tab>
                })
                }
                
                
                </Tab.List>
                

                <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6 rounded">
                <Tab.Panel className="overflow-auto">
                    <Masonry 
                    breakpointCols={2} 
                    className="flex gap-4" 
                    columnClassName=""
                    >

                    {favoriteImages.map((image, index) => {
                        return <div className="relative">
                        <Image
                        key={image.image.src}
                        src={image.image}
                        alt="placeholder"
                        className="my-4 hover:opacity-70 cursor-pointer rounded"
                        placeholder="blur"
                        
                        />
                        <div className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
                            onClick={() => {
                            lightboxRef.current?.openGallery(index);
                            }}
                        ></div>
                        </div>
                        
                    })}
                    </Masonry>

                    <LightGalleryComponent
                    onInit={(ref) => {
                    if (ref) {
                        lightboxRef.current = ref.instance
                    }
                    }}
                    download={false}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={favoriteImages.map(image => ({
                    src: image.image.src, 
                    thumb: image.image.src,
                    subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                    }))}
                    />

                </Tab.Panel>
                <Tab.Panel className="grid grid-cols-1 place-items-center">
                  <a href="/portfolio" className="flex items-center justify-center py-8 px-6 mb-6 min-w-[200px] bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7H3zm2 0a2 2 0 0 0-2-2h14a2 2 0 0 0-2 2H5zm4-2a2 2 0 0 1 4 0h4a2 2 0 0 1 2 2h-4a2 2 0 0 1-4 0H7a2 2 0 0 1 2-2z" />
                    </svg>
                    <span className="ml-4 text-lg font-bold">Portfolio</span>
                  </a>
                </Tab.Panel>







                <Tab.Panel className="overflow-auto rounded">
                <div className="container mx-auto p-8 md:flex">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:h-auto">
                    <Image src={profilePic} alt="Your Picture" className="w-96 h-auto object-cover rounded pl-16" />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4">My name is Arnav Karnik</h2>
                    <p>
                        
                        I am an aspiring travel photographer. I love exploring new places and capturing their beauty. 
                        My portfolio showcases my favorite landscape, portrait, and structure photos from these unqiue locations. 
                        I hope to improve my technique and my storytelling as I bring you along on my future adventures!
                    </p><br/>

                    <br/>
                    <div className="flex justify-center">
                        <a href="https://www.instagram.com/arnavkarnikphotos/" className="py-px pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="57" height="57" viewBox="0 0 48 48">
                            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                        </svg>
                        </a>
                        <br/>
                        <a href="mailto:arnavkarnikphotos@gmail.com" className="pt-2 pl-2">
                        <img src="email.svg" alt="email svg" className="w-11"/>
                        </a>
                    </div>
                    
                    </div>
                </div>

                </Tab.Panel>
                
                </Tab.Panels>
            </Tab.Group>
            </div>
        
        </main>

        <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
            <p>Arnav Karnik Photography</p>
        </footer>
        </div>
        
    )
}