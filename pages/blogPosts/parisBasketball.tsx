import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import parisHoopsPhoto from "../../public/blogPhotos/parisHoops.jpg"

export default function ParisHoopsPost() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Basketball in Paris | Arnav Karnik</title>
        <meta name="description" content="Playing pickup basketball in Paris with the Eiffel Tower in the background." />
      </Head>

      {/* Header */}
      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10 bg-stone-950/80 backdrop-blur">
        <Link href="/" className="uppercase text-sm tracking-widest hover:text-white transition">
          ← Back
        </Link>
        <span className="uppercase text-xl tracking-[0.3em] text-stone-300">
          Arnav Karnik Photography
        </span>
        <div />
      </header>

      {/* Content */}
      <main className="pt-[120px] pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Cover Image */}
          <div className="mb-10">
            <Image
              src={parisHoopsPhoto}
              alt="Basketball court in Paris with Eiffel Tower in the background"
              className="rounded-xl"
              placeholder="blur"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-semibold mb-3 text-white">
            Basketball in Paris
          </h1>

          {/* Date */}
          <p className="text-sm text-stone-400 mb-8">August 1st, 2025</p>

          {/* Blog Text */}
          <div className="space-y-6 leading-relaxed text-lg text-stone-300">
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
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
          Arnav Karnik Photography
        </footer>
    </div>
  )
}
