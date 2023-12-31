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

import { useEffect } from "react"

// Images
import landscape1 from "../public/landscape/chicagoSkyline.jpg"
import landscape2 from "../public/landscape/grandCanyon.jpeg"
import landscape3 from "../public/landscape/hanaleiBay.jpg"
import landscape4 from "../public/landscape/kalalauLookout.jpg"
import landscape5 from "../public/landscape/kauaiOcean.jpg"
import landscape6 from "../public/landscape/napaliCoast.jpg"
import landscape7 from "../public/landscape/rioCelesteWaterfall.jpg"
import landscape8 from "../public/landscape/smokeyMountainsSunset.jpg"
import landscape9 from "../public/landscape/smokeyMountains.jpg"
import landscape10 from "../public/landscape/theNarrows.jpg"
import landscape11 from "../public/landscape/waimeaCanyon.jpg"
import landscape12 from "../public/landscape/zionSunset.jpg"
import landscape13 from "../public/landscape/zionCarsBackdrop.jpg"

import people1 from "../public/people/arnie.jpg"
import people3 from "../public/people/lucas.jpg"
import people4 from "../public/people/nathan.jpg"
import people5 from "../public/people/alondraPoipu.jpg"


import { useRef } from "react"

const tabs = [
  {
    key: 'all',
    display: 'All'
  },
  {
    key: 'landscapes',
    display: 'Landscapes'
  },
  {
    key: 'people',
    display: 'People'
  }
]
const landscapeImages = [
  {
    image: landscape1, 
    title: "Chicago Skyline",
    description: "The beauty of human development"
  },
  {
    image: landscape10, 
    title: "Zion National Park: <i>The Narrows</i>",
    description: "Favorite hike"
  },
  {
    image: landscape2, 
    title: "Grand Canyon National Park",
    description: "Hiked the South Kaibab Trail to Skeleton Point"
  },
  {
    image: landscape3, 
    title: "Hanelei Bay, Kauai",
    description: "My favorite place in Kauai"
  },
  {
    image: landscape4, 
    title: "Location: Kalalau Lookout",
    description: "Clear skies make for the best views here"
  },
  {
    image: landscape5, 
    title: "Ocean Shore in Princeville, Kauai",
    description: "Most beautiful turquoise water"
  },
  {
    image: landscape6, 
    title: "The Napali Coast",
    description: "What a stunning coastline showcasing natures sheer power"
  },
  {
    image: landscape7, 
    title: "Costa Rica: <i>Rio Celeste Waterfall</i>",
    description: "A chemical reaction allows for the baby blue water"
  },
  {
    image: landscape8, 
    title: "Smokey Mountains National Park Sunset",
    description: "Best sunset I have ever captured"
  },
  {
    image: landscape9, 
    title: "Smokey Mountains National Park",
    description: "Looks like the valleys extend forever"
  },
  {
    image: landscape11, 
    title: "Waimea Canyon State Park",
    description: "Photo By: Arnav Karnik"
  },
  {
    image: landscape12, 
    title: "Zion National Park Sunset",
    description: "Love looking at the glowing vivid orange cliffs"
  },
  {
    image: landscape13, 
    title: "Zion National Park",
    description: "Felt like I was in the movie Cars"
  },
  
]

const peopleImages = [
  {
    image: people1, 
    title: "Arnav Karnik",
    description: "Welcome to my Photography Portfolio."
  },
  {
    image: people3, 
    title: "Lucas",
    description: "Scavenging for which recipe to cook next"
  },
  {
    image: people5, 
    title: "Alondra",
    description: "On a morning stroll in Poipu"
  },
  {
    image: people4, 
    title: "Nathan",
    description: "Searching for apples to make apple pie"
  },
]

const images = [
  {
    image: people1, 
    title: "Arnav Karnik",
    description: "Welcome to my Photography Portfolio."
  },
  
  {
    image: landscape3, 
    title: "Hanelei Bay, Kauai",
    description: "My favorite place in Kauai"
  },
  {
    image: people5, 
    title: "Alondra",
    description: "On a morning stroll in Poipu"
  },
  {
    image: landscape4, 
    title: "Location: Kalalau Lookout",
    description: "Clear skies make for the best views here"
  },
  {
    image: landscape2, 
    title: "Grand Canyon National Park",
    description: "Hiked the South Kaibab Trail to Skeleton Point"
  },
  {
    image: landscape5, 
    title: "Ocean Shore in Princeville, Kauai",
    description: "Most beautiful turquoise water"
  },
  {
    image: landscape6, 
    title: "The Napali Coast",
    description: "What a stunning coastline showcasing natures sheer power"
  },
  {
    image: landscape8, 
    title: "Smokey Mountains National Park",
    description: "Best sunset I have ever captured"
  },
  
  {
    image: landscape11, 
    title: "Waimea Canyon State Park",
    description: "Photo By: Arnav Karnik"
  },
  {
    image: people3, 
    title: "Lucas",
    description: "Scavenging for which recipe to cook next"
  },
  {
    image: landscape10, 
    title: "Zion National Park: <i>The Narrows</i>",
    description: "Favorite hike"
  },
  {
    image: landscape7, 
    title: "Costa Rica: <i>Rio Celeste Waterfall</i>",
    description: "A chemical reaction allows for the baby blue water"
  },
  {
    image: people4, 
    title: "Nathan",
    description: "Searching for apples to make apple pie"
  },
  {
    image: landscape1, 
    title: "Chicago Skyline",
    description: "The beauty of human development"
  },
  {
    image: landscape9, 
    title: "Smokey Mountains National Park",
    description: "Looks like the valleys extend forever"
  },
  {
    image: landscape12, 
    title: "Zion National Park Sunset",
    description: "Love looking at the glowing vivid orange cliffs"
  },
  {
    image: landscape13, 
    title: "Zion National Park",
    description: "Felt like I was in the movie Cars"
  },
  
]

export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <div className="h-full bg-stone-950 overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Arnav Karnik Photography
        </span>
        <Link href="mailto:arnavkarnikphotos@gmail.com" className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90">
          Contact Me
        </Link>

      </header>

      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
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

                  {images.map((image, index) => {
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
                dynamicEl={images.map(image => ({
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