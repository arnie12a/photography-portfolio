import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// Scotland images
import edinburghSunset from "../../public/places/scotland/edinburghSunset.jpg"
import highlandCow from "../../public/places/scotland/highlandCow.jpg"
import highlandCow2 from "../../public/places/scotland/highlandCow2.jpg"
import nishitaEdinburgh from "../../public/places/scotland/nishitaEdinburgh.jpg"
import nishitaHighlandCow from "../../public/places/scotland/nishitaHighlandCow.jpg"
import edinburghSunrise from "../../public/places/scotland/edinburghSunrise.jpg"

const SCOTLAND_IMAGES = [
  edinburghSunset,
  highlandCow,
  highlandCow2,
  nishitaEdinburgh,
  nishitaHighlandCow,
  edinburghSunrise,
]

export default function ScotlandGallery() {
  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
      <Head>
        <title>Places — Scotland</title>
        <meta name="description" content="Scotland photography" />
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Scotland</h1>

        <p className="text-stone-400 leading-relaxed text-lg mb-4">
          Scotland feels like a place pulled out of a storybook — dramatic skies, rolling hills, 
          ancient cities, and wildlife that seems to belong to another era.
        </p>

        <p className="text-stone-400 leading-relaxed text-lg">
          From the golden light over Edinburgh to the iconic Highland cows, these photos capture 
          the rugged charm and quiet beauty that make Scotland unforgettable.
        </p>
      </section> */}

      {/* GRID */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {SCOTLAND_IMAGES.map((img, i) => (
            <div key={i} className="mb-0 break-inside-avoid">
              <Image src={img} alt="Scotland Photo" className="w-full h-auto object-cover" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
