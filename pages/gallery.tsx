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

// places Images
import hanaleiBay from "../public/places/hawaii/hanaleiBay.jpg"
import kalalauLookout from "../public/places/hawaii/kalalauLookout.jpg"
import khanchenjunga from "../public/places/india/khanchenjunga.jpg"
import raigad from "../public/places/india/raigad.jpg"
import dolomites2 from "../public/places/dolomites/dolomites2.jpg"
import seceda from "../public/places/dolomites/seceda.jpg"
import rainbow from "../public/other/rainbow.jpg"
import kauaiOcean from "../public/places/hawaii/kauaiOcean.jpg"
import theNarrows from "../public/stories/nationalParks/theNarrows.jpg"
import waimeaCanyon from "../public/places/hawaii/waimeaCanyon.jpg"
import munnarFlower from "../public/places/india/munnarFlower.jpg"
import napaliCoast from "../public/places/hawaii/napaliCoast.jpg"
import munnarHike from "../public/places/india/munnarHike.jpg"
import betweenZionAndBryce from "../public/other/betweenZionAndBryceCanyon.jpg"
import munnarTeaHike from "../public/places/india/munnarTeaPlantationHike.jpg"
import sinhagad from "../public/places/india/sinhagadHike.jpg"
// import fanalForest from "../public/stories/europe2026/fanalForest.jpg"
import dolomitePeaks from "../public/places/dolomites/dolomites3.jpg"
// import fire from "../public/places/india/fire.jpg"
import meganAndrewRainier from "../public/stories/nationalParks/meganAndrewRainier.jpg"
import popocatepetl from "../public/stories/nationalParks/popocatepetl.jpg"

// People Images
import profilePic from "../public/people/arnie.jpg"
import knif from "../public/other/knif.jpg"
import nathanBridge from "../public/stories/nationalParks/nathanBridge.png"
import nihar from "../public/places/india/niharPellingFort.jpg"
import davidNotebook from "../public/other/davidNotebook.jpg"
import preciousUgo from "../public/places/chicago/ugoPrecious.jpg"

// Animal Images
import goat from "../public/stories/nationalParks/goat.jpg"
import hilton from "../public/places/india/hilton.jpg"
import dotter from "../public/places/srilanka/dotter.jpg"
import sprinkles from "../public/other/running.jpg"
import buffalo from "../public/places/srilanka/buffalo.jpg"
import elephant from "../public/places/srilanka/closeElephant.jpg"
import salsa from "../public/other/salsa2.jpg"
import highlandCow from "../public/stories/europe2026/highlandCow.jpg"

// Structure Images
import londonBridge from "../public/structures/londonBridge.jpg"
import chicagoSkyline from "../public/places/chicago/chicagoSkyline.jpg"
import auroville from "../public/places/india/auroville.jpg"
import gangtokStadium from "../public/places/india/gangtokStadium.jpg"
import pelling from "../public/structures/pelling.jpg"
import monteserrat from "../public/structures/monteserrat.jpg"
import outsideSagradaFamilia from "../public/structures/sagradaFamiliaOutside.jpg"
import oldTrafford from "../public/stories/europe2026/oldTrafford1.jpg"
import madeiraFutbol from "../public/structures/madeiraFutbol.jpg"
import washingtonMonument from "../public/other/washingtonMonument.jpg"

// Blog Post Cover Images
import hoopingInParis from "../public/stories/parisHoops/parisHoops.jpg"

