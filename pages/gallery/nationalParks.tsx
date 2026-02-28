import Head from "next/head"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// 👉 Import your national park photos
import bryceCanyon from "../../public/landscape/bryceCanyon.jpg"
import grandCanyon from "../../public/landscape/grandCanyon.jpeg"
import popocatepetl from "../../public/landscape/popocatepetl.jpg"
import rainiernp from "../../public/landscape/rainier.jpg"
import rockyMountains from "../../public/landscape/emeraldLake.png"
import zion from "../../public/landscape/theNarrows.jpg"
import rioCelesteWaterfall from "../../public/landscape/rioCelesteWaterfall.jpg"
import smokeyMountains from "../../public/landscape/smokeyMountainsSunset.jpg"
import napaliCoast from "../../public/landscape/napaliCoast.jpg"
import waimeaCanyon from "../../public/landscape/waimeaCanyon.jpg"

type ParkPhoto = {
  src: StaticImageData
  description: string
  orientation: "vertical" | "horizontal"
}

const parkPhotos: ParkPhoto[] = [
  {
    src: bryceCanyon,
    description: "The Hoodos of Bryce Canyon National Park",
    orientation: "vertical",
  },
  {
    src: grandCanyon,
    description: "Grand Canyon National Park",
    orientation: "horizontal",
  },
  {
    src: rioCelesteWaterfall,
    description: "Rio Celeste Waterfall",
    orientation: "horizontal",
  },
  {
    src: zion,
    description: "Zion National Park -- The Narrows",
    orientation: "vertical",
  },
  {
    src: napaliCoast,
    description: "Nā Pali Coast State Wilderness Park",
    orientation: "horizontal",
  },
  {
    src: popocatepetl,
    description: "Parque Nacional Iztaccíhuatl - Popocatépetl",
    orientation: "horizontal",
  },

  {
    src: waimeaCanyon,
    description: "Waimea Canyon State Park",
    orientation: "horizontal",
  },
  {
    src: smokeyMountains,
    description: "Smokey Mountains National Park",
    orientation: "vertical",
  },
  {
    src: rainiernp,
    description: "Rainier National Park",
    orientation: "horizontal",
  },
  {
    src: rockyMountains,
    description: "Rocky Mountains National Park",
    orientation: "horizontal",
  },
]

export default function NationalParks() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>National Parks | Arnav Karnik</title>
        <meta name="description" content="National park photography by Arnav Karnik." />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800">
        <Link href="/" className="uppercase text-sm tracking-widest hover:text-white transition">
          ← Back
        </Link>
        <span className="uppercase text-xl tracking-[0.3em] text-stone-300">
          Arnav Karnik Photography
        </span>
        <div />
      </header>

      <main className="pt-[140px] pb-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
              National Parks
            </h1>
            <div className="w-24 h-[2px] bg-stone-700 mx-auto mt-6" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {parkPhotos.map((photo, index) => (
              <div
                key={index}
                className={`group flex flex-col ${
                  photo.orientation === "horizontal" ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden rounded-2xl bg-stone-900 shadow-xl ${
                    photo.orientation === "vertical"
                      ? "aspect-[3/4]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.description}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    placeholder="blur"
                  />
                </div>

                {/* Caption */}
                <p className="mt-5 text-sm text-stone-400 leading-relaxed px-1 max-w-md">
                  {photo.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
