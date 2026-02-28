import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Import your animal photos here
import goat from "../public/animals/hilton.jpg"
import tiger from "../public/animals/elephant.jpg"
import bird from "../public/animals/highlandCow.jpg"
import elephant from "../public/animals/dotter.jpg"
import fox from "../public/animals/goat.jpg"


// Replace with your favorite hero image
import heroImage from "../public/animals/goat.jpg"

export default function Animals() {
  const animalPhotos = [
    { src: goat, alt: "Goat" },
    { src: tiger, alt: "Tiger" },
    { src: bird, alt: "Bird" },
    { src: elephant, alt: "Elephant" },
    { src: fox, alt: "Fox" },
    // Add more photos here
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Animals — Arnav Karnik Photography</title>
        <meta name="description" content="Animal photography by Arnav Karnik" />
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

      <main className="pt-[110px] pb-20">

        {/* Hero Image */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={heroImage}
            alt="Animals Hero"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="absolute bottom-10 left-10 text-5xl font-bold">
            Animals
          </h1>
        </div>

        {/* Photo Grid */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animalPhotos.map((photo, i) => (
              <div key={i} className="relative h-72 rounded-lg overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
