import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Import your place images
import parisImg from "../public/structures/parisBasketball.jpg"
import dolomitesImg from "../public/landscape/dolomites2.jpg"
import { title } from "process"

export default function Places() {
  const places = [
    {
      title: "Paris",
      subtitle: "Street life, architecture, and quiet corners.",
      img: parisImg,
      link: "/places/paris",
    },
   
    {
      title: "Dolomites",
      subtitle: "Italy’s jagged giants at sunrise.",
      img: dolomitesImg,
      link: "/places/dolomites",
    },
    {
        title: "India",
        subtitle: "Check out my two month trip across India in 2024.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from India
        link: "/places/india",
    },
    {
        title: "Sri Lanka",
        subtitle: "Such a beautiflul country with so much to offer.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Sri Lanka
        link: "/places/sriLanka",
    },
    {
        title: "Hawaii", 
        subtitle: "Here are photos from my adventures in Kauai and O'ahu.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Hawaii
        link: "/places/hawaii",
    },
    {
        title: "Madison, Wisconsin",
        subtitle: "My college town, full of charm and character.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Madison
        link: "/places/madison",
    },
    {
        title: "Madeira, Portugal",
        subtitle: "A stunning island with dramatic landscapes.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Madeira
        link: "/places/madeira",
    },
    {
        title: "Portugal",
        subtitle: "From Lisbon to Porto, a country of vibrant culture and stunning views.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Portugal
        link: "/places/portugal",
    },
    {
        title: "Mexico City",
        subtitle: "A vibrant city with a rich blend of culture and history.",
        img: dolomitesImg, // Placeholder image, replace with an actual photo from Mexico City
        link: "/places/mexicoCity",
    }

    // Add more places here
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
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

      <main className="pt-[110px] pb-20 w-full px-6 lg:px-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Places</h1>

        {/* Full-width grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, i) => (
            <Link
              key={i}
              href={place.link}
              className="group rounded-xl overflow-hidden bg-stone-900 
                border border-stone-800 hover:border-stone-600 transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={place.img}
                  alt={place.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <h4 className="text-xl font-semibold">{place.title}</h4>
                <p className="text-stone-400 text-sm mt-1">{place.subtitle}</p>
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
