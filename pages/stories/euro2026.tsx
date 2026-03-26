import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// Imports
import bigBen from "../../public/stories/europe2026/bigBen.jpg"
import clockTower from "../../public/stories/europe2026/clockTower.jpg"
import edinburghSunset from "../../public/stories/europe2026/edinburghSunset.jpg"
import fanelForest from "../../public/stories/europe2026/fanelForest.jpg"
import fanelForest1 from "../../public/stories/europe2026/fanelForest1.jpg"
import fanelForest2 from "../../public/stories/europe2026/fanelForest2.jpg"
import fanelForest3 from "../../public/stories/europe2026/fanelForest3.jpg"
import highlandCow from "../../public/stories/europe2026/highlandCow.jpg"
import highlandCow2 from "../../public/stories/europe2026/highlandCow2.jpg"
import hoopsInParis from "../../public/stories/europe2026/hoopsInParis.jpg"
import madeiraLongExposure from "../../public/stories/europe2026/madeiraLongExposure.jpg"
import madeiraSoccerPitch from "../../public/stories/europe2026/madeiraSoccerPitch.jpg"
import madeiraTallWaterfall from "../../public/stories/europe2026/madeiraTallWaterfall.jpg"
import madeiraWater from "../../public/stories/europe2026/madeiraWater.jpg"
import madeiraWater2 from "../../public/stories/europe2026/madeiraWater2.jpg"
import madeiraWaterfall from "../../public/stories/europe2026/madeiraWaterfall.jpg"
import madeiraWaterfall2 from "../../public/stories/europe2026/madeiraWaterfall2.jpg"
import madeiraWindmills from "../../public/stories/europe2026/madeiraWindmills.jpg"
import nihar from "../../public/stories/europe2026/nihar.jpg"
import niharWaterfall from "../../public/stories/europe2026/niharWaterfall.jpg"
import nishitaEdinburgh from "../../public/stories/europe2026/nishitaEdiburgh.jpg"
import oldTrafford1 from "../../public/stories/europe2026/oldTrafford1.jpg"
import oldTrafford2 from "../../public/stories/europe2026/oldTrafford2.jpg"
import oldTrafford3 from "../../public/stories/europe2026/oldTrafford3.jpg"
import pr1Hike1 from "../../public/stories/europe2026/pr1Hike1.jpg"
import pr1Hike2 from "../../public/stories/europe2026/pr1Hike2.jpg"
import pr1Hike3 from "../../public/stories/europe2026/pr1Hike3.jpg"
import pr1Hike4 from "../../public/stories/europe2026/pr1Hike4.jpg"
import saoVicente1 from "../../public/stories/europe2026/saoVicente1.jpg"
import saoVicente2 from "../../public/stories/europe2026/saoVicente2.jpg"
import shorelineCliffHike1 from "../../public/stories/europe2026/shorelineCliffHike1.jpg"
import shorelineCliffHike2 from "../../public/stories/europe2026/shorelineCliffHike2.jpg"

// Image Array
const EURO_IMAGES = [
  bigBen,
  clockTower,
  edinburghSunset,
  fanelForest,
  fanelForest1,
  fanelForest2,
  fanelForest3,
  highlandCow,
  highlandCow2,
  hoopsInParis,
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
  nishitaEdinburgh,
  oldTrafford1,
  oldTrafford2,
  oldTrafford3,
  pr1Hike1,
  pr1Hike2,
  pr1Hike3,
  pr1Hike4,
  saoVicente1,
  saoVicente2,
  shorelineCliffHike1,
  shorelineCliffHike2,
]

export default function Euro2026Gallery() {
    return (
      <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
        <Head>
          <title>Euro 2026 — Arnav Karnik Photography</title>
          <meta name="description" content="Euro 2026 Photo Story" />
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
            href="/stories"
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
            {EURO_IMAGES.map((img, index) => (
              <div key={index} className="mb-0 break-inside-avoid">
                <Image
                  src={img}
                  alt={`Euro 2026 Photo ${index + 1}`}
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