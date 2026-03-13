
import Head from "next/head"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

// Importing images
import heroImage from "../public/landscape/dolomites2.jpg"
import preciousUgo from "../public/people/ugoPrecious.jpg"
import auroville from "../public/landscape/auroville.jpg"
import goat from "../public/animals/goat.jpg"
import hanaleiBay from "../public/landscape/hanaleiBay.jpg"
import oldTrafford from "../public/structures/oldTraffordStadium.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800 flex items-center justify-between">

        {/* Left: Title */}
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>


        {/* Right: Navigation */}
        <nav className="flex items-center space-x-8 text-stone-300 text-sm md:text-base">

          <Link href="/gallery" className="hover:text-white transition">GALLERY</Link>
          <Link href="/aboutme" className="hover:text-white transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-white transition">CONTACT</Link>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/arnavkarnikphotos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
        </nav>
      </header>

      <main className="pt-[90px]">

        {/* Hero Image */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <Image
            src={heroImage}
            alt="Hero"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Grid Section */}
        <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">

        <GridItem
          title="Places"
          imageSrc={oldTrafford}
          link="/places"
        />

        <GridItem
          title="Stories"
          imageSrc={auroville}
          link="/stories"
        />

        </div>

      </main>





      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}

type GridItemProps = {
  title: string
  imageSrc: StaticImageData
  link: string
}

function GridItem({ title, imageSrc, link }: GridItemProps) {
  return (
    <Link href={link} className="group relative h-[250px] sm:h-[300px] lg:h-[350px] block rounded overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
      <div className="absolute inset-0 flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
    </Link>
  )
}
