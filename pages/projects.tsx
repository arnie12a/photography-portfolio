import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"

// Project cover images
import portraitsCover from "../public/places/chicago/keitlin.jpg" // pick any portrait as cover

// Import your MailerLite component
import MailerLiteForm from "../pages/components/MailerLiteForm"

type Project = {
  title: string
  subtitle: string
  img: StaticImageData
  link: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portrait Photography",
      subtitle: "A collection of my favorite portraits.",
      img: portraitsCover,
      link: "/projects/portraits",
    },
    
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <Head>
        <title>Projects — Arnav Karnik Photography</title>
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
        bg-stone-950/80 backdrop-blur border-b border-stone-800 
        flex items-center justify-between">

        <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
          Arnav Karnik Photography
        </span>

        <Link
          href="/"
          className="text-stone-300 hover:text-white text-sm tracking-wide 
            border border-stone-700 px-4 py-1 rounded-lg 
            hover:bg-stone-800 transition-all"
        >
          ← Back
        </Link>
      </header>

      <main className="pt-[140px] pb-32 px-6 md:px-12 max-w-6xl mx-auto">

        {/* Page Title */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Projects
          </h1>

          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my photography projects.
          </p>

          <div className="mt-10 h-[2px] w-24 bg-stone-700 mx-auto"></div>
        </section>

        {/* PROJECTS GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block rounded-lg overflow-hidden border border-stone-800 hover:border-stone-600 transition-all"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold tracking-wide mb-2 group-hover:text-white transition">
                  {project.title}
                </h2>

                <p className="text-stone-400 text-sm leading-relaxed">
                  {project.subtitle}
                </p>

                <div className="mt-4 text-stone-500 text-xs tracking-widest uppercase group-hover:text-stone-300 transition">
                  View Project →
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-2xl mx-auto mt-32 px-8 py-20 text-center 
          bg-stone-900/40 rounded-xl border border-stone-800 shadow-xl">

          <h2 className="text-4xl font-light mb-4 tracking-tight">
            Stay Inspired
          </h2>

          <MailerLiteForm />
        </section>

      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
        Arnav Karnik Photography
      </footer>
    </div>
  )
}
