import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// England images
import bigBen from "../../public/places/england/bigBen.jpg"
import oldTrafford1 from "../../public/places/england/oldTrafford1.jpg"
import oldTrafford2 from "../../public/places/england/oldTrafford2.jpg"
import oldTrafford3 from "../../public/places/england/oldTrafford3.jpg"

const ENGLAND_IMAGES = [
  bigBen,
  oldTrafford1,
  oldTrafford2,
  oldTrafford3,
]

export default function EnglandGallery() {
  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
      <Head>
        <title>Places — England</title>
        <meta name="description" content="England photography" />
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">England</h1>

        <p className="text-stone-400 leading-relaxed text-lg mb-4">
          England blends history, architecture, and sport in a way few places do. 
          From the iconic Big Ben to the electric atmosphere around Old Trafford, 
          the country carries a sense of tradition and energy.
        </p>

        <p className="text-stone-400 leading-relaxed text-lg">
          These photos capture a small piece of that experience — the landmarks, 
          the stadiums, and the moments that make England unforgettable.
        </p>
      </section> */}

      {/* GRID */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {ENGLAND_IMAGES.map((img, i) => (
            <div key={i} className="mb-0 break-inside-avoid">
              <Image src={img} alt="England Photo" className="w-full h-auto object-cover" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
