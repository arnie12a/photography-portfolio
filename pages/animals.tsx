import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import goat from "../public/stories/nationalParks/goat.jpg"
import buffalo from "../public/places/srilanka/buffalo.jpg"
import closeElephant from "../public/places/srilanka/closeElephant.jpg"
import dotter from "../public/places/srilanka/dotter.jpg"
import elephant from "../public/places/srilanka/elephant.jpg"
import highlandCow1 from "../public/places/scotland/highlandCow.jpg"
import highlandCow2 from "../public/places/scotland/highlandCow2.jpg"
import lion from "../public/places/india/lion.jpg"
import hilton from "../public/places/india/hilton.jpg"
import dogPune1 from "../public/places/india/dogPune1.jpg"
import dogPune2 from "../public/places/india/dogPune2.jpg"


const animal_images = [
  goat,
  buffalo,
    closeElephant,  
    dotter,
    elephant,
    highlandCow1,
    highlandCow2,
    lion,
    hilton,
    dogPune1,
    dogPune2
]

export default function MadisonGallery() {
  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
      <Head>
        <title>Places — Arnav Karnik Photography</title>
        <meta name="description" content="Places I've photographed" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        {/* Left: Title */}
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        {/* Right: Back Button */}
        <Link
          href="/"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {animal_images.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Madison Photo"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </main>
  )
}
