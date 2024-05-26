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


// People Images
import lucasho from "../public/people/lucas.jpg"
import nathan from "../public/people/nathan.jpg"
import lucasjacopo from "../public/people/dumplingmaking.jpg"
import neeva from "../public/people/neeva.jpg"
import profilePic from "../public/people/arnie.jpg"


// Animal Images
import goat from "../public/animals/goat.jpg"
import hilton from "../public/animals/hilton.jpg"
import dotter from "../public/animals/dotter.jpg"
import elephants from "../public/animals/elephant.jpg"

// Structure Images
import londonBridge from "../public/structures/londonBridge.jpg"
import chicagoSkyline from "../public/structures/chicagoSkyline.jpg"

const favoriteImages = [
    {
        image: khanchenjunga, 
        title: "Khanchenjunga",
        description: '<div className="text-center"><p className="text-lg text-gray-700 mb-4">Standing at <b>28,169 feet</b>, Khanchenjunga is the third highest mountain in the world.</p><p className="text-lg text-gray-700 mb-4">It holds great cultural and environmental significance for the people in Sikkim, India.</p></div>',
    },
   
    {
        image: raigad,
        title: "Raigad Fort",
        description: "Raigad Fort, situated near Pune, was the mountain stronghold of the legendary Maratha king Chhatrapati Shivaji Maharaj.",
    },
    
    {
        image: smokeyMountainsSunset, 
        title: "Smokey Mountains National Park",
        description: "My favorite sunset I have ever captured. The trick I learned here is that the best views from sunset come 10-15 minutes after the sun is gone below the horizon.",
    },
    {
        image: lucasho, 
        title: "<a href='https://www.lucasleeho.com/' target='_blank'>Lucas Ho</a>",
        description: "A first-generation Taiwanese American filmmaker, food content creator, and artist scavenging for which recipe to cook next.",
    },
    {
        image: dotter,
        title: "Yala National Park, Sri Lanka",
        description: "Dotter peering into the distance.",
    },
    {
        image: hilton, 
        title: "Hilton",
        description: "Best way to spend the night after all the excusions in Gangtok is with this beautiful boy at the hotel.",
    },
    {
        image: chicagoSkyline,
        title: "Chicago Skyline",
        description: "Definitely my favorite way to see the city of Chicago"
    },
    {
        image: hanaleiBay, 
        title: "Hanelei Bay, Kauai",
        description: "By far my favorite place in Kauai.",
    },
    
    {
        image: kalalauLookout, 
        title: "Kalalau Valley Lookout",
        description: 'At 4,000 feet elevation, the valley and surrounding coast here have served as the backdrop to many films which the biggest being <i>"Jurassic Park"</i>',
    },
    {
        image: londonBridge,
        title: "View from Horizon 22",
        description: "My favorite place to see all the important places in London"
    },
    {
        image: neeva, 
        title: "Neeva",
        description: "",
    },
    
    {
        image: nathan, 
        title: "Nathan Yoon",
        description: "Decided to make a visit to a local apple orchard to find the perfect apples for apple pie.",
    },
    {
        image: lucasjacopo, 
        title: "Lucas & Jacopo",
        description: "Making dumplings is no easy feat. Thanks to these chefs, the dumplings turned our perfect and I couldn't stop devouring them ",
    },
    {
        image: goat, 
        title: "Mountain Goat",
        description: "Driving through Zion National Park and this guy wanted a photoshoot",
    },
    {
        image: elephants,
        title: "Yala National Park, Sri Lanka",
        description: "Elephant herd at sunset preparing for the night they have ahead. ",
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
                <Tab.Panel className="grid grid-cols-2 gap-4 p-4">
    {[
        { category: 'Animals', svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm6 4h-2v-4h2v4zm0-6h-2V7h2v6z"/>
            </svg>
        ) },
        { category: 'City', svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L2 12h3v7h6v-4h2v4h6v-7h3L12 2zm0 12h-2v2h-2v-2H6v-2h2V9h2v3h2v2zm2-2h-2v-2h2v2z"/>
            </svg>
        ) },
        { category: 'People', svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        ) },
        { category: 'Nature', svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2c2.21 0 4 1.79 4 4 0 .86-.28 1.65-.76 2.29C16.45 8.74 17 9.81 17 11c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.19.55-2.26 1.41-2.71C8.28 7.65 8 6.86 8 6c0-2.21 1.79-4 4-4zm0 18c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        ) }
    ].map(({ category, svg }) => (
        <Link 
            key={category} 
            href="/portfolio" 
            className="relative block p-4 bg-white border border-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
            style={{ minWidth: '100px', minHeight: '100px' }}
        >
            <div className="flex justify-center mb-2">
                {svg}
            </div>
            <span className="relative">{category}</span>
        </Link>
    ))}
</Tab.Panel>


                <Tab.Panel className="overflow-auto rounded">
                <div className="container mx-auto p-8 md:flex">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:h-auto">
                    <Image src={profilePic} alt="Your Picture" className="w-96 h-auto object-cover rounded pl-16" />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4">Arnav Karnik</h2>
                    <p>
                        I am an aspiring professional travel photographer. I love exploring new places and capturing their beauty. 
                        My portfolio showcases my favorite pictures I have taken on my many adventures. 
                        Looking forward to the many more and the stories I tell along the way.
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