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

// People Images
import lucasho from "../public/people/lucas.jpg"
import profilePic from "../public/people/arnie.jpg"


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
      image: rainbow,
      title: '<span class="text-2xl font-bold text-white">Rainbow</span>',
      description: "<p class='text-base text-gray-300 mt-2'>What an absolute view from outside my parent's place</p>",
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
        key: 'aboutme',
        display: 'About Me'
    }
]

export default function TempIndex() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="h-full bg-white overflow-auto">
      <Head>
        <title>Arnav's Photography Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/camera.png" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-center items-center h-[90px] px-10 bg-white shadow-md">
        <span className="uppercase text-4xl font-bold tracking-wide text-gray-800">
          Arnav Karnik Photography
        </span>
        
      </header>



      <main className="pt-[105px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-8">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'uppercase text-lg tracking-wide',
                        selected ? 'text-gray-900 font-semibold' : 'text-gray-600'
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="h-full bg-gray-50 max-w-[1200px] w-full p-4 my-6 rounded shadow-md">
              {/* Image Gallery */}
              <Tab.Panel className="overflow-auto">
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {favoriteImages.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image.image}
                        alt="placeholder"
                        className="w-full h-auto hover:opacity-80 cursor-pointer"
                        placeholder="blur"
                      />
                      <div
                        className="absolute w-full h-full inset-0 bg-transparent hover:bg-black hover:bg-opacity-10 cursor-pointer"
                        onClick={() => {
                          lightboxRef.current?.openGallery(index);
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  download={false}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={favoriteImages.map((image) => ({
                    src: image.image.src,
                    thumb: image.image.src,
                    subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                  }))}
                />
              </Tab.Panel>

              {/* About Section */}
              <Tab.Panel className="overflow-auto rounded">
                <div className="container mx-auto p-8 md:flex">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <Image
                      src={profilePic}
                      alt="Your Picture"
                      className="w-96 h-auto object-cover rounded pl-16"
                    />
                  </div>

                  <div className="md:w-1/2 md:pl-8 text-gray-800">
                    <h2 className="text-3xl font-bold mb-4">My name is Arnav Karnik</h2>
                    <p className="text-lg leading-relaxed">
                      I am an aspiring travel photographer. I love exploring new places and
                      capturing their beauty. My portfolio showcases my favorite landscape,
                      portrait, and structure photos from these unique locations. I hope to improve
                      my technique and my storytelling as I bring you along on my future
                      adventures!
                    </p>
                    <div className="flex justify-start mt-4">
                      <a
                        href="https://www.instagram.com/arnavkarnikphotos/"
                        className="py-1 pr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          {/* Instagram SVG */}
                        </svg>
                      </a>
                      <a
                        href="mailto:arnavkarnikphotos@gmail.com"
                        className="pt-1 pl-2"
                      >
                        <img src="email.svg" alt="email svg" className="w-10" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium bg-white shadow-md">
        <p className="text-gray-700">Arnav Karnik Photography</p>
      </footer>
    </div>
  );
}
