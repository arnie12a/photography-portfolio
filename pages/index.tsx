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
import rainbow from "../public/landscape/rainbow.jpg"
import kauaiOcean from "../public/landscape/kauaiOcean.jpg"
import theNarrows from "../public/landscape/theNarrows.jpg"
import waimeaCanyon from "../public/landscape/waimeaCanyon.jpg"
import zionCarsBackdrop from "../public/landscape/zionCarsBackdrop.jpg"
import bryceCanyon from "../public/landscape/bryceCanyon.jpg"
import rioCelesteWaterfall from "../public/landscape/rioCelesteWaterfall.jpg"
import munnarFlower from "../public/landscape/munnarFlower.jpg"
import napaliCoast from "../public/landscape/napaliCoast.jpg"
import munnarHike from "../public/landscape/munnarHike.jpg"
import emeraldLake from "../public/landscape/emeraldLake.png"
import betweenZionAndBryce from "../public/landscape/betweenZionAndBryceCanyon.jpg"
import munnarTeaHike from "../public/landscape/munnarTeaPlantationHike.jpg"
import sinhagad from "../public/landscape/sinhagadHike.jpg"
import fanalForest from "../public/landscape/fanelForest.jpg"


// People Images
import profilePic from "../public/people/arnie.jpg"
import knif from "../public/people/knif.jpg"
import nathanBridge from "../public/people/nathanBridge.png"
import nihar from "../public/people/niharPellingFort.jpg"

// Animal Images
import goat from "../public/animals/goat.jpg"
import hilton from "../public/animals/hilton.jpg"
import dotter from "../public/animals/dotter.jpg"
import elephants from "../public/animals/elephant.jpg"
import sprinkles from "../public/animals/running.jpg"
import buffalo from "../public/animals/buffalo.jpg"
import elephant from "../public/animals/closeElephant.jpg"
import salsa from "../public/animals/salsa2.jpg"
import highlandCow from "../public/animals/highlandCow.jpg"

