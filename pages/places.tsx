// import Head from "next/head"
// import Link from "next/link"
// import Image from "next/image"

// // Import your place images
// import parisImg from "../public/structures/parisBasketball.jpg"
// import dolomitesImg from "../public/places/dolomites/dolomites2.jpg"
// import indiaImg from "../public/places/india/mumbaiSkyline.jpg"
// import sriLankaImg from "../public/places/srilanka/closeElephant.jpg"
// import hawaiiImg from "../public/places/hawaii/hanaleiBay.jpg"
// import madisonImg from "../public/places/madison/mendota.jpg"
// import portugalImg from "../public/places/portugal/lisbon1.jpg"
// import chicagoImg from "../public/places/chicago/chicagoSkyline.jpg"

// import { title } from "process"

// export default function Places() {
//   const places = [
   
//     {
//       title: "Dolomites",
//       subtitle: "Italy’s jagged giants at sunrise.",
//       img: dolomitesImg,
//       link: "/places/dolomites",
//     },
//     {
//         title: "India",
//         subtitle: "Check out my two month trip across India in 2024.",
//         img: indiaImg, // Placeholder image, replace with an actual photo from India
//         link: "/places/india",
//     },
//     {
//         title: "Sri Lanka",
//         subtitle: "Such a beautiflul country with so much to offer.",
//         img: sriLankaImg, // Placeholder image, replace with an actual photo from Sri Lanka
//         link: "/places/srilanka",
//     },
//     {
//         title: "Hawaii", 
//         subtitle: "Here are photos from my adventures in Kauai and O'ahu.",
//         img: hawaiiImg, // Placeholder image, replace with an actual photo from Hawaii
//         link: "/places/hawaii",
//     },
//     {
//         title: "Madison, Wisconsin",
//         subtitle: "My college town, full of charm and character.",
//         img: madisonImg, // Placeholder image, replace with an actual photo from Madison
//         link: "/places/madison",
//     },
//     {
//         title: "Portugal",
//         subtitle: "From Lisbon to Porto, a country of vibrant culture and stunning views.",
//         img: portugalImg, // Placeholder image, replace with an actual photo from Portugal
//         link: "/places/portugal",
//     },
//     {
//         title: "Chicago",
//         subtitle: "The Windy City, captured through my lens.",
//         img: chicagoImg, // Placeholder image, replace with an actual photo from Chicago
//         link: "/places/chicago",
//     },
    

//     // Add more places here
//   ]

//   return (
//     <div className="min-h-screen bg-stone-950 text-stone-200">
//       <Head>
//         <title>Places — Arnav Karnik Photography</title>
//         <meta name="description" content="Places I've photographed" />
//         <link rel="icon" href="/camera.png" />
//       </Head>

//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full z-20 h-[90px] px-10 
//         bg-stone-950/80 backdrop-blur border-b border-stone-800 
//         flex items-center justify-between">

//         {/* Left: Title */}
//         <span className="uppercase text-xl md:text-2xl font-semibold tracking-[0.35em] text-stone-300">
//           Arnav Karnik Photography
//         </span>

//         {/* Right: Back Button */}
//         <Link
//           href="/"
//           className="text-stone-300 hover:text-white text-sm tracking-wide 
//             border border-stone-700 px-4 py-1 rounded-lg 
//             hover:bg-stone-800 transition-all"
//         >
//           ← Back
//         </Link>
//       </header>

//       <main className="pt-[110px] pb-20 w-full px-6 lg:px-10">
//         <h1 className="text-3xl font-bold mb-10 text-center">Places</h1>

//         {/* Full-width grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {places.map((place, i) => (
//             <Link
//               key={i}
//               href={place.link}
//               className="group rounded-xl overflow-hidden bg-stone-900 
//                 border border-stone-800 hover:border-stone-600 transition"
//             >
//               <div className="relative h-56 w-full">
//                 <Image
//                   src={place.img}
//                   alt={place.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               <div className="p-4">
//                 <h4 className="text-xl font-semibold">{place.title}</h4>
//                 <p className="text-stone-400 text-sm mt-1">{place.subtitle}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>

//       <footer className="h-[90px] flex justify-center items-center uppercase 
//         text-xs tracking-[0.3em] text-stone-600 border-t border-stone-800">
//         Arnav Karnik Photography
//       </footer>
//     </div>
//   )
// }
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

// Import your place images
import parisImg from "../public/structures/parisBasketball.jpg"
import dolomitesImg from "../public/places/dolomites/dolomites2.jpg"
import indiaImg from "../public/places/india/mumbaiSkyline.jpg"
import sriLankaImg from "../public/places/srilanka/closeElephant.jpg"
import hawaiiImg from "../public/places/hawaii/hanaleiBay.jpg"
import madisonImg from "../public/places/madison/mendota.jpg"
import portugalImg from "../public/places/portugal/lisbon1.jpg"
import chicagoImg from "../public/places/chicago/chicagoSkyline.jpg"

export default function Places() {
  const places = [
    {
      title: "Hawaii",
      subtitle: "Here are photos from my adventures in Kauai and O'ahu.",
      img: hawaiiImg,
      link: "/places/hawaii",
      date: "2026-03-01",
    },
    {
      title: "Chicago",
      subtitle: "The Windy City, captured through my lens.",
      img: chicagoImg,
      link: "/places/chicago",
      date: "2026-01-01", // currently living there
    },
    {
      title: "Portugal",
      subtitle: "From Lisbon to Porto, a country of vibrant culture and stunning views.",
      img: portugalImg,
      link: "/places/portugal",
      date: "2024-06-01",
    },
    {
      title: "India",
      subtitle: "Check out my two month trip across India in 2024.",
      img: indiaImg,
      link: "/places/india",
      date: "2024-04-01",
    },
    {
      title: "Sri Lanka",
      subtitle: "Such a beautiful country with so much to offer.",
      img: sriLankaImg,
      link: "/places/srilanka",
      date: "2024-03-01",
    },
    {
      title: "Madison, Wisconsin",
      subtitle: "My college town, full of charm and character.",
      img: madisonImg,
      link: "/places/madison",
      date: "2023-12-01",
    },
    {
      title: "Dolomites",
      subtitle: "Italy’s jagged giants at sunrise.",
      img: dolomitesImg,
      link: "/places/dolomites",
      date: "2023-08-01",
    },
  ]

  // Sort newest → oldest
  const sortedPlaces = places.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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

      <main className="pt-[110px] pb-20 w-full px-6 lg:px-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Places</h1>

        {/* Full-width grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedPlaces.map((place, i) => (
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
