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
import rioCelesteWaterfall from "../public/landscape/rioCelesteWaterfall.jpg"
import munnarFlower from "../public/landscape/munnarFlower.jpg"
import tsongmoLake from "../public/landscape/TsongmoLake.jpg"


// People Images
import me from "../public/people/arnie.jpg"
import nathan from "../public/people/nathan.jpg"
import uiucBoys from "../public/people/uiucBoys.jpg"
import mayraAndSnehal from "../public/people/mayraAndSnehal.jpg"
import knipp from "../public/people/knipp.jpg"
import vanessa from "../public/people/vanessa.jpg"
import lucas from "../public/people/lucas.jpg"

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
    title: '<span class="text-2xl font-bold text-white">Zion National Park: <i>The Narrows</i></span>',
    description: '<p class="text-base text-gray-300 mt-2">Definitely my favorite hike I\'ve been on. Traveling through & along the winding river with 1,000-2,000 foot canyons on each side was an awesome experience. I felt like every five minutes I was taking out my camera to capture something pretty.</p>',
  },
  {
    image: kauaiOcean,
    title: '<span class="text-2xl font-bold text-white">Ocean Shore in Princeville</span>',
    description: '<p class="text-base text-gray-300 mt-2">The most beautiful turquoise water.</p>',
  },
  {
    image: waimeaCanyon,
    title: '<span class="text-2xl font-bold text-white">Waimea Canyon</span>',
    description: '<p class="text-base text-gray-300 mt-2">Approximately 10 miles long and up to 3,000 feet deep, Waimea Canyon provides some breathtaking panoramic views.</p>',
  },
  {
    image: zionCarsBackdrop,
    title: '<span class="text-2xl font-bold text-white">Zion National Park</span>',
    description: '<p class="text-base text-gray-300 mt-2">Felt like I was right out of the movie Cars.</p>',
  },
  {
    image: bryceCanyon,
    title: '<span class="text-2xl font-bold text-white">Bryce Canyon National Park</span>',
    description: '<p class="text-base text-gray-300 mt-2">Never saw a single Hoodoo before so seeing an entire landscape of Hoodoos was a lot to take in.</p>',
  },
  {
    image: rioCelesteWaterfall,
    title: '<span class="text-2xl font-bold text-white">Rio Celeste Waterfall, Costa Rica</span>',
    description: '<p class="text-base text-gray-300 mt-2">The bluest water I have ever seen.</p>',
  },
  {
    image: munnarFlower,
    title: '<span class="text-2xl font-bold text-white">Spotted this beautiful flower on a hike in Munnar, India</span>',
    description: '<p class="text-base text-gray-300 mt-2"></p>',
  },
  {
    image: tsongmoLake,
    title: '<span class="text-2xl font-bold text-white">Tsongmo Lake, India</span>',
    description: '<p class="text-base text-gray-300 mt-2">This lake is located at an elevation of approximately 12,000 ft and was completely frozen over when we visited in the winter time.</p>',
  },
];


const peopleImages = [
  {
    image: me,
    title: '<h1 class="text-3xl font-bold text-white">Arnav Karnik</h1>',
    description: '<div class="text-center"><h3 class="text-3xl font-bold text-white mb-4">Welcome to my Photography Portfolio.</h3><p class="text-lg text-gray-300">Here is a portfolio of my favorite photos. Shout out Nathan for taking this photo!</p></div>',
  },
  {
    image: lucas,
    title: '<span class="text-2xl font-bold text-white">Lucas focusing on making the perfect dumpling</span>',
    description: '',
  },
  {
    image: mayraAndSnehal,
    title: '<span class="text-2xl font-bold text-white">Snehal & Mayra</span>',
    description: '<p class="text-base text-gray-300 mt-2">Guess who was more excited to eat the birthday cake?</p>',
  },
  {
    image: nathan,
    title: '<span class="text-2xl font-bold text-white">Nathan Yoon</span>',
    description: '<p class="text-base text-gray-300 mt-2">Decided to make a visit to a local apple orchard to find the perfect apples for apple pie.</p>',
  },
  {
    image: uiucBoys,
    title: '<span class="text-2xl font-bold text-white">Alvin, Vineet, & Knipp arguing about god knows what.</span>',
    description: '<p class="text-base text-gray-300 mt-2">Always bickering ...</p>',
  },
  {
    image: vanessa,
    title: '<span class="text-2xl font-bold text-white">Vanessa loves apples</span>',
    description: '',
  },
  {
    image: knipp,
    title: '<span class="text-2xl font-bold text-white">Knipp</span>',
    description: '<p class="text-base text-gray-300 mt-2">Unfortunately for Michael, this ball was sent straight into the bunker.</p>',
  },
];

