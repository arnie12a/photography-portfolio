import Head from "next/head"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// Kauai images
import hanaleiBay from "../../public/places/hawaii/hanaleiBay.jpg"
import kalalauLookout from "../../public/places/hawaii/kalalauLookout.jpg"
import kauaiOcean from "../../public/places/hawaii/kauaiOcean.jpg"
import napaliCoast from "../../public/places/hawaii/napaliCoast.jpg"
import waimeaCanyon from "../../public/places/hawaii/waimeaCanyon.jpg"

// Oahu images
import oahu1 from "../../public/places/hawaii/botanicalGarden.jpg"
import oahu2 from "../../public/places/hawaii/wiliwilinuiRidgeHike3.jpg"
import oahu3 from "../../public/places/hawaii/pipeline.jpg"
import oahu4 from "../../public/places/hawaii/wiliwilinuiRidgeHike1.jpg"
import oahu5 from "../../public/places/hawaii/wiliwilinuiRidgeHike2.jpg"
import oahu6 from "../../public/places/hawaii/tantalusLookout.jpg"

// ----------------------
// Types
// ----------------------
interface IslandSectionProps {
  name: string
  description: string[]
  photos: StaticImageData[]
}

// ----------------------
// Data
// ----------------------
const ISLANDS: IslandSectionProps[] = [
  {
    name: "Kauaʻi",
    description: [
      "Kauaʻi, the Garden Isle, is a place where nature feels ancient and untouched. Towering cliffs, lush valleys, and quiet beaches create a landscape that feels both wild and deeply peaceful.",
      "Every corner of the island carries a sense of timelessness — a reminder of Hawaiʻi’s raw, natural beauty.",
    ],
    photos: [
      hanaleiBay,
      kalalauLookout,
      kauaiOcean,
      napaliCoast,
      waimeaCanyon,
    ],
  },
  {
    name: "Oʻahu",
    description: [
      "Oʻahu is an island of contrasts — where dramatic ridgelines rise above a vibrant city, and world‑class surf breaks sit just minutes from quiet botanical gardens and hidden mountain trails.",
      "It’s a place where modern energy and natural beauty coexist, offering endless ways to explore.",
    ],
    photos: [
      oahu1,
      oahu2,
      oahu3,
      oahu4,
      oahu5,
      oahu6,
    ],
  },
]

// ----------------------
// Island Section Component
// ----------------------
function IslandSection({ name, description, photos }: IslandSectionProps) {
  return (
    <section className="mb-20">
      {/* STORY SECTION */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 mt-10 mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          {name}
        </h1>

        {description.map((para, i) => (
          <p
            key={i}
            className="text-stone-400 leading-relaxed text-lg mb-4"
          >
            {para}
          </p>
        ))}
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
          {photos.map((src, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={src}
                alt={`${name} Photo ${index + 1}`}
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ----------------------
// Page Component
// ----------------------
export default function HawaiiGallery() {
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

      {/* Render Kauai + Oahu sections */}
      {ISLANDS.map((island, i) => (
        <IslandSection key={i} {...island} />
      ))}
    </main>
  )
}
