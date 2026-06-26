
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
import seceda from "../public/places/dolomites/seceda.jpg"
import dotter from "../public/places/srilanka/dotter.jpg"
import hilton from "../public/places/india/hilton.jpg"
import napaliCoast from "../public/places/hawaii/napaliCoast.jpg"
import munnarHike from "../public/places/india/munnarHike.jpg"
import ugoPrecious from "../public/places/chicago/ugoPrecious.jpg"

const IMAGES = [
  hanaleiBay,
  kalalauLookout,
  seceda,
  dotter,
  hilton,
  napaliCoast,
  munnarHike,
  ugoPrecious
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
    <div
      key={img.src}
      className="relative w-full h-screen flex justify-center items-center overflow-hidden"
    >
      <Image
        src={img}
        alt="Photo"
        className="h-full w-auto object-contain rounded-sm cursor-pointer hover:opacity-80 transition"
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
