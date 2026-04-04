import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Import your place images
import parisImg from "../public/places/france/parisBasketball.jpg"
import dolomitesImg from "../public/places/dolomites/dolomites2.jpg"
import indiaImg from "../public/places/india/mumbaiSkyline.jpg"
import sriLankaImg from "../public/places/srilanka/closeElephant.jpg"
import hawaiiImg from "../public/places/hawaii/hanaleiBay.jpg"
import madisonImg from "../public/places/madison/mendota.jpg"
import portugalImg from "../public/places/portugal/lisbon1.jpg"
import chicagoImg from "../public/places/chicago/chicagoSkyline.jpg"
import mexico from "../public/places/mexico/popocatepetl.jpg"
import madeira from "../public/places/madeira/clockTower.jpg"
import england from "../public/places/england/oldTrafford3.jpg"
import scotland from "../public/places/scotland/edinburghSunset.jpg"

export default function Places() {
  const places = [
    {
      title: "Hawaii",
      subtitle: "Here are photos from my adventures in Kauai and O'ahu.",
      img: hawaiiImg,
      link: "/places/hawaii",
    },
    {
      title: "Chicago",
      subtitle: "The Windy City, captured through my lens.",
      img: chicagoImg,
      link: "/places/chicago",
    },
    
    {
      title: "India",
      subtitle: "Check out my two month trip across India in 2024.",
      img: indiaImg,
      link: "/places/india",
    },
    
    {
      title: "Dolomites",
      subtitle: "Italy’s jagged giants at sunrise.",
      img: dolomitesImg,
      link: "/places/dolomites",
    },
    
    {
      title: "Madeira, Portugal",
      subtitle: "A stunning island with lush landscapes and vibrant culture.",
      img: madeira, // replace with Madeira image when ready
      link: "/places/madeira",
    },
    
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Places — Arnav Karnik Photography</title>
        <meta name="description" content="Places I've photographed" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
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

      <main className="pt-[110px] pb-20 w-full px-6 lg:px-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Places</h1>

        {/* Full-width grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, i) => (
            <Link
              key={i}
              href={place.link}
              className="group rounded-xl overflow-hidden bg-stone-900 
                border border-stone-800 hover:border-stone-600 transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={place.img}
                  alt={place.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <h4 className="text-xl font-semibold">{place.title}</h4>
                <p className="text-stone-400 text-sm mt-1">{place.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase 
        text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
