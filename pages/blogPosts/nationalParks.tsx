import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import zion from "../../public/landscape/zionCarsBackdrop.jpg"
import grandCanyon from "../../public/landscape/grandCanyon.jpeg"
import bryceCanyon from "../../public/landscape/bryceCanyon.jpg"
import rainier from "../../public/landscape/rainier.jpg"
import smokeyMountains from "../../public/landscape/smokeyMountainsSunset.jpg"
import rockyMountains from "../../public/landscape/emeraldLake.png"

export default function NationalParks() {
  const parks = [
    
    {
      name: "Zion National Park",
      image: zion,
      description:
        "Felt like I was in the movie Cars.",
    },
    {
      name: "Grand Canyon National Park",
      image: grandCanyon,
      description:
        "Hiked halfway down the Granc Canyon. I cannot wait to return and go rim to rim.",
    },
    {
      name: "Byrce Canyon National Park",
      image: bryceCanyon,
      description:
        "TThe biggest Hoodoos I have seen in my life.",
    },
    {
        name: "Rainier National Park",
        image: rainier,
        description:
            "Skyline Loop Trail: Hardest hike I have done.",
    },
    {
        name: "Smokey Mountains National Park",
        image: smokeyMountains,
        description:
            "Prettiest sunset I have ever captured.",
    },
    {
        name: "Rocky Mountains National Park",
        image: rockyMountains,
        description:
            "Emerald Lake",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-auto">
      <Head>
        <title>National Parks | Photography Portfolio</title>
        <meta name="description" content="A collection of national parks I’ve visited and photographed." />
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
      {/* <section className="relative w-full h-[60vh] pt-[90px]">
        <Image
          src={grandCanyon}
          alt="Yosemite Valley"
          fill
          priority
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            National Parks
          </h1>
          <p className="mt-4 text-lg text-stone-200 max-w-2xl">
            National parks remind me how small we are — yet how connected we can
            feel to something greater. Every park has its own story, its own
            colors, its own light. These photos capture a few moments from parks
            that have left their mark on me.
            Nature has been something I have always been obsessed with 
          </p>
        </div>
      </section> */}

      {/* Main Content */}
      <main className="pt-16 pb-20 px-6">
        <div className="container mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          {parks.map((park, index) => (
            <div
              key={index}
              className="bg-stone-900/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={park.image}
                  alt={park.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-white">{park.name}</h2>
                <p className="text-stone-300 text-lg">{park.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
