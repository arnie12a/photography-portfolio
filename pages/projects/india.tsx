import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function IndiaProject() {
  const images = [
    "auroville.jpg", "gatewayOfIndia.jpg", "munnarFlower.jpg", "niharPellingFort.jpg",
    "bangalorePark2.jpg", "hilton.jpg", "munnarHike.jpg", "peace.jpg",
    "bangalorePark3.jpg", "khanchenjunga.jpg", "munnarHike3.jpg", "pelling2.jpg",
    "darjeeling2.jpg", "kolukkumalaiTeaEstate1.jpg", "munnarHike4.jpg", "pelling3.jpg",
    "darjeelingStreets.jpg", "kolukkumalaiTeaEstate2.jpg", "munnarHike5.jpg", "pelling4.jpg",
    "darjeelingSunrise.jpg", "lion.jpg", "munnarSunrise.jpg", "pelling7.jpg",
    "dogPune1.jpg", "mumbaiBridge.jpg", "munnarTeaPickers.jpg", "raigad.jpg",
    "dogPune2.jpg", "mumbaiCricket.jpg", "munnarTeaPlantation3.jpg", "sikkimFirstSunrise.jpg",
    "eravikulam2.jpg", "mumbaiCricket2.jpg", "munnarTeaPlantation4.jpg", "sinhagadHike.jpg",
    "fire2.jpg", "mumbaiCricket3.jpg", "munnarTeaPlantationHike.jpg", "soccerPitch.jpg",
    "fire4.jpg", "mumbaiCricket4.jpg", "munnarTeaPlantations.jpg", "tsongmoLake.jpg",
    "fire5.jpg", "mumbaiCricket5.jpg", "munnarTree.jpg",
    "gangtokSoccerStadium.jpg", "mumbaiWater.jpg", "munnarWaterfall.jpg",
    "gangtokStadium.jpg", "munnarCricket.jpg", "nandiHillsMonkey.jpg"
  ]

  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200 min-h-screen">
      <Head>
        <title>India Trip — Arnav Karnik Photography</title>
        <meta name="description" content="India Trip Photography Project" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          India Trip
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

      {/* CONTENT */}
      <div className="w-full px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10">
          India Trip — Photo Collection
        </h1>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((file) => (
            <div key={file} className="break-inside-avoid overflow-hidden rounded-lg border border-stone-800">
              <Image
                src={`/places/india/${file}`}
                alt={file}
                width={800}
                height={1000}
                className="w-full h-auto object-cover hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800 mt-20">
        Arnav Karnik Photography
      </footer>
    </main>
  )
}
