import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import buffalo from "../../public/places/srilanka/buffalo.jpg"
import closeElephant from "../../public/places/srilanka/closeElephant.jpg"
import dotter from "../../public/places/srilanka/dotter.jpg"
import elephant from "../../public/places/srilanka/elephant.jpg"
import galliFortCannon from "../../public/places/srilanka/galliFortCannon.jpg"
import galliFortCricketMatch from "../../public/places/srilanka/galliFortCricketMatch.jpg"
import mirissaBeach1 from "../../public/places/srilanka/mirissaBeach1.jpg"
import mirissaBeach2 from "../../public/places/srilanka/mirissaBeach2.jpg"
import mirissaBeachSunset from "../../public/places/srilanka/mirissaBeachSunset.jpg"
import sunsetSurfingMirissa from "../../public/places/srilanka/sunsetSurfingMirissa.jpg"

const SRILANKA_IMAGES = [
  buffalo,
  closeElephant,
  dotter,
  elephant,
  galliFortCannon,
  galliFortCricketMatch,
  mirissaBeach1,
  mirissaBeach2,
  mirissaBeachSunset,
  sunsetSurfingMirissa,
]

export default function SriLankaGallery() {
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
          Sri Lanka
        </h1>

        <p className="text-stone-400 leading-relaxed text-lg mb-4">
          Sri Lanka is one of the most naturally diverse places I’ve ever photographed. 
          From the wildlife roaming freely across national parks to the coastal forts 
          overlooking the Indian Ocean, every part of the island feels alive and full of character.
        </p>

        <p className="text-stone-400 leading-relaxed text-lg">
          Some of my favorite moments were watching elephants wander through the brush, 
          seeing water buffalo cooling off in the heat, and exploring the historic Galle Fort 
          where cricket matches unfold right next to centuries‑old walls. It’s a place that 
          blends nature, culture, and history in a way that’s unforgettable.
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
          {SRILANKA_IMAGES.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Sri Lanka Photo"
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
