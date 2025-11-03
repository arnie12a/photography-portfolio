import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import kaylem from "../../public/people/kaylem.jpg"
import ashwini from "../../public/people/ashwini.jpg"
import knifsend from "../../public/people/knif.jpg"
import mudathiru from "../../public/people/mudathiru.jpg"
import ugoPreciuosWedding from "../../public/people/ugoPrecious.jpg"
import niharMadeira from "../../public/people/nihar.jpg"
import munachiEmily from "../../public/people/munachiEmily.jpg"
import lifonso from "../../public/people/lifonso.jpg"

export default function Portraits() {
  const portraits = [
    {
      name: "Kaylem",
      image: kaylem,
      description:
        "Enjoy his mom's surprise birthday party.",
      orientation: "vertical",
    },
    {
        name: "Ethan",
        image: knifsend,
        description:
          "Posing with the Hollywood sign.",
        orientation: "horizontal",
      },
      {
        name: "Ugo & Precious",
        image: ugoPreciuosWedding,
        description:
          "Had the pleasure of taking their wedding photos",
        orientation: "horizontal",
      },
    {
        name: "Ashwini",
        image: ashwini,
        description:
          "Taking in the views of the Douro Valley.",
        orientation: "vertical",
      },
      {
        name: "Mudathiru",
        image: mudathiru,
        description:
          "Got some good portraits of the Professor.",
        orientation: "vertical",
      },
      {
        name: "Lifonso",
        image: lifonso,
        description:
          "If you are ever in Lisbon, get this man to give you a tour of the city",
        orientation: "horizontal",
      },
      {
        name: "Munachi & Emily",
        image: munachiEmily,
        description:
          "Throwing darts after work",
        orientation: "horizontal",
      },
      {
        name: "Nihar",
        image: niharMadeira,
        description:
          "Madeira, Portugal",
        orientation: "vertical",
      },
    
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-auto">
      <Head>
        <title>Portraits | Photography Portfolio</title>
        <meta
          name="description"
          content="A collection of portrait photographs capturing emotion and connection."
        />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10 bg-stone-950/90 backdrop-blur-md shadow-md">
        <span className="uppercase text-xl font-semibold tracking-wide">
          Arnav Karnik Photography
        </span>
        <Link
          href="/"
          className="rounded-3xl bg-white text-stone-900 px-4 py-2 font-medium hover:bg-opacity-90 transition"
        >
          Back to Portfolio
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] pt-[90px]">
        {/* <Image
          src={parisPortrait}
          alt="Portrait Photography"
          fill
          priority
          className="object-cover brightness-75"
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Portraits
          </h1>
          {/* <p className="mt-4 text-lg text-stone-200 max-w-2xl">
            Portraits are my favorite way to connect with people. A single look,
            a subtle gesture, or the way light hits someone’s face can tell an
            entire story. These are a few portraits that mean the most to me —
            each one capturing a unique emotion and moment in time.
          </p> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-16 pb-20 px-6">
        <div className="container mx-auto max-w-6xl grid gap-10 md:grid-cols-3 auto-rows-[400px] md:auto-rows-[500px]">
          {portraits.map((portrait, index) => (
            <div
              key={index}
              className={`bg-stone-900/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                portrait.orientation === "horizontal"
                  ? "md:col-span-2"
                  : "md:col-span-1"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={portrait.image}
                  alt={portrait.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain md:object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3 bg-gradient-to-t from-stone-950/90 to-transparent absolute bottom-0 w-full">
                <h2 className="text-2xl font-semibold text-white">
                  {portrait.name}
                </h2>
                <p className="text-stone-300 text-lg">{portrait.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
