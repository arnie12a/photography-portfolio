import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import bryceCanyon from "../../public/stories/nationalParks/bryceCanyon.jpg"
import emeraldLake from "../../public/stories/nationalParks/emeraldLake.png"
import goat from "../../public/stories/nationalParks/goat.jpg"
import meganAndrewRainier from "../../public/stories/nationalParks/meganAndrewRainier.jpg"
import mthood from "../../public/stories/nationalParks/mthood.jpg"
import popocatepetl from "../../public/stories/nationalParks/popocatepetl.jpg"
import rainier from "../../public/stories/nationalParks/rainier.jpg"
import redwoods from "../../public/stories/nationalParks/redwoods.jpg"
import smokeyMountainsSunset from "../../public/stories/nationalParks/smokeyMountainsSunset.jpg"
import theNarrows from "../../public/stories/nationalParks/theNarrows.jpg"
import zionCarsBackdrop from "../../public/stories/nationalParks/zionCarsBackdrop.jpg"

const nationalParks = [
  { src: bryceCanyon, alt: "Bryce Canyon", title: "Bryce Canyon National Park" },
  { src: emeraldLake, alt: "Emerald Lake", title: "Rocky Mountain National Park" },
  { src: goat, alt: "Mountain Goat", title: "Glacier National Park" },
  { src: meganAndrewRainier, alt: "Rainier Couple", title: "Mount Rainier National Park" },
  { src: rainier, alt: "Rainier Landscape", title: "Mount Rainier National Park" },
  { src: mthood, alt: "Mount Hood", title: "Mount Hood National Forest" },
  { src: redwoods, alt: "Redwoods", title: "Redwood National & State Parks" },
  { src: smokeyMountainsSunset, alt: "Smokey Mountains", title: "Great Smoky Mountains National Park" },
  { src: theNarrows, alt: "The Narrows", title: "Zion National Park" },
  { src: zionCarsBackdrop, alt: "Zion Scenic Drive", title: "Zion National Park" },
  { src: popocatepetl, alt: "Popocatepetl", title: "Popocatépetl" },
]

export default function NationalParks() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>National Parks — Arnav Karnik Photography</title>
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/projects"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      {/* Gallery */}
    <main className="pt-[120px] pb-32 max-w-7xl mx-auto px-6">
    <h1 className="text-center text-5xl md:text-6xl font-light tracking-tight mb-16">
        National Parks
    </h1>

    {/* Masonry Grid */}
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
        {nationalParks.map((p, i) => (
        <div key={i} className="mb-8 break-inside-avoid group">

            <div className="relative w-full overflow-hidden rounded-xl">
            <Image
                src={p.src}
                alt={p.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            </div>

            <h2 className="text-xl font-light mt-4 tracking-tight">
            {p.title}
            </h2>

            <div className="mt-3 h-[2px] w-16 bg-stone-700"></div>
        </div>
        ))}
    </div>
    </main>


      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
