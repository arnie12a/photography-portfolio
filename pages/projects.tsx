import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

// ---- Imported Photos ----





export default function MadisonGallery() {
  return (
    <main className="pt-[110px] pb-20 w-full bg-stone-950 text-stone-200">
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
          href="/"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-8">
          Projects coming soon...
        </h1>
      </div>
      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </main>
  )
}
