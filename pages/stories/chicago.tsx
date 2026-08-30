import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import MailerLiteForm from "../../pages/components/MailerLiteForm"

// Images
import chicagoSkyline from "../../public/places/chicago/chicagoSkyline.jpg"
import britannica from "../../public/places/chicago/brittanica.jpg"
import planetariumSkyline from "../../public/places/chicago/planetariumSkyline.jpg"

export default function ChicagoStory() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Chicago — Arnav Karnik Photography</title>
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

      <main className="pt-[120px] pb-32">

        {/* Title */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-16 mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Chicago
          </h1>
          <div className="mt-6 h-[2px] w-20 bg-stone-700 mx-auto"></div>
        </section>

        {/* Intro Text — EXACTLY as you wrote it */}
        <article className="max-w-3xl mx-auto px-6 md:px-0 text-lg leading-relaxed text-stone-300 space-y-8">
          <p>
            As I step into this next chapter in my life I thought I would talk about Chicago. It all started when my parents immigrated to the United States from India in the late 1990s for their jobs. Of all the places they could go, they decided Chicago would be home. 
          </p>

          <p>
            Growing up in the Chicago suburbs, I spent all my time either playing soccer, basketball, or baseball. So in my youth I did not have much time to explore the city but when we did we would always check these three places out. As to say, these three places have a really warm place in my heart. 
          </p>

          <p>
            As I have started my next chapter of my life in Boulder Colorado, I look forward to returning to these places with my friends & family. 
          </p>
        </article>

        {/* --- PHOTO SECTION 1 --- */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-20 space-y-6">
          <Image
            src={chicagoSkyline}
            alt="Chicago Skyline from Lakeshore path"
            className="rounded-lg object-cover w-full h-[55vh]"
            priority
          />
          <h2 className="text-3xl font-light tracking-tight">
            Chicago Skyline from Lakeshore path
          </h2>
          <p className="text-lg leading-relaxed text-stone-300">
            My favorite photo I have taken in Chicago because the seagull is literally looking at my camera and it just so happens to also be my favorite view as well. 
          </p>
        </section>

        {/* --- PHOTO SECTION 2 --- */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-20 space-y-6">
          <Image
            src={britannica}
            alt="Britannica building"
            className="rounded-lg object-cover w-full h-[55vh]"
          />
          <h2 className="text-3xl font-light tracking-tight">
            Britannica building
          </h2>
          <p className="text-lg leading-relaxed text-stone-300">
            In the summer time, Clark street gets closed off to cars and the restaurants open up their outdoor seating and it is just perfect. Sitting out with a drink and getting a bite to eat is such a vibe. But before heading to dinner here with my family, we would always sit across the Britannica building, watching people walk along the Chicago river and take their boats into Lake Michigan. Nights like this were my favorite in Chicago.   
          </p>
        </section>

        {/* --- PHOTO SECTION 3 --- */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-20 space-y-6">
          <Image
            src={planetariumSkyline}
            alt="Chicago Skyline from Planetarium"
            className="rounded-lg object-cover w-full h-[55vh]"
          />
          <h2 className="text-3xl font-light tracking-tight">
            Chicago Skyline from Planetarium
          </h2>
          <p className="text-lg leading-relaxed text-stone-300">
            I remember visiting the Adler Planetarium as a kid through summer camp and taking in this view. Ever since then I love to bike or run here and just relax watching the waves crash into the barriers.  
          </p>
        </section>

        {/* Newsletter */}
        <section className="max-w-2xl mx-auto mt-32 px-8 py-20 text-center 
          bg-stone-900/40 rounded-xl border border-stone-800 shadow-xl">

          <h2 className="text-4xl font-light mb-4 tracking-tight">
            Stay Inspired
          </h2>

          <p className="text-stone-300 mb-10 text-lg leading-relaxed">
            Get new stories, behind‑the‑scenes notes, and photo essays delivered to your inbox.
          </p>

          <MailerLiteForm />
        </section>

      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
