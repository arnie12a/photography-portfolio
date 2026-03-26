import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import ashwini from "../../public/places/portugal/ashwini.jpg"
import douroValley1 from "../../public/places/portugal/douroValley1.jpg"
import douroValley3 from "../../public/places/portugal/douroValley3.jpg"
import douroValleyWine from "../../public/places/portugal/douroValleyWine.jpg"
import duoroValley2 from "../../public/places/portugal/duoroValley2.jpg"
import duoroValley4 from "../../public/places/portugal/duoroValley4.jpg"
import lifonso from "../../public/places/portugal/lifonso.jpg"
import lisbon1 from "../../public/places/portugal/lisbon1.jpg"
import lisbon2 from "../../public/places/portugal/lisbon2.jpg"
import lisbonTree1 from "../../public/places/portugal/lisbonTree1.jpg"
import lisbonTree2 from "../../public/places/portugal/lisbonTree2.jpg"
import porto1 from "../../public/places/portugal/porto1.jpg"
import porto2 from "../../public/places/portugal/porto2.jpg"
import porto3 from "../../public/places/portugal/porto3.jpg"

const PORTUGAL_IMAGES = [
  ashwini,
  douroValley1,
  douroValley3,
  douroValleyWine,
  duoroValley2,
  duoroValley4,
  lifonso,
  lisbon1,
  lisbon2,
  lisbonTree1,
  lisbonTree2,
  porto1,
  porto2,
  porto3,
]

export default function PortugalGallery() {
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
          href="/places"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {PORTUGAL_IMAGES.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Portugal Photo"
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
