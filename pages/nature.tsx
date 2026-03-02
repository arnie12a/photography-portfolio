"use client"

import Image from "next/image"
import Masonry from "react-masonry-css"
import LightGalleryComponent from "lightgallery/react"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import { useRef } from "react"

// Import your nature photos
import waterfall from "../public/landscape/dolomites2.jpg"
import forest from "../public/landscape/hanaleiBay.jpg"
import lake from "../public/landscape/auroville.jpg"
import canyon from "../public/landscape/dolomites2.jpg"

export default function Nature() {
  const lightboxRef = useRef<any>(null)

  const natureImages = [
    {
      image: waterfall,
      title: `<span class="text-2xl font-bold text-white">Hidden Waterfall</span>`,
      description: `<p class="text-base text-gray-300 mt-2">A secluded waterfall deep in the forest, untouched and echoing with the sound of falling water.</p>`,
    },
    {
      image: forest,
      title: `<span class="text-2xl font-bold text-white">Ancient Forest</span>`,
      description: `<p class="text-base text-gray-300 mt-2">A dense canopy of towering trees, home to countless species and centuries of quiet growth.</p>`,
    },
    {
      image: canyon,
      title: `<span class="text-2xl font-bold text-white">Red Canyon</span>`,
      description: `<p class="text-base text-gray-300 mt-2">Layers of red rock carved by wind and time, glowing at sunrise.</p>`,
    },
    {
      image: lake,
      title: `<span class="text-2xl font-bold text-white">Mirror Lake</span>`,
      description: `<p class="text-base text-gray-300 mt-2">A perfectly still lake reflecting the mountains around it like glass.</p>`,
    },
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 pt-24 px-4">

      <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10 text-center">
        Nature Photography
      </h1>

      {/* FULL-WIDTH GRID */}
      <div className="w-full px-2 sm:px-6 lg:px-12">

        <Masonry
          breakpointCols={{
            default: 3,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="flex gap-6 w-full"
        >
          {natureImages.map((img, index) => (
            <div className="relative" key={img.image.src}>
              <Image
                src={img.image}
                alt="nature"
                className="mb-6 hover:opacity-70 cursor-pointer rounded-lg"
                placeholder="blur"
              />

              {/* CLICK OVERLAY */}
              <div
                className="absolute inset-0 bg-transparent hover:bg-stone-900/10 cursor-pointer rounded-lg"
                onClick={() => lightboxRef.current?.openGallery(index)}
              ></div>
            </div>
          ))}
        </Masonry>

        {/* FULLSCREEN MODAL */}
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) lightboxRef.current = ref.instance
          }}
          download={false}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={natureImages.map((img) => ({
            src: img.image.src,
            thumb: img.image.src,
            subHtml: `
              <div class="lg-px-10 text-center">
                ${img.title}
                ${img.description}
              </div>
            `,
          }))}
        />
      </div>
    </div>
  )
}
