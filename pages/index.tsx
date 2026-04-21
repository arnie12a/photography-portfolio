import Head from "next/head"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { useState, useEffect } from "react"

// Importing images
import heroImage from "../public/places/dolomites/dolomites2.jpg"
import auroville from "../public/places/india/auroville.jpg"
import hanaleiBay from "../public/places/hawaii/hanaleiBay.jpg"
import oldTrafford from "../public/structures/oldTraffordStadium.jpg"
import chicagoSkyline from "../public/places/chicago/planetariumSkyline.jpg"
import napaliCoast from "../public/places/hawaii/napaliCoast.jpg"
import igoPrecious from "../public/places/chicago/ugoPrecious.jpg"
import goat from "../public/stories/nationalParks/goat.jpg"
import nature from "../public/places/hawaii/kauaiOcean.jpg"

// Add your favorite horizontal landscape photos here
const HERO_SLIDES = [
  heroImage,
  chicagoSkyline,
  oldTrafford,
  napaliCoast
]

const SLIDES = [...HERO_SLIDES, HERO_SLIDES[0]]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [currentPlace, setCurrentPlace] = useState(0)

  const places = [
    {
      title: "Hawaii",
      subtitle: "Kauai & O'ahu adventures",
      img: hanaleiBay,
      link: "/places/hawaii",
    },
    {
      title: "Chicago",
      subtitle: "The Windy City",
      img: chicagoSkyline,
      link: "/places/chicago",
    },
    {
      title: "India",
      subtitle: "Two months across India",
      img: auroville,
      link: "/places/india",
    },
    {
      title: "Dolomites",
      subtitle: "Italy’s jagged giants",
      img: heroImage,
      link: "/places/dolomites",
    },
    {
      title: "Madeira",
      subtitle: "Island of clouds",
      img: nature,
      link: "/places/madeira",
    },
  ]
  

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // When reaching the cloned slide, jump back to real slide 0
  useEffect(() => {
    if (currentSlide === SLIDES.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false) // turn OFF animation
        setCurrentSlide(0)

        // re-enable animation on next tick
        setTimeout(() => setIsTransitioning(true), 20)
      }, 1200) // match your transition duration

      return () => clearTimeout(timeout)
    }
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-6 md:px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-lg md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-stone-300 text-sm md:text-base">
          <Link href="/gallery" className="hover:text-white transition">GALLERY</Link>
          <Link href="/aboutme" className="hover:text-white transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-white transition">CONTACT</Link>

          <a
            href="https://www.instagram.com/arnavkarnikphotos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-stone-300 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full bg-stone-950/95 backdrop-blur 
          border-b border-stone-800 flex flex-col space-y-6 px-6 py-6 
          text-stone-300 text-lg z-10">

          <Link href="/gallery" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>
            GALLERY
          </Link>

          <Link href="/aboutme" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>

          <Link href="/contact" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>

          <a
            href="https://www.instagram.com/arnavkarnikphotos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
        </div>
      )}


      <main className="pt-[90px]">

{/* HERO SLIDER */}
<div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
  <div
    className={`flex h-full ${isTransitioning ? "transition-transform duration-[1200ms] ease-out" : ""}`}
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {SLIDES.map((img, index) => (
      <div key={index} className="relative w-full h-full flex-shrink-0">
        <Image
          src={img}
          alt={`Slide ${index}`}
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    ))}
  </div>
</div>

        {/* FULL-WIDTH GALLERY CTA — NO SPACE ABOVE */}
        {/* FULL-WIDTH GALLERY CTA — LARGE + SMOOTH FLOW */}
<div className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[95vh] overflow-hidden group">

{/* Background Image with slow zoom */}
<Image
  src={hanaleiBay}
  alt="Gallery Background"
  fill
  className="object-cover scale-110 transition-transform duration-[8000ms] group-hover:scale-[1.18]"
  placeholder="blur"
/>

{/* Deep cinematic gradient for readability */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

{/* Soft top fade to blend with hero slider */}
<div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-stone-950/60 to-transparent" />

{/* Content */}
<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 sm:px-16 lg:px-32 animate-fadeIn">
  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white drop-shadow-2xl tracking-wide mb-8">
    Explore my Gallery
  </h2>

  <p className="text-stone-200 text-lg sm:text-2xl max-w-3xl mb-10 opacity-90 leading-relaxed">
    Here is a collection of all my favorite photos from all my adventures. 
  </p>

  <Link
    href="/gallery"
    className="px-12 py-5 text-xl sm:text-2xl rounded-lg border border-white/40 
              bg-white/10 backdrop-blur-md text-white 
              hover:bg-white/20 hover:border-white/60 transition 
              tracking-wide shadow-2xl"
  >
    View My Favorite Photos →
  </Link>
</div>
</div>

      </main>




      {/* Grid Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">

       

        <GridItem
          title="Stories"
          imageSrc={auroville}
          link="https://arnavkarnik.substack.com"
        />

        <GridItem
          title="Portraits"
          imageSrc={igoPrecious}
          link="/portraits"
        />

        <GridItem
          title="Nature"
          imageSrc={nature}
          link="/nature"
        />

        <GridItem
          title="Animals"
          imageSrc={goat}
          link="/animals"
        />

      </div>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}

type GridItemProps = {
  title: string
  imageSrc: StaticImageData
  link: string
}

function GridItem({ title, imageSrc, link }: GridItemProps) {
  return (
    <Link href={link} className="group relative h-[250px] sm:h-[300px] lg:h-[350px] block rounded overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
      <div className="absolute inset-0 flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
    </Link>
  )
}
