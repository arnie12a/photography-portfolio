import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// Mexico images
import ashwini from "../../public/places/mexico/ashwini.jpg"
import davidNotebooks from "../../public/places/mexico/davidNotebooks.jpg"
import iztaccihuatl from "../../public/places/mexico/iztaccihuatl.jpg"
import park from "../../public/places/mexico/park.jpg"
import popocatepetl from "../../public/places/mexico/popocatepetl.jpg"

const MEXICO_IMAGES = [
  ashwini,
  davidNotebooks,
  iztaccihuatl,
  park,
  popocatepetl,
]

export default function MexicoGallery() {
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
          Mexico
        </h1>

        <p className="text-stone-400 leading-relaxed text-lg mb-4">
          Mexico is a place full of energy, color, and culture. From the volcanic 
          silhouettes of Popocatépetl and Iztaccíhuatl to the everyday life unfolding 
          in parks and neighborhoods, the country has a rhythm that feels both grounded 
          and vibrant.
        </p>

        <p className="text-stone-400 leading-relaxed text-lg">
          Some of my favorite moments were simple ones — photographing friends, 
          wandering through local streets, and watching the mountains glow at sunrise. 
          Mexico has a way of making even the smallest scenes feel meaningful.
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
          {MEXICO_IMAGES.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Mexico Photo"
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
