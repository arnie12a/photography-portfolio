import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import heroImage from "../public/structures/oldTraffordStadium.jpg"

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Contact — Arnav Karnik Photography</title>
        <meta name="description" content="Contact Arnav Karnik Photography" />
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

      {/* Main Content */}
      <main className="pt-[110px]">

        {/* Background Image */}
        <div className="relative w-full h-[70vh]">
          <Image
            src={heroImage}
            alt="Contact Background"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Split Contact Section */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-transparent backdrop-blur-md p-10 rounded-lg w-[90%] max-w-4xl shadow-xl">

              <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* LEFT SIDE — CONTACT INFO */}
                <div className="space-y-6 text-stone-300">
                  <h3 className="text-2xl font-light tracking-tight">Reach Out</h3>

                  <p className="text-lg">
                    <span className="font-semibold text-white">Phone:</span><br />
                    847‑558‑0060
                  </p>

                  <p className="text-lg">
                    <span className="font-semibold text-white">Email:</span><br />
                    arnav.n.karnik@gmail.com
                  </p>
                </div>

                {/* RIGHT SIDE — FORM */}
                <form
                  action="https://formsubmit.co/arnav.n.karnik@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded bg-stone-800/40 text-stone-200 
                               border border-stone-700/50 focus:outline-none focus:border-white"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded bg-stone-800/40 text-stone-200 
                               border border-stone-700/50 focus:outline-none focus:border-white"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded bg-stone-800/40 text-stone-200 
                               border border-stone-700/50 focus:outline-none focus:border-white"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-white text-stone-900 font-semibold py-3 rounded 
                               hover:bg-opacity-90 transition"
                  >
                    Send Message
                  </button>

                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
                </form>

              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
