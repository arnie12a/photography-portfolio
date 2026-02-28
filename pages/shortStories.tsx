import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Replace with your real story images
import dolomitesImg from "../public/landscape/dolomites2.jpg"
import hanaleiImg from "../public/landscape/hanaleiBay.jpg"
import aurovilleImg from "../public/landscape/auroville.jpg"

export default function ShortStories() {
  const stories = [
    
    
    {
      title: "The Dolomites",
      subtitle: "Italy’s jagged giants at sunrise.",
      img: dolomitesImg,
      link: "/shortStories/story1",
    },
    {
      title: "Hanalei Bay",
      subtitle: "A quiet morning on Kauai’s north shore.",
      img: hanaleiImg,
      link: "/shortStories/story2",
    },
    {
      title: "Auroville",
      subtitle: "Light, color, and stillness.",
      img: aurovilleImg,
      link: "/shortStories/story3",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Short Stories — Arnav Karnik Photography</title>
        <meta name="description" content="Short stories and photo essays" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800 flex items-center justify-between">
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/"
          className="rounded-3xl bg-white text-stone-900 px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition"
        >
          Back to Portfolio
        </Link>
      </header>

      <main className="pt-[110px] pb-20">

        {/* Slider */}
        <section className="w-full overflow-x-auto snap-x snap-mandatory flex space-x-6 px-6 pb-10 scrollbar-hide">
          {stories.map((story, i) => (
            <Link
              key={i}
              href={story.link}
              className="relative min-w-[85%] h-[60vh] snap-center rounded-xl overflow-hidden group"
            >
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold">{story.title}</h2>
                <p className="text-stone-300">{story.subtitle}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Grid fallback / more stories */}
        <section className="max-w-6xl mx-auto px-6 mt-10">
          <h3 className="text-2xl font-bold mb-6">All Stories</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <Link
                key={i}
                href={story.link}
                className="group rounded-lg overflow-hidden bg-stone-900 border border-stone-800 hover:border-stone-600 transition"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{story.title}</h4>
                  <p className="text-stone-400 text-sm mt-1">{story.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
