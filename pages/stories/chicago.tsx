import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MailerLiteForm from "../../pages/components/MailerLiteForm"

// Import your three Chicago images
import chicagoSkyline from "../../public/places/chicago/chicagoSkyline.jpg"
import chicagoRiverwalk from "../../public/places/chicago/brittanica.jpg"
import chicagoPlanetarium from "../../public/places/chicago/planetariumSkyline.jpg"
const SLIDES = [chicagoSkyline, chicagoRiverwalk, chicagoPlanetarium]

export default function ChicagoStory() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % SLIDES.length)
  const prev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Chicago — Arnav Karnik Photography</title>
      </Head>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/stories"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <main className="pt-[120px] pb-32">

        {/* Slider */}
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <Image
            src={SLIDES[index]}
            alt="Chicago Story Image"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-black/40 hover:bg-black/60 text-white p-3 rounded-full 
              transition z-20"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-black/40 hover:bg-black/60 text-white p-3 rounded-full 
              transition z-20"
          >
            ›
          </button>
        </div>

        {/* Title + Date */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-16 mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Chicago
          </h1>


          <div className="mt-6 h-[2px] w-20 bg-stone-700 mx-auto"></div>
        </section>

        {/* Story Content — your text preserved with spacing */}
        <article className="max-w-3xl mx-auto px-6 md:px-0 text-lg leading-relaxed text-stone-300 space-y-8">
          <p>
            Chicago
            As I step into this next chapter in my life I thought I would talk about Chicago. My parents immigrated to the United States in the late 1990s for their jobs and chose Chicago to be home. So in 2002, I was born in the suburbs of Chicago and my story began. 
          </p>

          <p>
            Anyways, I have basically been in the midwest my entire life. Spending the first 18 years in Schaumburg, the next four in Madison for my undergrad, and two more in Chicago working. So you can say I have spent plenty of time in the Windy City. 
          </p>

          <p>
            Here are my three favorite places in the city that I grew up visiting. And over the past two years I would relax at these places because it reminds me of the times I would go into the city with my family when I was a baby boy. 
          </p>
        </article>

        {/* Newsletter Signup */}
        <section className="max-w-2xl mx-auto mt-32 px-8 py-20 text-center 
          bg-stone-900/40 rounded-xl border border-stone-800 shadow-xl">

          <h2 className="text-4xl font-light mb-4 tracking-tight">
            Stay Inspired
          </h2>

          <p className="text-stone-300 mb-10 text-lg leading-relaxed">
            Get new stories, behind‑the‑scenes notes, and photo essays delivered to your inbox.
          </p>

          <MailerLiteForm />
        </section>

      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
