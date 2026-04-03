import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----
import dolomites2 from "../public/places/dolomites/dolomites2.jpg"
import hanaleiBay from "../public/places/hawaii/hanaleiBay.jpg"
import darjeelingSunrise from "../public/places/india/darjeelingSunrise.jpg"
import kolkkumalaiTeaEstate1 from "../public/places/india/kolukkumalaiTeaEstate1.jpg"
import eravikulam2 from "../public/places/india/eravikulam2.jpg"
import torreyPinesLookout from "../public/other/torreyPinesLookout.jpg"
import dolomites5 from "../public/places/dolomites/dolomites5.jpg"
import seceda2 from "../public/places/dolomites/seceda2.jpg"
import emeraldLake from "../public/stories/nationalParks/emeraldLake.png"
import khanchenjunga from "../public/places/india/khanchenjunga.jpg"
import kalalauLookout from "../public/places/hawaii/kalalauLookout.jpg"
import betweenZionAndBryce from "../public/other/betweenZionAndBryceCanyon.jpg"
import wiliwilinuiWidgeHike from "../public/places/hawaii/wiliwilinuiRidgeHike3.jpg"
import raigad from "../public/places/india/raigad.jpg"
import tsongmoLake from "../public/places/india/tsongmoLake.jpg"
import fire5 from "../public/places/india/fire5.jpg"
import mendota from "../public/places/madison/mendota.jpg"
import zionCarsBackdrop from "../public/stories/nationalParks/zionCarsBackdrop.jpg"
import grandCanyon from "../public/stories/nationalParks/bryceCanyon.jpg"
import waimeaCanyon from "../public/places/hawaii/waimeaCanyon.jpg"
import pr1Hike1 from "../public/places/madeira/pr1Hike1.jpg"
import pr1Hike2 from "../public/places/madeira/pr1Hike2.jpg"
import pr1Hike3 from "../public/places/madeira/pr1Hike3.jpg"
import theNarrows from "../public/stories/nationalParks/theNarrows.jpg"
import rainier from "../public/stories/nationalParks/rainier.jpg"

const NATURE_IMAGES = [
  dolomites2,
  hanaleiBay,
  darjeelingSunrise,
    kolkkumalaiTeaEstate1,
    eravikulam2,
    torreyPinesLookout,
    dolomites5,
    seceda2,
    emeraldLake,
    khanchenjunga,
    kalalauLookout,
    betweenZionAndBryce,
    wiliwilinuiWidgeHike,
    raigad,
    tsongmoLake,
    fire5,
    mendota,
    zionCarsBackdrop,
    grandCanyon,
    waimeaCanyon,
    pr1Hike1,
    pr1Hike2,
    pr1Hike3,
    theNarrows,
    rainier,

]

export default function MadisonGallery() {
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
          {NATURE_IMAGES.map((img, index) => (
            <div key={index} className="mb-0 break-inside-avoid">
              <Image
                src={img}
                alt="Madison Photo"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </main>
  )
}