const stories = [
  {
    title: "Hooping in Paris",
    preview:
      "The prettiest place I have played pickup at.",
    image: hoopingInParis,
    link: "/blogPosts/parisBasketball",
  },
  {
    title: "Portraits",
    preview:
      "Here are my favorite photos of people.",
    image: preciousUgo,
    link: "/blogPosts/portraits",
  },
  {
    title: "National Parks",
    preview:
      "Here are my photos from National Parks I have visited.",
    image: goat,
    link: "/blogPosts/nationalParks",
  },
 
];


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
      image: dotter,
      title: '<span class="text-2xl font-bold text-white">Yala National Park, Sri Lanka</span>',
      description: '<p class="text-base text-gray-300 mt-2">The dotter is a water bird with a long and slender neck. The dotter often spends a lot of its time submerged in water. So to dry its wings you can often find the bird perched on a rock or branch with its wings outstretched which is funny because that is exactly what I captured.</p>',
    },
    // {
    //   image: parisBasketball,
    //   title: '<span class="text-2xl font-bold text-white">Paris, France</span>',
    //   description: '<p class="text-base text-gray-300 mt-2">One of the prettiest outdoor basketball courts I have played on.</p>',
    // },
    {
      image: hilton,
      title: '<span class="text-2xl font-bold text-white">Hilton</span>',
      description: '<p class="text-base text-gray-300 mt-2">Say hello to Hilton the hotel dog. What a fluffy and gentle boy.</p>',
    },
    {
      image: chicagoSkyline,
      title: '<span class="text-2xl font-bold text-white">Chicago Skyline</span>',
      description: '<p class="text-base text-gray-300 mt-2">Definitely my favorite view of the city.</p>',
    },
    {
      image: oldTrafford,
      title: '<span class="text-2xl font-bold text-white">Old Trafford</span>',
      description: '<p class="text-base text-gray-300 mt-2">Took a stadium tour of the Theatre of Dreams. Such a beautiful place full of rich history.</p>',
    },
    {
      image: goat,
      title: '<span class="text-2xl font-bold text-white">Mountain Goat</span>',
      description: '<p class="text-base text-gray-300 mt-2">Driving through Zion National Park and this guy wanted a photoshoot.</p>',
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
      image: davidNotebook,
      title: '<span class="text-2xl font-bold text-white">Davids Notebooks</span>',
      description: '<p class="text-base text-gray-300 mt-2">Purchased some handmade and recycled notebooks from David in Mexico City.</p>',
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
      image: meganAndrewRainier,
      title: '<span class="text-2xl font-bold text-white">Megan & Andrew</span>',
      description: '<p class="text-base text-gray-300 mt-2">Taking in the view of the mountainous surroundings.</p>',
    },
    {
      image: highlandCow,
      title: '<span class="text-2xl font-bold text-white">Edinburgh, Scotland</span>',
      description: '<p class="text-base text-gray-300 mt-2">Highland cows munchin on grass.</p>',
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
      image: munnarTeaHike,
      title: '<span class="text-2xl font-bold text-white">Munnar, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">Trekked through this tea garden to get a panoramic view of the surrounding tea plantations.</p>',
    },
    {
      image: dolomitePeaks,
      title: '<span class="text-2xl font-bold text-white">Italian Dolomites Peaks</span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    {
      image: knif,
      title: '<span class="text-2xl font-bold text-white">Knif</span>',
      description: '<p class="text-base text-gray-300 mt-2">Had to take a flick of Ethan with the Hollywood sign in the background.</p>',
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
      image: popocatepetl,
      title: '<span class="text-2xl font-bold text-white">Popocatépetl</span>',
      description: '<p class="text-base text-gray-300 mt-2">Hiked 1.5 hours from Mexico City and saw the Smoking Volcano with my own eyes.</p>',
    },
    {
      image: sprinkles,
      title: '<span class="text-2xl font-bold text-white">Cute doggo</span>',
      description: '<p class="text-base text-gray-300 mt-2">Puppies are so full of energy! Happy Sprinkles found herself a home.</p>',
    },
    {
      image: munnarHike,
      title: '<span class="text-2xl font-bold text-white">Munnar Tea Plantation Hike</span>',
      description: '<p class="text-base text-gray-300 mt-2">Lush green tea plantations go on forever.</p>',
    },
    
    {
      image: betweenZionAndBryce,
      title: '<span class="text-2xl font-bold text-white">Nature in Utah</span>',
      description: '<p class="text-base text-gray-300 mt-2">Somewhere on the road between Zion and Bryce Canyon National Park.</p>',
    },
    
   
  
    {
      image: nihar,
      title: '<span class="text-2xl font-bold text-white">Nihar</span>',
      description: '<p class="text-base text-gray-300 mt-2">My Dad peering into the mountainous surroundings of Kanchenjunga.</p>',
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
    // { // for some reason it is not showing bye bye branch
    //   image: fire,
    //   title: '<span class="text-2xl font-bold text-white">Wildfire in Sikkim</span>',
    //   description: '<p class="text-base text-gray-300 mt-2">I had to take many steps back just because of the power of the fire.</p>',
    // },
    {
      image: napaliCoast,
      title: '<span class="text-2xl font-bold text-white">Napali Coast</span>',
      description: '<p class="text-base text-gray-300 mt-2">Lush perfect green beauty.</p>',
    },
    {
      image: madeiraFutbol,
      title: '<span class="text-2xl font-bold text-white">Madeira, Portugal</span>',
      description: '<p class="text-base text-gray-300 mt-2">While driving around the island, we came across this beautiful pitch.</p>',
    },
    
    {
      image: gangtokStadium,
      title: '<span class="text-2xl font-bold text-white">Soccer Stadium in Gangtok, Sikkim</span>',
      description: '<p class="text-base text-gray-300 mt-2">The field was full of people from sun up to sun down. Love seeing the beautiful game in India!</p>'
    },

    {
      image: munnarFlower,
      title: '<span class="text-2xl font-bold text-white">Munnar, India</span>',
      description: '<p class="text-base text-gray-300 mt-2">The most beautiful flower through my lens.</p>',
    },
    
    // {
    //   image: fanalForest,
    //   title: '<span class="text-2xl font-bold text-white"></span>',
    //   description: '<p class="text-base text-gray-300 mt-2"></p>',
    // },
    
    
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
    {
      image: washingtonMonument,
      title: '<span class="text-2xl font-bold text-white">Washington Monument</span>',
      description: '<p class="text-base text-gray-300 mt-2"></p>',
    },
    {
      image: salsa,
      title: '<span class="text-2xl font-bold text-white">Salsa</span>',
      description: '<p class="text-base text-gray-300 mt-2">The most precious cat I have ever come across.</p>',
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
    <div className="min-h-screen bg-stone-950 text-stone-200 overflow-auto">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Global Header (same as homepage) */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>


      <main className="pt-[110px] pb-20 w-full">
        {/* FULL-WIDTH MASONRY GRID */}
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="flex gap-6 w-full"
          >
            {favoriteImages.map((image, index) => (
              <div className="relative" key={image.image.src}>
                <Image
                  src={image.image}
                  alt={image.title}
                  className="my-4 hover:opacity-70 cursor-pointer rounded-lg"
                  placeholder="blur"
                />
                <div
                  className="absolute inset-0 bg-transparent hover:bg-black/10 cursor-pointer"
                  onClick={() => lightboxRef.current?.openGallery(index)}
                />
              </div>
            ))}
          </Masonry>

          {/* Lightbox */}
          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) lightboxRef.current = ref.instance
            }}
            download={false}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={favoriteImages.map((image) => ({
              src: image.image.src,
              thumb: image.image.src,
              subHtml: `<h5>${image.title}</h5><p>${image.description}</p>`,
            }))}
          />
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
