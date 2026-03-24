import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import dolomites2 from "../../public/places/dolomites/dolomites2.jpg"
import dolomites3 from "../../public/places/dolomites/dolomites3.jpg"
import seceda from "../../public/places/dolomites/seceda.jpg"

const DOLOMITES_IMAGES = [dolomites2, dolomites3, seceda]

export default function DolomitesGallery() {
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
          {DOLOMITES_IMAGES.map((img, i) => (
            <div key={i} className="mb-0 break-inside-avoid">
              <Image src={img} alt="Dolomites Photo" className="w-full h-auto object-cover" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
