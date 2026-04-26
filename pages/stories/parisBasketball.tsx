import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import parisBasketball from "../../public/stories/parisHoops/parisHoops.jpg"
import MailerLiteForm from "../../pages/components/MailerLiteForm"

export default function ParisBasketball() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Hooping In Paris — Arnav Karnik Photography</title>
      </Head>

      {/* Minimal Header */}
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

        {/* Hero Image */}
        <div className="relative w-full h-[60vh] md:h-[75vh]">
          <Image
            src={parisBasketball}
            alt="Paris Basketball Court"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title + Date */}
        <section className="max-w-3xl mx-auto px-6 md:px-0 mt-16 mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Hooping In Paris
          </h1>

          <p className="text-stone-400 uppercase tracking-widest text-xs">
            August 1st, 2025
          </p>

          <div className="mt-6 h-[2px] w-20 bg-stone-700 mx-auto"></div>
        </section>

        {/* Story Content */}
        <article className="max-w-3xl mx-auto px-6 md:px-0 text-lg leading-relaxed text-stone-300 space-y-8">

          <p>
            After eating ramen and visiting the Parc des Princes, I was on my way back to my hotel when I heard some basketballs bouncing. I turned my head to the left and saw this stunning masterpiece — just a bunch of guys playing ball with the Eiffel Tower in the background. To think that these guys come here every week for runs really made me jealous. With this thought in mind, I immediately took out my camera and started shooting away.
          </p>

          <p>
            After packing up my camera, I started to walk back to my hotel when a thought crossed my mind: “Should I go hoop right now?” And I knew the answer right away. So I went to the first guy on the side court and asked, using my hands, if he had next because he did not speak English. And just like that, I was on the court playing with guys that were only speaking French.
          </p>

          <p>
            The coolest part was that they would argue, bicker, and joke all in French. I did not understand a single thing they were saying, but through basketball I honestly understood everything that was going on. Except the score, of course, which I had to ask every couple of minutes — and I would still not understand.
          </p>

          <p>
            It was my first experience seeing how sports transcend the language barrier. No matter where you come from, the love for the game is the same.
          </p>

          <p>
            Of all the things I did in Paris, this was my number one experience. I highly recommend any hooper check out this basketball court on their visit to the City of Love.
          </p>

        </article>

        {/* Newsletter Signup */}
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
