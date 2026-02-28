import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Replace with your India hero image
import indiaHero from "../../public/landscape/munnarFlower.jpg"

export default function IndiaStory() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>India — Short Story</title>
        <meta name="description" content="India photo story by Arnav Karnik" />
        <link rel="icon" href="/camera.png" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 h-[90px] px-10 bg-stone-950/80 backdrop-blur border-b border-stone-800 flex items-center justify-between">
        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/shortStories"
          className="rounded-3xl bg-white text-stone-900 px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition"
        >
          Back to Stories
        </Link>
      </header>

      <main className="pt-[110px] pb-20">

        {/* Hero Image */}
        <div className="relative w-full h-[70vh]">
          <Image
            src={indiaHero}
            alt="India"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="absolute bottom-10 left-10 text-5xl font-bold">
            India
          </h1>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto px-6 mt-12 space-y-6 text-lg leading-relaxed text-stone-300">
          <p>
            {/* Replace with your story text */}
            India is a land of color, chaos, and breathtaking beauty. Every corner
            reveals a new story — from bustling markets to quiet temples, from
            mountain villages to coastal sunsets.
          </p>

          <p>
            This collection captures the moments that stood out to me the most —
            the people, the landscapes, and the energy that makes India unlike
            anywhere else in the world.
          </p>

          {/* Add more images or text as needed */}
        </div>
      </main>
    </div>
  )
}
