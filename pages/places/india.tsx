import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// ---- Imported Photos ----
// ---- Imported Photos ----
import aurangabad1 from "../../public/places/india/aurangabad1.jpg"
import aurangabad2 from "../../public/places/india/aurangabad2.jpg"
import auroville from "../../public/places/india/auroville.jpg"
import bandalorePark6 from "../../public/places/india/bandalorePark6.jpg"
import bangalorePark1 from "../../public/places/india/bangalorePark1.jpg"
import bangalorePark2 from "../../public/places/india/bangalorePark2.jpg"
import bangalorePark3 from "../../public/places/india/bangalorePark3.jpg"
import bangalorePark4 from "../../public/places/india/bangalorePark4.jpg"
import bangalorePark5 from "../../public/places/india/bangalorePark5.jpg"
import bangaloreSteeet from "../../public/places/india/bangaloreSteeet.jpg"
import darjeeling1 from "../../public/places/india/darjeeling1.jpg"
import darjeeling2 from "../../public/places/india/darjeeling2.jpg"
import darjeeling3 from "../../public/places/india/darjeeling3.jpg"
import darjeelingStreets from "../../public/places/india/darjeelingStreets.jpg"
import darjeelingSunrise from "../../public/places/india/darjeelingSunrise.jpg"
import dogPune1 from "../../public/places/india/dogPune1.jpg"
import dogPune2 from "../../public/places/india/dogPune2.jpg"
import eravikulam1 from "../../public/places/india/eravikulam1.jpg"
import eravikulam2 from "../../public/places/india/eravikulam2.jpg"
import fire1 from "../../public/places/india/fire1.jpg"
import fire2 from "../../public/places/india/fire2.jpg"
import fire3 from "../../public/places/india/fire3.jpg"
import fire4 from "../../public/places/india/fire4.jpg"
import fire5 from "../../public/places/india/fire5.jpg"
import gangtokSoccerStadium from "../../public/places/india/gangtokSoccerStadium.jpg"
import gangtokSoccerStadium2 from "../../public/places/india/gangtokSoccerStadium2.jpg"
import gangtokStadium from "../../public/places/india/gangtokStadium.jpg"
import gatewayOfIndia from "../../public/places/india/gatewayOfIndia.jpg"
import hilton from "../../public/places/india/hilton.jpg"
import khanchenjunga from "../../public/places/india/khanchenjunga.jpg"
import khanchenjungaBaseCampStart from "../../public/places/india/khanchenjungaBaseCampStart.jpg"
import kolukkumalaiTeaEstate1 from "../../public/places/india/kolukkumalaiTeaEstate1.jpg"
import kolukkumalaiTeaEstate2 from "../../public/places/india/kolukkumalaiTeaEstate2.jpg"
import lion from "../../public/places/india/lion.jpg"
import mumbaiBridge from "../../public/places/india/mumbaiBridge.jpg"
import mumbaiCricket from "../../public/places/india/mumbaiCricket.jpg"
import mumbaiCricket2 from "../../public/places/india/mumbaiCricket2.jpg"
import mumbaiCricket3 from "../../public/places/india/mumbaiCricket3.jpg"
import mumbaiCricket4 from "../../public/places/india/mumbaiCricket4.jpg"
import mumbaiCricket5 from "../../public/places/india/mumbaiCricket5.jpg"
import mumbaiSkyline from "../../public/places/india/mumbaiSkyline.jpg"
import mumbaiWater from "../../public/places/india/mumbaiWater.jpg"
import munnar1 from "../../public/places/india/munnar1.jpg"
import munnarCricket from "../../public/places/india/munnarCricket.jpg"
import munnarFlower from "../../public/places/india/munnarFlower.jpg"
import munnarHike from "../../public/places/india/munnarHike.jpg"
import munnarHike1 from "../../public/places/india/munnarHike1.jpg"
import munnarHike2 from "../../public/places/india/munnarHike2.jpg"
import munnarHike3 from "../../public/places/india/munnarHike3.jpg"
import munnarHike4 from "../../public/places/india/munnarHike4.jpg"
import munnarHike5 from "../../public/places/india/munnarHike5.jpg"
import munnarSunrise from "../../public/places/india/munnarSunrise.jpg"
import munnarTeaPickers from "../../public/places/india/munnarTeaPickers.jpg"
import munnarTeaPlantation1 from "../../public/places/india/munnarTeaPlantation1.jpg"
import munnarTeaPlantation2 from "../../public/places/india/munnarTeaPlantation2.jpg"
import munnarTeaPlantation3 from "../../public/places/india/munnarTeaPlantation3.jpg"
import munnarTeaPlantation4 from "../../public/places/india/munnarTeaPlantation4.jpg"
import munnarTeaPlantationHike from "../../public/places/india/munnarTeaPlantationHike.jpg"
import munnarTeaPlantations from "../../public/places/india/munnarTeaPlantations.jpg"
import munnarTree from "../../public/places/india/munnarTree.jpg"
import munnarWaterfall from "../../public/places/india/munnarWaterfall.jpg"
import nandiHillsMonkey from "../../public/places/india/nandiHillsMonkey.jpg"
import niharPellingFort from "../../public/places/india/niharPellingFort.jpg"
import peace from "../../public/places/india/peace.jpg"
import pelling1 from "../../public/places/india/pelling1.jpg"
import pelling2 from "../../public/places/india/pelling2.jpg"
import pelling3 from "../../public/places/india/pelling3.jpg"
import pelling4 from "../../public/places/india/pelling4.jpg"
import pelling5 from "../../public/places/india/pelling5.jpg"
import pelling7 from "../../public/places/india/pelling7.jpg"
import raigad from "../../public/places/india/raigad.jpg"
import sikkimFirstSunrise from "../../public/places/india/sikkimFirstSunrise.jpg"
import sikkimTree from "../../public/places/india/sikkimTree.jpg"
import sinhagadHike from "../../public/places/india/sinhagadHike.jpg"
import soccerPitch from "../../public/places/india/soccerPitch.jpg"
import tsongmoLake from "../../public/places/india/tsongmoLake.jpg"


