import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// ---- Imported Photos ----
import auroville from "../../public/landscape/auroville.jpg"
import fire from "../../public/landscape/fire.jpg"
import sinhagad from "../../public/structures/sinhagad.jpg"
import mumbaiWaters from "../../public/structures/mumbaiWater.jpg"
import munnarTeaPlantation from "../../public/landscape/munnarTeaPlantationHike.jpg"
import kanchenjunga from "../../public/landscape/khanchenjunga.jpg"
import raigad from "../../public/landscape/raigad.jpg"
import sinhagadFortView from "../../public/landscape/sinhagadHike.jpg"
import pelling from "../../public/structures/pelling.jpg"

// Placeholder map (replace later)
const mapPlaceholder =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/India-locator-map-blank.svg/640px-India-locator-map-blank.svg.png"

// ---------------------- PLACES DATA ----------------------
const PLACES = [
  {
    title: "Sikkim",
    text: "Sikkim was a surreal blend of mountains, monasteries, and quiet villages. The air felt untouched, and every sunrise revealed new layers of the Himalayas.",
    map: mapPlaceholder,
    images: [kanchenjunga, pelling],
  },
  {
    title: "Munnar",
    text: "Munnar was peaceful and green, with endless tea plantations rolling into the mist.",
    map: mapPlaceholder,
    images: [munnarTeaPlantation],
  },
  {
    title: "Mumbai",
    text: "Mumbai was loud, chaotic, and full of energy. The coastline, the people, and the movement made it unforgettable.",
    map: mapPlaceholder,
    images: [mumbaiWaters],
  },
  {
    title: "Aurangabad",
    text: "Aurangabad carried a deep sense of history, from ancient caves to old fort walls.",
    map: mapPlaceholder,
    images: [raigad],
  },
  {
    title: "Nashik",
    text: "Nashik was warm and earthy, surrounded by hills and vineyards.",
    map: mapPlaceholder,
    images: [fire],
  },
  {
    title: "Pune",
    text: "Pune felt like home — hikes, forts, and sunsets that made every day feel grounded.",
    map: mapPlaceholder,
    images: [sinhagad, sinhagadFortView],
  },
  {
    title: "Bangalore",
    text: "Bangalore was a mix of modern life and old charm, full of gardens and rain-soaked streets.",
    map: mapPlaceholder,
    images: [auroville],
  },
  {
    title: "Pondicherry",
    text: "Pondicherry was calm and colorful, with French architecture and quiet beaches.",
    map: mapPlaceholder,
    images: [auroville],
  },
  {
    title: "Tangalle, Sri Lanka",
    text: "Tangalle was peaceful, with long beaches and warm sunsets.",
    map: mapPlaceholder,
    images: [fire],
  },
  {
    title: "Galle Fort, Sri Lanka",
    text: "Galle Fort felt like stepping into a preserved world — stone walls, ocean views, and slow afternoons.",
    map: mapPlaceholder,
    images: [auroville],
  },
  {
    title: "Yala National Park, Sri Lanka",
    text: "Yala was wild and raw — forests, open plains, and the thrill of spotting wildlife.",
    map: mapPlaceholder,
    images: [fire],
  },
]

// ---------------------- MAIN PAGE ----------------------
export default function IndiaGallery() {
  const [placeIndex, setPlaceIndex] = useState(0)

  const nextPlace = () =>
    setPlaceIndex((i) => (i + 1) % PLACES.length)

  const prevPlace = () =>
    setPlaceIndex((i) => (i - 1 + PLACES.length) % PLACES.length)

  const place = PLACES[placeIndex]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>India & Sri Lanka — Photo Journal</title>
        <meta name="description" content="Travel photography by Arnav Karnik" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800 flex items-center justify-between">
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/shortStories"
          className="rounded-3xl bg-white text-stone-900 px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition"
        >
          Back to Stories
        </Link>
      </header>

      <main className="pt-[110px] pb-20 max-w-6xl mx-auto px-6 space-y-16">

        {/* ---------------------- PLACE SWITCHER ---------------------- */}
        <div className="relative w-full max-w-4xl mx-auto text-center space-y-4">

          {/* Title + Map */}
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-4xl font-bold">{place.title}</h2>
            <img src={place.map} className="w-12 h-12 opacity-70" />
          </div>

          <p className="text-stone-400 max-w-3xl mx-auto">{place.text}</p>

          {/* Arrows */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevPlace}
              className="text-stone-400 hover:text-white text-3xl px-4"
            >
              ‹
            </button>

            <span className="text-stone-500 text-sm tracking-widest">
              {placeIndex + 1} / {PLACES.length}
            </span>

            <button
              onClick={nextPlace}
              className="text-stone-400 hover:text-white text-3xl px-4"
            >
              ›
            </button>
          </div>
        </div>

        {/* ---------------------- PHOTO GRID ---------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {place.images.map((img, i) => (
            <div key={i} className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={place.title}
                className="w-full h-auto object-cover rounded-lg"
                placeholder="blur"
              />
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}
