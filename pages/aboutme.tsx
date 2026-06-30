import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import arnieOldTrafford from "../public/other/arnieOldTrafford.jpg"
import arniePhoto from "../public/other/arniePhoto.jpg"

export default function AboutMe() {
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
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      {/* Main Content */}
      <main className="pt-[140px] pb-32 px-6 md:px-12 max-w-6xl mx-auto">

        {/* Title Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            About Me
          </h1>

          <div className="mt-10 h-[2px] w-24 bg-stone-700 mx-auto"></div>
        </section>

        {/* PHOTO LEFT — TEXT RIGHT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Vertical Photo */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-stone-800">
            <Image
              src={arniePhoto}
              alt="Arnav Portrait"
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-stone-300 leading-relaxed text-lg space-y-6">

            <p>
              Hey, I’m Arnav. I’m a photographer who loves capturing people in the environments
              that make them who they are. I’m especially drawn to sports and nature all over the world.
            </p>

            <p>
              I think there’s something really beautiful about how people interact with the world
              around them. Every place has its own energy, and every person responds to it differently.
              I want to spend my life capturing how people connect with their surroundings, especially
              when it comes to sports and nature.
            </p>

            <p>
              I’m originally from the suburbs of Chicago, but I’m based in Boulder, Colorado now.
              If you’re in need of a photoshoot or want to connect, feel free to reach out.
            </p>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-3 rounded-lg border border-stone-700 
                text-stone-300 hover:text-white hover:bg-stone-800 transition-all 
                tracking-wide text-sm"
            >
              Contact Me →
            </Link>

          </div>
        </section>

        {/* OLD TRAFFORD PHOTO BELOW */}
        <section className="mb-20">
          <div className="w-full rounded-lg overflow-hidden border border-stone-800">
            <Image
              src={arnieOldTrafford}
              alt="Arnav at Old Trafford"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
