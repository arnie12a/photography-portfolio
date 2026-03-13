import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Import your Paris Basketball story image
import parisBasketballImg from "../public/structures/parisBasketball.jpg"

export default function Stories() {
  const stories = [
    {
      title: "Paris Basketball",
      subtitle: "A story from the courts of Paris.",
      img: parisBasketballImg,
      link: "/stories/parisBasketball",
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

      <main className="pt-[110px] pb-20 w-full px-6 lg:px-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Short Stories</h1>

        {/* Full-width grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, i) => (
            <Link
              key={i}
              href={story.link}
              className="group rounded-xl overflow-hidden bg-stone-900 
                border border-stone-800 hover:border-stone-600 transition"
            >
              <div className="relative h-56 w-full">
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
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase 
        text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
