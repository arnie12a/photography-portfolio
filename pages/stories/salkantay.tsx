import Head from "next/head"
import Link from "next/link"

export default function Salkantay() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Salkantay — Arnav Karnik Photography</title>
      </Head>

      {/* Header */}
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

      {/* MAIN CONTENT */}
      <main className="pt-[140px] pb-32 px-6 md:px-12 max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
          Salkantay
        </h1>

        <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Favorite photos from the Salkantay trek coming soon...
        </p>

        <div className="mt-10 h-[2px] w-24 bg-stone-700 mx-auto"></div>
      </main>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
