import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// Import your portraits
import keitlin from "../../public/places/chicago/keitlin.jpg"
import lucas from "../../public/places/chicago/lucasDinner1.jpg"
import ugoPrecious from "../../public/places/chicago/ugoPrecious.jpg"
import mudathiru from "../../public/places/chicago/mudathiru.jpg"
import pipeline from "../../public/places/hawaii/pipeline.jpg"
import tantalusLookout from "../../public/places/hawaii/tantalusLookout.jpg"
import ashwini from "../../public/places/mexico/ashwini.jpg"
import davidNotebooks from "../../public/places/mexico/davidNotebooks.jpg"
import lifonso from "../../public/places/portugal/lifonso.jpg"
import lucasJac from "../../public/places/chicago/lucasJac.jpg"
import kaylem from "../../public/places/peru/kaylemCat.jpg"
import kaylemKeah from "../../public/places/peru/kaylemKeah.jpg"
import meganAndrewRainier from "../../public/stories/nationalParks/meganAndrewRainier.jpg"

const portraits = [
  {
    src: keitlin,
    alt: "Keitlin with Dogs",
    title: "Keitlin",
    description:
      "Here is a portrait of Keitlin with a puppy she was fostering since the shelter was overwhelmed with puppies.",
  },
  {
    src: lucas,
    alt: "Lucas Portrait",
    title: "Chef Ho",
    description:
      "Lucas preparing a feast for me.",
  },
  {
    src: ugoPrecious,
    alt: "Ugo & Precious Portrait",
    title: "Ugo & Precious",
    description:
      "My first ever wedding photoshoot!",
  },
  {
    src: mudathiru,
    alt: "Mudathiru Portrait",
    title: "Mudathiru",
    description:
      "He wanted a headshot for a while and I was happy to oblige.",
  },
  {
    src: pipeline,
    alt: "Pipeline Portrait",
    title: "Pipeline Surfer",
    description:
      "His dream is pipeline.",
  },
  {
    src: kaylem,
    alt: "Kaylem",
    title: "Kaylem",
    description:
      "Had to say Hi to a stray cat in Peru.",
  },
  {
    src: meganAndrewRainier,
    alt: "Megan & Andrew Portrait",
    title: "Megan & Andrew",
    description:
      "Enjoying the mountains while hiking the skyline loop trail in Mount Rainier National Park, Washington.",
  },
  {
    src: tantalusLookout,
    alt: "Tantalus Lookout Portrait",
    title: "Tantalus Lookout",
    description:
      "Lookout from above Oahu, Hawaii.",
  },
  {
    src: ashwini,
    alt: "Ashwini Portrait",
    title: "Ashwini",
    description:
      "My mother in Mexico City, Mexico.",
  },
  {
    src: davidNotebooks,
    alt: "David with Notebooks Portrait",
    title: "David",
    description:
      "When in Mexico City you have to buy one of his notebooks. He makes them himself and they are beautiful.",
  },
  {
    src: kaylemKeah,
    alt: "Kaylem & Keah Portrait",
    title: "Kaylem & Keah",
    description:
      "Taking on the Salkantay trek in Peru.",
  },
  {
    src: lifonso,
    alt: "Lifonso Portrait",
    title: "Lifonso",
    description:
      "If you every visit Lisbon, Portugal, you let Lifonso take you around the city. ",
  },  
  {
    src: lucasJac,
    alt: "Lucas & Jac",
    title: "Lucas + Jac",
    description:
      "Here are my buddies from college",
  }, 
]

export default function Portraits() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Portrait Gallery — Arnav Karnik Photography</title>
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

      <main className="pt-[120px] pb-32 max-w-5xl mx-auto px-6">
  <h1 className="text-center text-5xl md:text-6xl font-light tracking-tight mb-20">
    Portraits
  </h1>

  <div className="space-y-32">
    {portraits.map((p, i) => (
      <section
        key={i}
        className={`
          flex flex-col 
          ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
          items-center gap-12
        `}
      >
        {/* Image */}
        <div className="w-full md:w-2/3">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <Image
  src={p.src}
  alt={p.alt}
  className={
    `object-cover w-full transition-transform duration-[1200ms] hover:scale-105 ` +
    (p.src.width > p.src.height
      ? "h-[450px] md:h-[550px]"   // horizontal photos
      : "h-[650px] md:h-[800px]")  // vertical photos
  }
/>

          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            {p.title}
          </h2>
          <p className="text-stone-400 leading-relaxed text-sm mb-6">
            {p.description}
          </p>
          <div className="h-[2px] w-20 bg-stone-700"></div>
        </div>
      </section>
    ))}
  </div>
</main>


      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
