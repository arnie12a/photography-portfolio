import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import profilePic from "../public/other/arnie.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>About — Arnav Karnik Photography</title>
        <meta name="description" content="About Arnav Karnik Photography" />
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

      {/* Main Content */}
      <main className="pt-[120px] pb-20">
        <div className="max-w-5xl mx-auto px-6 md:flex md:space-x-12">

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
            <Image
              src={profilePic}
              alt="Arnav Karnik"
              className="w-80 h-auto rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Arnav Karnik</h2>

            {/* YOUR EXACT TEXT — unchanged */}
            <p className="text-stone-300 leading-relaxed">
              Coming soon...
            </p>


            
          </div>
        </div>
      </main>
    </div>
  )
}
