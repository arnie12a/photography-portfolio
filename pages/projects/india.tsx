import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// Import all India photos
import auroville from "../../public/places/india/auroville.jpg"
import gatewayOfIndia from "../../public/places/india/gatewayOfIndia.jpg"
import munnarCricket from "../../public/places/india/munnarCricket.jpg"
import munnarWaterfall from "../../public/places/india/munnarWaterfall.jpg"
import bangalorePark2 from "../../public/places/india/bangalorePark2.jpg"
import hilton from "../../public/places/india/hilton.jpg"
import munnarFlower from "../../public/places/india/munnarFlower.jpg"
import nandiHillsMonkey from "../../public/places/india/nandiHillsMonkey.jpg"
import bangalorePark3 from "../../public/places/india/bangalorePark3.jpg"
import khanchenjunga from "../../public/places/india/khanchenjunga.jpg"
import munnarHike from "../../public/places/india/munnarHike.jpg"
import niharPellingFort from "../../public/places/india/niharPellingFort.jpg"
import darjeeling2 from "../../public/places/india/darjeeling2.jpg"
import kolukkumalaiTeaEstate1 from "../../public/places/india/kolukkumalaiTeaEstate1.jpg"
import munnarHike3 from "../../public/places/india/munnarHike3.jpg"
import peace from "../../public/places/india/peace.jpg"
import darjeelingStreets from "../../public/places/india/darjeelingStreets.jpg"
import kolukkumalaiTeaEstate2 from "../../public/places/india/kolukkumalaiTeaEstate2.jpg"
import munnarHike4 from "../../public/places/india/munnarHike4.jpg"
import pelling2 from "../../public/places/india/pelling2.jpg"
import darjeelingSunrise from "../../public/places/india/darjeelingSunrise.jpg"
import lion from "../../public/places/india/lion.jpg"
import munnarHike5 from "../../public/places/india/munnarHike5.jpg"
import pelling3 from "../../public/places/india/pelling3.jpg"
import dogPune1 from "../../public/places/india/dogPune1.jpg"
import mumbaiBridge from "../../public/places/india/mumbaiBridge.jpg"
import munnarSunrise from "../../public/places/india/munnarSunrise.jpg"
import pelling4 from "../../public/places/india/pelling4.jpg"
import dogPune2 from "../../public/places/india/dogPune2.jpg"
import mumbaiCricket from "../../public/places/india/mumbaiCricket.jpg"
import munnarTeaPickers from "../../public/places/india/munnarTeaPickers.jpg"
import pelling7 from "../../public/places/india/pelling7.jpg"
import eravikulam2 from "../../public/places/india/eravikulam2.jpg"
import mumbaiCricket2 from "../../public/places/india/mumbaiCricket2.jpg"
import munnarTeaPlantation3 from "../../public/places/india/munnarTeaPlantation3.jpg"
import raigad from "../../public/places/india/raigad.jpg"
import fire2 from "../../public/places/india/fire2.jpg"
import mumbaiCricket3 from "../../public/places/india/mumbaiCricket3.jpg"
import munnarTeaPlantation4 from "../../public/places/india/munnarTeaPlantation4.jpg"
import sikkimFirstSunrise from "../../public/places/india/sikkimFirstSunrise.jpg"
import fire4 from "../../public/places/india/fire4.jpg"
import mumbaiCricket4 from "../../public/places/india/mumbaiCricket4.jpg"
import munnarTeaPlantationHike from "../../public/places/india/munnarTeaPlantationHike.jpg"
import sinhagadHike from "../../public/places/india/sinhagadHike.jpg"
import fire5 from "../../public/places/india/fire5.jpg"
import mumbaiCricket5 from "../../public/places/india/mumbaiCricket5.jpg"
import munnarTeaPlantations from "../../public/places/india/munnarTeaPlantations.jpg"
import soccerPitch from "../../public/places/india/soccerPitch.jpg"
import gangtokStadium from "../../public/places/india/gangtokStadium.jpg"
import mumbaiWater from "../../public/places/india/mumbaiWater.jpg"
import munnarTree from "../../public/places/india/munnarTree.jpg"
import tsongmoLake from "../../public/places/india/tsongmoLake.jpg"

export default function India() {
  const images = [
    auroville, gatewayOfIndia, munnarCricket, munnarWaterfall, bangalorePark2, hilton,
    munnarFlower, nandiHillsMonkey, bangalorePark3, khanchenjunga, munnarHike, niharPellingFort,
    darjeeling2, kolukkumalaiTeaEstate1, munnarHike3, peace, darjeelingStreets, kolukkumalaiTeaEstate2,
    munnarHike4, pelling2, darjeelingSunrise, lion, munnarHike5, pelling3, dogPune1, mumbaiBridge,
    munnarSunrise, pelling4, dogPune2, mumbaiCricket, munnarTeaPickers, pelling7, eravikulam2,
    mumbaiCricket2, munnarTeaPlantation3, raigad, fire2, mumbaiCricket3, munnarTeaPlantation4,
    sikkimFirstSunrise, fire4, mumbaiCricket4, munnarTeaPlantationHike, sinhagadHike, fire5,
    mumbaiCricket5, munnarTeaPlantations, soccerPitch, gangtokStadium, mumbaiWater, munnarTree,
    tsongmoLake
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>India Gallery — Arnav Karnik Photography</title>
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
      <main className="pt-[120px] pb-32 max-w-7xl mx-auto px-4">
        <h1 className="text-center text-5xl md:text-6xl font-light tracking-tight mb-12">
          India
        </h1>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="mb-6 break-inside-avoid overflow-hidden rounded-xl group">
              <Image
                src={src}
                alt={`India photo ${i + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
