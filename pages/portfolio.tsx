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
import kauaiOcean from "../public/landscape/kauaiOcean.jpg"
import theNarrows from "../public/landscape/theNarrows.jpg"
import waimeaCanyon from "../public/landscape/waimeaCanyon.jpg"
import zionCarsBackdrop from "../public/landscape/zionCarsBackdrop.jpg"
import bryceCanyon from "../public/landscape/bryceCanyon.jpg"
import auroville from "../public/landscape/auroville.jpg"


// People Images
import me from "../public/people/arnie.jpg"
import nathan from "../public/people/nathan.jpg"
import alondra from "../public/people/alondraPoipu.jpg"
import uiucBoys from "../public/people/uiucBoys.jpg"
import mayraAndSnehal from "../public/people/mayraAndSnehal.jpg"
import knipp from "../public/people/knipp.jpg"

// Animal Images
import sprinkles from "../public/animals/running.jpg"
import animal4 from "../public/animals/lion.jpg"
import animal5 from "../public/animals/monkey.jpg"
import buffalo from "../public/animals/buffalo.jpg"

// Structure Images
import bigBen from "../public/structures/bigBen.jpg"
import galleFort from "../public/structures/galleFort.jpg"
import gangtokStadium from "../public/structures/gangtokStadium.jpg"
import mumbai from "../public/structures/mumbai.jpg"
import mumbaiWater from "../public/structures/mumbaiWater.jpg"
import oldTrafford from "../public/structures/oldTrafford.jpg"
import pelling from "../public/structures/pelling.jpg"

const landscapeImages = [
  {
    image: theNarrows, 
    title: "Zion National Park: <i>The Narrows</i>",
    description: "Definitely my favorite hike I've been on. Traveling through & along the winding river with 1,000-2,000 foot canyons on each side was an awesome experience. I felt like every five minutes I was taking out my camera to capture something pretty.",
  },
  {
    image: auroville,
    title: "Auroville, India",
    description: "A town where men and women of all countries are able to live in peace and harmony, the Matrimandir sits here.",
  },
  {
    image: kauaiOcean, 
    title: "Ocean Shore in Princeville",
    description: "The most beautiful turquoise water.",
  },
  {
    image: waimeaCanyon, 
    title: "Waimea Canyon",
    description: "Approximately 10 miles long and up to 3,000 feet deep, Waimea Canyon provides some breathtaking panoramic views.",
  },
  {
    image: zionCarsBackdrop, 
    title: "Zion National Park",
    description: "Felt like I was right out of the movie Cars.",
  },
  {
    image: bryceCanyon, 
    title: "Bryce Canyon National Park",
    description: "Never saw a single Hoodoo before so seeing an entire landscape of Hoodoos was a lot to take in.",
  },
  
];

const peopleImages = [
  {
      image: me, 
      title: "<h1>Arnav Karnik</h1>",
      description: '<div className="text-center"><h3 className="text-3xl font-bold mb-4">Welcome to my Photography Portfolio.</h3><p className="text-lg text-gray-600">Here is a portfolio of my favorite photos. Shout out Nathan for taking this photo!</p></div>',
    },
    {
      image: nathan, 
      title: "Nathan Yoon",
      description: "Decided to make a visit to a local apple orchard to find the perfect apples for apple pie.",
    },
    {
      image: alondra, 
      title: "Alondra Guerrero Toledo",
      description: "On a morning stroll in Poipu, Kauai.",
    },
    {
      image: mayraAndSnehal, 
      title: "Snehal & Mayra",
      description: "Guess who was more excited to eat the birthday cake?",
    },
    {
      image: uiucBoys, 
      title: "Alvin, Vineet, & Knipp arguing about god knows what.",
      description: "",
    },
    {
      image: knipp, 
      title: "Knipp",
      description: "",
    },

];

const animalImages = [
    {
      image: sprinkles, 
      title: "Cute doggo",
      description: "Puppies are so full of energy! Happy Sprinkles found herself a home.",
    },
    {
      image: animal4, 
      title: "Lioness in Bhannerghatta National Park, India",
      description: "",
    },
    {
      image: buffalo,
      title: "Bison in Yala National Park, Sri Lanka",
      description: "With such scorching heat, the only way to stay cool is by taking a dip in the mud."
    },
    {
      image: animal5, 
      title: "Monkey at Nandi Hills",
      description: "Located just two hours from Bangalore, you will find yourself plenty of monkeys living life with a great view.",
    },
];

const structureImages = [
  {
    image: pelling,
    title: "Pelling",
    descritpion: "The city amongst the mountains."
  },
  {
    image: oldTrafford,
    title: "The Theatre of Dreams",
    descritpion: ""
  },
  {
    image: galleFort,
    title: "Galle Fort",
    descritpion: ""
  },
  {
    image: bigBen,
    title: "Big Ben",
    descritpion: ""
  },
  {
    image: mumbaiWater,
    title: "View from the Taj Hotel",
    descritpion: ""
  },
  {
    image: mumbai,
    title: "The Mumbai Skyline",
    description: ""
  },
  {
    image: gangtokStadium,
    title: "Soccer Stadium in Gangtok, Sikkim",
    descritpion: ""
  },
]


import { useRef } from "react"

const tabs = [
  {
    key: 'people',
    display: 'People'
  },
  {
    key: 'Nature',
    display: 'Nature'
  },
  {
    key: 'animals',
    display: 'Animals'
  }, 
  {
    key: 'structures',
    display: 'Structures'
  }
]

export default function Portfolio() {

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
        <Link href="/" className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90">
          Back to favorites
        </Link>

      </header>

      <main className="pt-[105px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {tabs.map((tab) => {
              return (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span className={classNames("uppercase text-base md:text-lg", selected ? 'text-white' : 'text-stone-600')}>
                      {tab.display}
                    </span>
                  )}
                </Tab>
              );
            })}
          </Tab.List>
            

            <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6 rounded">
              <Tab.Panel className="overflow-auto">
                <Masonry 
                  breakpointCols={2} 
                  className="flex gap-4" 
                  columnClassName=""
                >

                  {peopleImages.map((image, index) => {
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
                dynamicEl={peopleImages.map(image => ({
                  src: image.image.src, 
                  thumb: image.image.src,
                  subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                }))}
                />

              </Tab.Panel>
              <Tab.Panel className="overflow-auto rounded">
              <Masonry 
                  breakpointCols={2} 
                  className="flex gap-4" 
                  columnClassName=""
                >

                  {landscapeImages.map((image, index) => {
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
                dynamicEl={landscapeImages.map(image => ({
                  src: image.image.src, 
                  thumb: image.image.src,
                  subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                }))}
                />
              </Tab.Panel>
              <Tab.Panel className="overflow-auto rounded">
              <Masonry 
                  breakpointCols={2} 
                  className="flex gap-4" 
                  columnClassName=""
                  key={3}
                >

                  {animalImages.map((image, index) => {
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
                dynamicEl={animalImages.map(image => ({
                  src: image.image.src, 
                  thumb: image.image.src,
                  subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                }))}
                />
              </Tab.Panel>
              <Tab.Panel className="overflow-auto rounded">
              <Masonry 
                  breakpointCols={2} 
                  className="flex gap-4" 
                  columnClassName=""
                  key={3}
                >

                  {structureImages.map((image, index) => {
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
                dynamicEl={structureImages.map(image => ({
                  src: image.image.src, 
                  thumb: image.image.src,
                  subHtml: `<h4>${image.title}</h4><p>${image.description}</p>`,
                }))}
                />
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