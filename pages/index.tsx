import Head from "next/head"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

// Importing images for sections
import dolomites2 from "../public/landscape/dolomites2.jpg"
import preciousUgo from "../public/people/ugoPrecious.jpg"
import auroville from "../public/landscape/auroville.jpg"
import goat from "../public/animals/goat.jpg"
import chicagoSkyline from "../public/structures/chicagoSkyline.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Arnav Karnik Photography</title>
        <meta name="description" content="Photography portfolio by Arnav Karnik." />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-10 flex justify-center items-center h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800">
        <span className="uppercase text-xl tracking-[0.3em] text-stone-300">
          Arnav Karnik Photography
        </span>
      </header>

      <main className="pt-[105px]">
        {/* Sections */}
        <div className="flex flex-col">
          {/* Landscape/Nature Section */}
          <Section
            title="Landscape"
            imageSrc={dolomites2}
            link="/landscapes"
          />

          {/* Portraits Section */}
          <Section
            title="Portraits"
            imageSrc={preciousUgo}
            link="/portraits"
          />

          {/* Short Stories Section */}
          <Section
            title="Short Stories"
            imageSrc={auroville}
            link="/shortStories"
          />

          {/* Animals Section */}
          <Section
            title="Animals"
            imageSrc={goat}
            link="/animals"
          />

          {/* Structures Section */}
          <Section
            title="Structures"
            imageSrc={chicagoSkyline}
            link="/structures"
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

type SectionProps = {
  title: string
  imageSrc: StaticImageData
  link: string
}

function Section({ title, imageSrc, link }: SectionProps) {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full group">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        placeholder="blur"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300" />

      {/* Title */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
        <Link
          href={link}
          className="mt-4 px-6 py-2 text-lg font-medium text-stone-200 bg-stone-800 bg-opacity-70 hover:bg-opacity-90 rounded transition"
        >
          Explore
        </Link>
      </div>
    </div>
  )
}