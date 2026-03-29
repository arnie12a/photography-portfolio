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
import lucas1 from "../../public/places/chicago/lucasDinner1.jpg"
import lucas2 from "../../public/places/chicago/lucasDinner2.jpg"
import lucas3 from "../../public/places/chicago/lucasDinner3.jpg"

const CHICAGO_IMAGES = [
  brittanica,
  chicagoSkyline,
  keitlin,
  mudathiru,
  munachiEmily,
  planetariumSkyline,
  ugoPrecious,
  lucas1,
  lucas2,
  lucas3,
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
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/places"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      {/* STORY SECTION */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 mt-10 mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Chicago
        </h1>
        <p className="text-stone-400 leading-relaxed text-lg">
          I grew up in the suburbs of Chicago, so when I had the opportunity
          to move to the city after college, I knew I had to take it. Over the past 
          1.5 years I have lived in River North and Logan Square and have grown to really love the city.
          My favorite thing about Chicago is the skyline. My two favorite views has to be from the lakeshore path looking at 
          Oak Street Beach and from the planetarium looking at the city. 
        </p>
        <p className="text-stone-400 leading-relaxed text-lg">
          I have done so many things in Chicago as well. Like photographing my first wedding between Precious and Ugo and hanging out with 
          Keitlin who was surprising Miles with fostered puppies. 
        </p>
      </section>

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
