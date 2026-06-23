// import Head from "next/head"
// import Link from "next/link"
// import Image, { StaticImageData } from "next/image"
// import { useState } from "react"

// // Importing images
// import heroImage from "../public/places/dolomites/dolomites2.jpg"
// import auroville from "../public/places/india/auroville.jpg"
// import hanaleiBay from "../public/places/hawaii/hanaleiBay.jpg"
// import oldTrafford from "../public/structures/oldTraffordStadium.jpg"
// import chicagoSkyline from "../public/places/chicago/planetariumSkyline.jpg"
// import napaliCoast from "../public/places/hawaii/napaliCoast.jpg"
// import nature from "../public/places/hawaii/kauaiOcean.jpg"
// import kalalauLookout from "../public/places/hawaii/kalalauLookout.jpg"

// const SLIDES = [
//   heroImage,
//   chicagoSkyline,
//   kalalauLookout,
//   oldTrafford,
//   napaliCoast,
//   auroville,
//   nature,
//   hanaleiBay,
// ]

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [index, setIndex] = useState(0)

//   const next = () => setIndex((prev) => (prev + 1) % SLIDES.length)
//   const prev = () =>
//     setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)

//   const current = SLIDES[index]
//   const nextImg = SLIDES[(index + 1) % SLIDES.length]

//   const isVertical = (img: StaticImageData) => img.height > img.width

//   return (
//     <div className="min-h-screen bg-stone-950 text-stone-200">
//       <Head>
//         <title>Arnav Karnik Photography</title>
//         <meta name="description" content="Photography portfolio by Arnav Karnik." />
//         <link rel="icon" href="/camera.png" />
//       </Head>

//       {/* HEADER */}
//       <header className="fixed top-0 w-full z-20 h-[90px] px-6 md:px-12 
//         bg-stone-950/80 backdrop-blur border-b border-stone-800 
//         flex items-center justify-between">

//         <span className="uppercase text-lg md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
//           Arnav Karnik Photography
//         </span>

//         <nav className="hidden md:flex items-center space-x-10 text-stone-300 text-base">
//           <Link href="/portraits" className="hover:text-white transition">PORTRAITS</Link>
//           <Link href="/nature" className="hover:text-white transition">NATURE</Link>
//           <Link href="/sports" className="hover:text-white transition">SPORTS</Link>
//           <Link href="/aboutme" className="hover:text-white transition">ABOUT</Link>
//           <Link href="/contact" className="hover:text-white transition">CONTACT</Link>
//         </nav>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-stone-300 hover:text-white transition"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none"
//             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
//             className="w-8 h-8">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </header>

//       <main className="pt-[90px]">

//         {/* SLIDER */}
//         <div className="relative w-full h-[85vh] overflow-hidden flex">

//           {/* MAIN IMAGE (2/3 width) */}
//           <div className="w-2/3 h-full relative bg-black">
//             <Image
//               src={current}
//               alt="Main slide"
//               fill
//               className={isVertical(current) ? "object-contain" : "object-cover"}
//               placeholder="blur"
//             />
//             <div className="absolute inset-0 bg-black/30" />
//           </div>

//           {/* PREVIEW IMAGE (1/3 width) */}
//           <div className="w-1/3 h-full relative bg-black">
//             <Image
//               src={nextImg}
//               alt="Next preview"
//               fill
//               className={isVertical(nextImg) ? "object-contain" : "object-cover"}
//               placeholder="blur"
//             />
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           {/* LEFT BUTTON */}
//           <button
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 
//               bg-black/40 hover:bg-black/60 text-white p-3 rounded-full 
//               transition z-20"
//           >
//             ‹
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 
//               bg-black/40 hover:bg-black/60 text-white p-3 rounded-full 
//               transition z-20"
//           >
//             ›
//           </button>
//         </div>

//       </main>

//       {/* FOOTER */}
//       <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
//         Arnav Karnik Photography
//       </footer>
//     </div>
//   )
// }

// type GridItemProps = {
//   title: string
//   imageSrc: StaticImageData
//   link: string
// }

// function GridItem({ title, imageSrc, link }: GridItemProps) {
//   return (
//     <Link href={link} className="group relative h-[250px] sm:h-[300px] lg:h-[350px] block rounded overflow-hidden">
//       <Image
//         src={imageSrc}
//         alt={title}
//         fill
//         className="object-cover transition-transform duration-300 group-hover:scale-105"
//         placeholder="blur"
//       />
//       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
//       <div className="absolute inset-0 flex justify-center items-center">
//         <h2 className="text-2xl font-semibold text-white">{title}</h2>
//       </div>
//     </Link>
//   )
// }
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"

import type { LightGallery } from "lightgallery/lightgallery"
import LightGalleryComponent from "lightgallery/react"

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

// Import your images
import hanaleiBay from "../public/places/hawaii/hanaleiBay.jpg"
import kalalauLookout from "../public/places/hawaii/kalalauLookout.jpg"
import khanchenjunga from "../public/places/india/khanchenjunga.jpg"
import raigad from "../public/places/india/raigad.jpg"
import seceda from "../public/places/dolomites/seceda.jpg"
import dotter from "../public/places/srilanka/dotter.jpg"
import hilton from "../public/places/india/hilton.jpg"
import munnarFlower from "../public/places/india/munnarFlower.jpg"
import napaliCoast from "../public/places/hawaii/napaliCoast.jpg"
import munnarHike from "../public/places/india/munnarHike.jpg"
import kauaiOcean from "../public/places/hawaii/kauaiOcean.jpg"

const IMAGES = [
  hanaleiBay,
  kalalauLookout,
  khanchenjunga,
  raigad,
  seceda,
  dotter,
  hilton,
  munnarFlower,
  napaliCoast,
  munnarHike,
  kauaiOcean,
]

export default function MainPage() {
  const [travelOpen, setTravelOpen] = useState(false)
  const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        {/* NAVIGATION TABS */}
        <nav className="hidden md:flex items-center space-x-10 text-stone-300 text-base">

          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>

          <Link href="/stories" className="hover:text-white transition">
            Stories
          </Link>

          
          <Link href="/aboutme" className="hover:text-white transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-[110px] pb-20 w-full max-w-4xl mx-auto px-4">

        {/* ONE COLUMN GRID */}
        <div className="flex flex-col space-y-10">

          {IMAGES.map((img, index) => (
            <div key={img.src} className="relative w-full">
              <Image
                src={img}
                alt="Photo"
                className="rounded-sm cursor-pointer hover:opacity-80 transition"
                placeholder="blur"
                onClick={() => lightboxRef.current?.openGallery(index)}
              />
            </div>
          ))}

        </div>

        {/* LIGHTBOX */}
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) lightboxRef.current = ref.instance
          }}
          download={false}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={IMAGES.map((img) => ({
            src: img.src,
            thumb: img.src,
            subHtml: "",
          }))}
        />
      </main>

      {/* FOOTER */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
