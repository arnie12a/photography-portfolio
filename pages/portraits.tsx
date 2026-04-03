import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import ugoPrecious from "../public/places/chicago/ugoPrecious.jpg"
import munachiEmily from "../public/places/chicago/munachiEmily.jpg"
import lucasDinner from "../public/places/chicago/lucasDinner1.jpg"
import mudathiru from "../public/places/chicago/mudathiru.jpg"
import keitlin from "../public/places/chicago/keitlin.jpg"
import neeva from "../public/places/england/neeva.jpg"
import mayraSnehal from "../public/places/england/mayraNSnehal.jpg"
import pipeline from "../public/places/hawaii/pipeline.jpg"
import tantalusLookout from "../public/places/hawaii/tantalusLookout.jpg"
import wiliwilinuiRidgeHike from "../public/places/hawaii/wiliwilinuiRidgeHike1.jpg"
import niharPellingFort from "../public/places/india/niharPellingFort.jpg"
import niharWaterfall from "../public/places/madeira/niharWaterfall.jpg"
import ashwiniMexico from "../public/places/mexico/ashwini.jpg"
import davidNotebooks from "../public/places/mexico/davidNotebooks.jpg"
import ashwiniPortugal from "../public/places/portugal/ashwini.jpg"
import lifonso from "../public/places/portugal/lifonso.jpg"
import nishitaEdinburgh from "../public/places/scotland/nishitaEdinburgh.jpg"
import nathanBridge from "../public/stories/nationalParks/nathanBridge.png"
import meganAndrewRainier from "../public/stories/nationalParks/meganAndrewRainier.jpg"
import kaylem from "../public/other/kaylem.jpg"
import knif from "../public/other/knif.jpg"


const portraitPhotos = [
  ugoPrecious,
  munachiEmily,
  lucasDinner,
  mudathiru,
  keitlin,
  neeva, 
  mayraSnehal,
    pipeline,
    tantalusLookout,
    wiliwilinuiRidgeHike,
    niharPellingFort,
    niharWaterfall,
    ashwiniMexico,
    davidNotebooks,
    ashwiniPortugal,
    lifonso,
    nishitaEdinburgh,
    nathanBridge,
    meganAndrewRainier,
    knif,
    kaylem
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
      <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-wide text-stone-100 mb-10 mt-6">
        Portraits
        </h1>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {portraitPhotos.map((img, index) => (
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