const animalImages = [
  {
    image: sprinkles,
    title: '<span class="text-2xl font-bold text-white">Cute doggo</span>',
    description: '<p class="text-base text-gray-300 mt-2">Puppies are so full of energy! Happy Sprinkles found herself a home.</p>',
  },
  {
    image: animal4,
    title: '<span class="text-2xl font-bold text-white">Lioness in Bhannerghatta National Park, India</span>',
    description: '',
  },
  {
    image: buffalo,
    title: '<span class="text-2xl font-bold text-white">Bison in Yala National Park, Sri Lanka</span>',
    description: '<p class="text-base text-gray-300 mt-2">With such scorching heat, the only way to stay cool is by taking a dip in the mud.</p>',
  },
  {
    image: animal5,
    title: '<span class="text-2xl font-bold text-white">Monkey at Nandi Hills</span>',
    description: '<p class="text-base text-gray-300 mt-2">Located just two hours from Bangalore, you will find yourself plenty of monkeys living life with a great view.</p>',
  },
];

const structureImages = [
  {
    image: pelling,
    title: '<span class="text-2xl font-bold text-white">Pelling</span>',
    description: '<p class="text-base text-gray-300 mt-2">A small city in the foothills of Mount Khanchenjunga.</p>'
  },
  {
    image: oldTrafford,
    title: '<h3 class="text-2xl font-bold text-white">The Theatre of Dreams</h3>',
    description: '<p class="text-base text-gray-300 mt-2">My view inside Old Trafford when the Red Devils beat Sheffield United 4-2</p>'
  },
  {
    image: galleFort,
    title: '<span class="text-2xl font-bold text-white">Galle Fort</span>',
    description: '<p class="text-base text-gray-300 mt-2">Explored around this fort which was bult by the Portuguese in the 16th century and extensively fortified by the Dutch in the 17th century.</p>'
  },
  {
    image: auroville,
    title: '<span class="text-2xl font-bold text-white">Auroville, India</span>',
    description: '<p class="text-base text-gray-300 mt-2">A town where men and women of all countries are able to live in peace and harmony, the Matrimandir sits here.</p>'
  },
  {
    image: bigBen,
    title: '<span class="text-2xl font-bold text-white">Big Ben</span>',
    description: '<p class="text-base text-gray-300 mt-2">What an iconic clock tower</p>'
  },
  {
    image: mumbaiWater,
    title: '<span class="text-2xl font-bold text-white">View from the Taj Hotel</span>',
    description: '<p class="text-base text-gray-300 mt-2">Look at all those boats and oil rigs.</p>'
  },
  {
    image: mumbai,
    title: '<span class="text-2xl font-bold text-white">The Mumbai Skyline</span>',
    description: '<p class="text-base text-gray-300 mt-2">Took in the sunset on Marine Drive.</p>'
  },
  {
    image: gangtokStadium,
    title: '<span class="text-2xl font-bold text-white">Soccer Stadium in Gangtok, Sikkim</span>',
    description: '<p class="text-base text-gray-300 mt-2">The field was full of people from sun up to sun down. So you can definitely say that soccer is huge in Sikkim.</p>'
  },
];




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
          <Tab.List className="flex flex-row md:flex-row items-center gap-4 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map((tab) => (
              <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span className={classNames("uppercase text-base md:text-lg", selected ? 'text-white' : 'text-stone-600')}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
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