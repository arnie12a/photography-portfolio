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
import dolomitesImg from "../public/places/dolomites/dolomites2.jpg"
import indiaImg from "../public/places/india/mumbaiSkyline.jpg"
import hawaiiImg from "../public/places/hawaii/hanaleiBay.jpg"
import chicagoImg from "../public/places/chicago/chicagoSkyline.jpg"
import madeira from "../public/places/madeira/clockTower.jpg"

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
        <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[60vh] mt-0 mb-0 overflow-hidden">

          <Image
            src={hanaleiBay}
            alt="Gallery Background"
            fill
            className="object-cover"
            placeholder="blur"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 sm:px-16 lg:px-32">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg mb-6">
              Explore the Gallery
            </h2>

            <Link
              href="/gallery"
              className="px-8 py-4 text-lg sm:text-xl rounded-lg border border-white/40 
                        bg-white/10 backdrop-blur-md text-white 
                        hover:bg-white/20 hover:border-white/60 transition 
                        tracking-wide shadow-lg"
            >
              View My Favorite Photos →
            </Link>
          </div>
        </div>

      </main>
{/* 🌍 PLACES CAROUSEL */}
<section className="w-full py-24 bg-stone-950">

  {/* Carousel Container */}
  <div className="relative max-w-4xl mx-auto px-6">

    {/* Left Arrow */}
    <button
      onClick={() => setCurrentPlace((prev) => (prev === 0 ? places.length - 1 : prev - 1))}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                 bg-black/50 hover:bg-black/70 text-white
                 p-4 sm:p-5 rounded-full backdrop-blur-md
                 shadow-lg transition"
    >
      <span className="text-2xl sm:text-3xl font-bold">←</span>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => setCurrentPlace((prev) => (prev === places.length - 1 ? 0 : prev + 1))}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                 bg-black/50 hover:bg-black/70 text-white
                 p-4 sm:p-5 rounded-full backdrop-blur-md
                 shadow-lg transition"
    >
      <span className="text-2xl sm:text-3xl font-bold">→</span>
    </button>

    {/* Slide */}
    <Link
      href={places[currentPlace].link}
      className="block relative h-[450px] sm:h-[520px] lg:h-[580px]
                 rounded-xl overflow-hidden border border-stone-800
                 hover:border-stone-600 transition"
    >
      <Image
        src={places[currentPlace].img}
        alt={places[currentPlace].title}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-8 left-8">
        <h3 className="text-4xl font-semibold text-white drop-shadow-xl">
          {places[currentPlace].title}
        </h3>
        <p className="text-stone-300 text-base mt-2">
          {places[currentPlace].subtitle}
        </p>
      </div>
    </Link>
  </div>
</section>



      {/* Grid Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* <GridItem
          title="Places"
          imageSrc={oldTrafford}
          link="/places"
        /> */}

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
