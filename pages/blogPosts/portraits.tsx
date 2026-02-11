import Head from "next/head"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// 👉 Import your portrait photos here
// Example:
import ashwini from "../../public/people/ashwini.jpg"
import davidNotebook from "../../public/people/davidNotebook.jpg"
import ugoPrecious from "../../public/people/ugoPrecious.jpg"
import kaylem from "../../public/people/kaylem.jpg"
import niharPellingFort from "../../public/people/niharPellingFort.jpg"
import lifonso from "../../public/people/lifonso.jpg"
import knif from "../../public/people/knif.jpg"
import niharMadeira from "../../public/people/nihar.jpg"
import mudathiru from "../../public/people/mudathiru.jpg"
import munachiEmily from "../../public/people/munachiEmily.jpg"
import nathanBridge from "../../public/people/nathanBridge.png"
import keitlin from "../../public/people/keitlin.jpg"
import vrushtiMegan from "../../public/people/vrushtiMuhab.jpg"

type PortraitPhoto = {
  src: StaticImageData
  description: string
  orientation: "vertical" | "horizontal"
}

const portraitPhotos: PortraitPhoto[] = [
  {
    src: ashwini,
    description: "My mom taking in the Douro Valley in Portugal",
    orientation: "vertical",
  },
  {
    src: davidNotebook,
    description: "Soft window light portrait session.",
    orientation: "horizontal",
  },
  {
    src: niharPellingFort,
    description: "My dad taking in the views from the foothills of Kanchenjunga",
    orientation: "horizontal",
  },
  {
    src: ugoPrecious,
    description: "Preciuos and Ugo Wedding",
    orientation: "horizontal",
  },
  {
    src: nathanBridge,
    description: "Nathan taking in the scenery at the Rocky Mountains National Park",
    orientation: "vertical",
  },
  {
    src: kaylem,
    description: "Kaylem at his mother's surprise birthday party",
    orientation: "vertical",
  },
  {
    src: munachiEmily,
    description: "Munachi + Emily",
    orientation: "horizontal",
  },
  {
    src: knif,
    description: "Hiked with Knif in Los Angeles",
    orientation: "horizontal",
  },
  {
    src: vrushtiMegan,
    description: "Megan & Vrushti at Mishal's engegement dinner",
    orientation: "horizontal",
  },
  {
    src: keitlin,
    description: "Keitlin with the puppies she is fostering",
    orientation: "horizontal",
  },
  {
    src: mudathiru,
    description: "The Professor",
    orientation: "vertical",
  },
  {
    src: lifonso,
    description: "Best tour guide in Lisbon, Portugal",
    orientation: "horizontal",
  },
  {
    src: niharMadeira,
    description: "My dad in Madeira",
    orientation: "vertical",
  },

]

export default function Portraits() {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-200">
        <Head>
          <title>Portrait Photography | Arnav Karnik</title>
          <meta name="description" content="Portrait photography collection by Arnav Karnik." />
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
                Portrait Photography
              </h1>
              <div className="w-24 h-[2px] bg-stone-700 mx-auto mt-6" />
            </div>
  
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {portraitPhotos.map((photo, index) => (
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
  