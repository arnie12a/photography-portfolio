import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import stateStreet from "../../public/places/madison/stateStreet.jpg"
import abe from "../../public/places/madison/abe.jpg"
import collegeLibrary from "../../public/places/madison/collegeLibrary.jpg"
import farmersMarket from "../../public/places/madison/farmersMarket.jpg"
import mendota from "../../public/places/madison/mendota.jpg"
import science from "../../public/places/madison/science.jpg"
import sunset from "../../public/places/madison/sunset.jpg"

const MADISON_IMAGES = [
  stateStreet,
  abe,
  collegeLibrary,
  farmersMarket,
  mendota,
  science,
  sunset,
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
          {MADISON_IMAGES.map((img, index) => (
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
    </main>
  )
}
