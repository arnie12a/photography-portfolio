import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// Madeira images
import clockTower from "../../public/places/madeira/clockTower.jpg"
import fanelForest from "../../public/places/madeira/fanelForest.jpg"
import fanelForest1 from "../../public/places/madeira/fanelForest1.jpg"
import fanelForest2 from "../../public/places/madeira/fanelForest2.jpg"
import fanelForest3 from "../../public/places/madeira/fanelForest3.jpg"
import madeiraLongExposure from "../../public/places/madeira/madeiraLongExposure.jpg"
import madeiraSoccerPitch from "../../public/places/madeira/madeiraSoccerPitch.jpg"
import madeiraTallWaterfall from "../../public/places/madeira/madeiraTallWaterfall.jpg"
import madeiraWater from "../../public/places/madeira/madeiraWater.jpg"
import madeiraWater2 from "../../public/places/madeira/madeiraWater2.jpg"
import madeiraWaterfall from "../../public/places/madeira/madeiraWaterfall.jpg"
import madeiraWaterfall2 from "../../public/places/madeira/madeiraWaterfall2.jpg"
import madeiraWindmills from "../../public/places/madeira/madeiraWindmills.jpg"
import nihar from "../../public/places/madeira/nihar.jpg"
import niharWaterfall from "../../public/places/madeira/niharWaterfall.jpg"
import pr1Hike1 from "../../public/places/madeira/pr1Hike1.jpg"
import pr1Hike2 from "../../public/places/madeira/pr1Hike2.jpg"
import pr1Hike3 from "../../public/places/madeira/pr1Hike3.jpg"
import pr1Hike4 from "../../public/places/madeira/pr1Hike4.jpg"
import saoVicente1 from "../../public/places/madeira/saoVicente1.jpg"
import saoVicente2 from "../../public/places/madeira/saoVicente2.jpg"
import shorelineCliffHike1 from "../../public/places/madeira/shorelineCliffHike1.jpg"
import shorelineCliffHike2 from "../../public/places/madeira/shorelineCliffHike2.jpg"

const MADEIRA_IMAGES = [
  clockTower,
  fanelForest,
  fanelForest1,
  fanelForest2,
  fanelForest3,
  madeiraLongExposure,
  madeiraSoccerPitch,
  madeiraTallWaterfall,
  madeiraWater,
  madeiraWater2,
  madeiraWaterfall,
  madeiraWaterfall2,
  madeiraWindmills,
  nihar,
  niharWaterfall,
  pr1Hike1,
  pr1Hike2,
  pr1Hike3,
  pr1Hike4,
  saoVicente1,
  saoVicente2,
  shorelineCliffHike1,
  shorelineCliffHike2,
]

export default function MadeiraGallery() {
  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
      <Head>
        <title>Places — Madeira</title>
        <meta name="description" content="Madeira photography" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>
        <Link href="/places" className="text-stone-300 hover:text-white text-sm tracking-wide 
          border border-stone-700 px-4 py-1 rounded-lg hover:bg-stone-800 transition-all">
          ← Back
        </Link>
      </header>

      {/* STORY SECTION */}
      {/* <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 mt-10 mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Madeira</h1>

        <p className="text-stone-400 leading-relaxed text-lg mb-4">
          Madeira is one of the most dramatic landscapes on earth — towering cliffs, 
          dense forests, volcanic ridgelines, and waterfalls that seem to appear out of nowhere.
        </p>

        <p className="text-stone-400 leading-relaxed text-lg">
          From the PR1 hike at sunrise to the lush valleys of São Vicente, every part of the island 
          feels like a different world. These photos capture the wild beauty that makes Madeira unforgettable.
        </p>
      </section> */}

      {/* GRID */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {MADEIRA_IMAGES.map((img, i) => (
            <div key={i} className="mb-0 break-inside-avoid">
              <Image src={img} alt="Madeira Photo" className="w-full h-auto object-cover" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