// Structure Images
import londonBridge from "../public/structures/londonBridge.jpg"
import chicagoSkyline from "../public/structures/chicagoSkyline.jpg"
import auroville from "../public/landscape/auroville.jpg"
import gangtokStadium from "../public/structures/gangtokStadium.jpg"
import pelling from "../public/structures/pelling.jpg"
import monteserrat from "../public/structures/monteserrat.jpg"
import outsideSagradaFamilia from "../public/structures/sagradaFamiliaOutside.jpg"
import oldTrafford from "../public/structures/oldTraffordStadium.jpg"
import parisBasketball from "../public/structures/parisBasketball.jpg"
import madeiraFutbol from "../public/structures/madeiraFutbol.jpg"

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
      image: parisBasketball,
      title: '<span class="text-2xl font-bold text-white">Paris, France</span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
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
      image: oldTrafford,
      title: '<span class="text-2xl font-bold text-white">Old Trafford</span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    {
      image: goat,
      title: '<span class="text-2xl font-bold text-white">Mountain Goat</span>',
      description: '<p class="text-base text-gray-300 mt-2">Driving through Zion National Park and this guy wanted a photoshoot.</p>',
    },
   
    {
      image: emeraldLake,
      title: '<span class="text-2xl font-bold text-white">Hike to Emerald Lake</span>',
      description: '<p class="text-base text-gray-300 mt-2">Nathan taking in his surroundings.</p>',
    },
    {
      image: kauaiOcean,
      title: '<span class="text-2xl font-bold text-white">Ocean Shore in Princeville, Kauai</span>',
      description: '<p class="text-base text-gray-300 mt-2">The most beautiful turquoise water.</p>',
    },
    {
      image: waimeaCanyon,
      title: '<span class="text-2xl font-bold text-white">Waimea Canyon, Kauai</span>',
      description: '<p class="text-base text-gray-300 mt-2">Approximately 10 miles long and up to 3,000 feet deep, Waimea Canyon provides some breathtaking panoramic views.</p>',
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
      image: rainbow,
      title: '<span class="text-2xl font-bold text-white">Rainbow</span>',
      description: "<p class='text-base text-gray-300 mt-2'>What an absolute view from outside my parent's place.</p>",
    },
    {
      image: londonBridge,
      title: '<span class="text-2xl font-bold text-white">View from Horizon 22</span>',
      description: '<p class="text-base text-gray-300 mt-2">Got a glimpse of all of London from above.</p>',
    },
    {
      image: rioCelesteWaterfall,
      title: '<span class="text-2xl font-bold text-white">Rio Celeste Waterfall, Costa Rica</span>',
      description: '<p class="text-base text-gray-300 mt-2">The bluest water I have ever seen.</p>',
    },
    {
      image: highlandCow,
      title: '<span class="text-2xl font-bold text-white">Edinburgh, Scotland</span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    {
      image: nathanBridge,
      title: '<span class="text-2xl font-bold text-white">Nathan</span>',
      description: '<p class="text-base text-gray-300 mt-2">Taking in the view of the Rocky Mountains National Park.</p>',
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
      image: munnarTeaHike,
      title: '<span class="text-2xl font-bold text-white">Munnar Hike</span>',
      description: '<p class="text-base text-gray-300 mt-2">Trekked through this tea garden to get a panoramic view of the surrounding tea plantations.</p>',
    },
    {
      image: knif,
      title: '<span class="text-2xl font-bold text-white">Knif</span>',
      description: '<p class="text-base text-gray-300 mt-2">Had to take in a flick with the Hollywood sign in the background.</p>',
    },
    {
      image: munnarHike,
      title: '<span class="text-2xl font-bold text-white">Munnar Tea Plantation Hike</span>',
      description: '<p class="text-base text-gray-300 mt-2">Lush green tea plantations go on forever.</p>',
    },
    {
      image: seceda,
      title: '<span class="text-2xl font-bold text-white">Seceda in the Dolomites</span>',
      description: '<p class="text-base text-gray-300 mt-2">One of the prettiest views I have ever seen.</p>',
    },
    {
      image: sinhagad,
      title: '<span class="text-2xl font-bold text-white">View from Sinhigad Fort.</span>',
      description: '<p class="text-base text-gray-300 mt-2">Golden hour hits different from the top of Pune.</p>',
    },
    {
      image: theNarrows,
      title: '<span class="text-2xl font-bold text-white">Zion National Park: <i>The Narrows</i></span>',
      description: '<p class="text-base text-gray-300 mt-2">Definitely my favorite hike I\'ve been on. Traveling through & along the winding river with 1,000-2,000 foot canyons on each side was an awesome experience. I felt like every five minutes I was taking out my camera to capture something pretty.</p>',
    },
    {
      image: sprinkles,
      title: '<span class="text-2xl font-bold text-white">Cute doggo</span>',
      description: '<p class="text-base text-gray-300 mt-2">Puppies are so full of energy! Happy Sprinkles found herself a home.</p>',
    },
    {
      image: betweenZionAndBryce,
      title: '<span class="text-2xl font-bold text-white">Nature in Utah</span>',
      description: '<p class="text-base text-gray-300 mt-2">Somewhere on the road between Zion and Bryce Canyon National Park.</p>',
    },
    {
      image: bryceCanyon,
      title: '<span class="text-2xl font-bold text-white">Bryce Canyon National Park, USA</span>',
      description: '<p class="text-base text-gray-300 mt-2">Never saw a single Hoodoo before so seeing an entire landscape of Hoodoos was a lot to take in.</p>',
    },
  
    {
      image: nihar,
      title: '<span class="text-2xl font-bold text-white">Nihar</span>',
      description: '<p class="text-base text-gray-300 mt-2">Peering into the mountainous surroundings.</p>',
    },
    {
      image: buffalo,
      title: '<span class="text-2xl font-bold text-white">Bison in Yala National Park, Sri Lanka</span>',
      description: '<p class="text-base text-gray-300 mt-2">With such scorching heat, the only way to stay cool is by taking a dip in the mud.</p>',
    },
    {
      image: outsideSagradaFamilia,
      title: '<span class="text-2xl font-bold text-white">Barcelona, Spain</span>',
      description: '<p class="text-base text-gray-300 mt-2">The view of Sagrada Familia from a far.</p>'
    },
 
    {
      image: monteserrat,
      title: '<span class="text-2xl font-bold text-white">Monteserrat</span>',
      description: '<p class="text-base text-gray-300 mt-2">You can find this gem 1.5 hours from Barcelona</p>'
    },
    {
      image: napaliCoast,
      title: '<span class="text-2xl font-bold text-white">Napali Coast</span>',
      description: '<p class="text-base text-gray-300 mt-2">Lush perfect green beauty.</p>',
    },
    {
      image: madeiraFutbol,
      title: '<span class="text-2xl font-bold text-white"></span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    
    {
      image: gangtokStadium,
      title: '<span class="text-2xl font-bold text-white">Soccer Stadium in Gangtok, Sikkim</span>',
      description: '<p class="text-base text-gray-300 mt-2">The field was full of people from sun up to sun down. Love seeing the beautiful game in India!</p>'
    },
    {
      image: zionCarsBackdrop,
      title: '<span class="text-2xl font-bold text-white">Zion National Park, USA</span>',
      description: '<p class="text-base text-gray-300 mt-2">Felt like I was right out of the movie Cars.</p>',
    },
    {
      image: munnarFlower,
      title: '<span class="text-2xl font-bold text-white">Munnar, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">The most beautiful flower through my lens.</p>',
    },
    {
      image: salsa,
      title: '<span class="text-2xl font-bold text-white">Salsa</span>',
      description: '<p class="text-base text-gray-300 mt-2">The most precious cat I have ever come across.</p>',
    },
    {
      image: fanalForest,
      title: '<span class="text-2xl font-bold text-white"></span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    
    {
      image: elephant,
      title: '<span class="text-2xl font-bold text-white">Yala National Park, Sri Lanka</span>',
      description: '<p class="text-base text-gray-300 mt-2">The leader of the herd making sure its safe to cross the road.</p>',
    },
    {
      image: pelling,
      title: '<span class="text-2xl font-bold text-white">Pelling, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">SUch a peaceful city full of monastaries and incredible views.</p>',
    },
  ];
  


import { useRef } from "react"

const tabs = [
    {
        key: 'prints',
        display: 'Prints'
    },
    {
        key: 'stories',
        display: 'Stories'
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
            <title>Arnav Photography Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/camera.png" />
        </Head>

        
        <header className="fixed top-0 w-full z-10 flex justify-center items-center h-[90px] px-10">
          <span className="uppercase text-3xl font-large">
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
                    >

                    {favoriteImages.map((image, index) => {
                        return <div className="relative" key={image.image.src}>
                        <Image
                        
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
                
                <Tab.Panel className="overflow-auto rounded">
                  <div className="container mx-auto p-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Stories</h2>
                    
                    <div className="text-center">
                      <Link
                        href="/blogPosts/manchesterUnited"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        View United
                      </Link>
                      <Link
                        href="/blogPosts/parisBasketball"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        View Paris
                      </Link>
                    </div>
                  </div>
                </Tab.Panel>






                <Tab.Panel className="overflow-auto rounded">
                <div className="container mx-auto p-8 md:flex">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:h-auto">
                    <Image src={profilePic} alt="Your Picture" className="w-96 h-auto object-cover rounded pl-16" />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4">My name is Arnav Karnik</h2>
                    <p>
                    I am a photographer who loves to capture meaningful moments. My passion lies in photographing the beauty of nature during my many adventures. 
                    My dream is to develop a side hustle traveling on expeditions and taking photos. I look forward to making this dream into a reality, discovering new places and continuing to tell stories through the lens.
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
