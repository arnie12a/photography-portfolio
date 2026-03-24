import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import brittanica from "../../public/places/chicago/brittanica.jpg"
import chicagoSkyline from "../../public/places/chicago/chicagoSkyline.jpg"
import keitlin from "../../public/places/chicago/keitlin.jpg"
import mudathiru from "../../public/places/chicago/mudathiru.jpg"
import munachiEmily from "../../public/places/chicago/munachiEmily.jpg"
import planetariumSkyline from "../../public/places/chicago/planetariumSkyline.jpg"
import ugoPrecious from "../../public/places/chicago/ugoPrecious.jpg"

const CHICAGO_IMAGES = [
  brittanica,
  chicagoSkyline,
  keitlin,
  mudathiru,
  munachiEmily,
  planetariumSkyline,
  ugoPrecious,
]

export default function ChicagoGallery() {
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

      {/* FULL-WIDTH RESPONSIVE COLUMN GRID */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-0
            space-y-0
          "
        >
          {CHICAGO_IMAGES.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Chicago Photo"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
