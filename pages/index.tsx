import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState } from "react"

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

import parisHoops from "../public/places/france/parisHoops.jpg"
import oldTrafford from "../public/places/england/oldTrafford1.jpg"
import dolomites from "../public/places/dolomites/dolomites2.jpg"
import gangtokStadium from "../public/places/india/gangtokStadium.jpg"
import soccerPitch from "../public/places/india/soccerPitch.jpg"
import sikkimFirstSunrise from "../public/places/india/sikkimFirstSunrise.jpg"
import madeiraSoccerPitch from "../public/places/madeira/madeiraSoccerPitch.jpg"
import davidsNotebooks from "../public/places/mexico/davidNotebooks.jpg"
import highlandCow from "../public/places/scotland/highlandCow.jpg"
import elephants from "../public/places/srilanka/elephant.jpg"
import goat from "../public/stories/nationalParks/goat.jpg"
import meganAndrewRainier from "../public/stories/nationalParks/meganAndrewRainier.jpg"
import smokeyMountainsSunset from "../public/stories/nationalParks/smokeyMountainsSunset.jpg"

const IMAGES = [
  parisHoops,
  oldTrafford,
  kalalauLookout,
  dolomites,
  hanaleiBay,
  gangtokStadium,
  sikkimFirstSunrise,
  soccerPitch,
  madeiraSoccerPitch,
  davidsNotebooks,
  highlandCow,
  elephants,
  goat,
  meganAndrewRainier,
  seceda,
  dotter,
  hilton,
  smokeyMountainsSunset,
  ugoPrecious
]

export default function MainPage() {
  const lightboxRef = useRef<LightGallery | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-20 px-4 md:px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800">

        <div className="h-[90px] flex items-center justify-between">

          {/* TITLE */}
          <span className="uppercase text-lg md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
            Arnav Karnik Photography
          </span>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-stone-300 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-10 text-stone-300 text-base">

            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/stories" className="hover:text-white transition">Stories</Link>
            <Link href="/aboutme" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>

            {/* ICONS */}
            <div className="flex items-center space-x-6">

              {/* MAIL ICON */}
              <a
                href="mailto:arnav.n.karnik@gmail.com"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>
              </a>

              {/* INSTAGRAM ICON */}
              <a
                href="https://www.instagram.com/arnavkarnikphotos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </a>

              {/* LINKEDIN ICON */}
              <a
                href="https://www.linkedin.com/in/arnavkarnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.7c0-1.8-.1-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24h-4V8z"/>
                </svg>
              </a>

            </div>
          </nav>

        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 text-stone-300 text-base">
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/stories" className="hover:text-white transition">Stories</Link>
            <Link href="/aboutme" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-[110px] pb-20 w-full max-w-4xl mx-auto px-4 md:px-4">

        {/* ONE COLUMN GRID */}
        <div className="flex flex-col space-y-2 md:space-y-10">

          {IMAGES.map((img, index) => (
            <div
              key={img.src}
              className="relative w-full h-screen flex justify-center items-center overflow-hidden"
            >
              <Image
                src={img}
                alt="Photo"
                className="w-full h-auto object-contain max-h-screen rounded-sm cursor-pointer hover:opacity-80 transition"
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