const ALL_IMAGES = [
  aurangabad1, aurangabad2, auroville, bandalorePark6,
  bangalorePark1, bangalorePark2, bangalorePark3, bangalorePark4, bangalorePark5, bangaloreSteeet,
  darjeeling1, darjeeling2, darjeeling3, darjeelingStreets, darjeelingSunrise,
  dogPune1, dogPune2,
  eravikulam1, eravikulam2,
  fire1, fire2, fire3, fire4, fire5,
  gangtokSoccerStadium, gangtokSoccerStadium2, gangtokStadium,
  gatewayOfIndia, hilton,
  khanchenjunga, khanchenjungaBaseCampStart,
  kolukkumalaiTeaEstate1, kolukkumalaiTeaEstate2,
  lion,
  mumbaiBridge, mumbaiCricket, mumbaiCricket2, mumbaiCricket3, mumbaiCricket4, mumbaiCricket5,
  mumbaiSkyline, mumbaiWater,
  munnar1, munnarCricket, munnarFlower,
  munnarHike, munnarHike1, munnarHike2, munnarHike3, munnarHike4, munnarHike5,
  munnarSunrise, munnarTeaPickers,
  munnarTeaPlantation1, munnarTeaPlantation2, munnarTeaPlantation3, munnarTeaPlantation4,
  munnarTeaPlantationHike, munnarTeaPlantations,
  munnarTree, munnarWaterfall,
  nandiHillsMonkey, niharPellingFort, peace,
  pelling1, pelling2, pelling3, pelling4, pelling5, pelling7,
  raigad,
  sikkimFirstSunrise, sikkimTree,
  sinhagadHike,
  soccerPitch,
  tsongmoLake,
]

export default function IndiaAllPhotos() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
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
          href="/places"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <main className="pt-[110px] pb-20 w-full">
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
            {ALL_IMAGES.map((img, index) => (
              <div key={index} className="mb-0 break-inside-avoid">
                <Image
                  src={img}
                  alt="India Photo"
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}
