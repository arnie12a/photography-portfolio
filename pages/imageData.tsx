// Images
import landscape1 from "../public/landscape/chicagoSkyline.jpg"
import landscape2 from "../public/landscape/grandCanyon.jpeg"
import landscape3 from "../public/landscape/hanaleiBay.jpg"
import landscape4 from "../public/landscape/kalalauLookout.jpg"
import landscape5 from "../public/landscape/kauaiOcean.jpg"
import landscape6 from "../public/landscape/napaliCoast.jpg"
import landscape7 from "../public/landscape/rioCelesteWaterfall.jpg"
import landscape8 from "../public/landscape/smokeyMountainsSunset.jpg"
import landscape9 from "../public/landscape/smokeyMountains.jpg"
import landscape10 from "../public/landscape/theNarrows.jpg"
import landscape11 from "../public/landscape/waimeaCanyon.jpg"
import landscape12 from "../public/landscape/zionSunset.jpg"
import landscape13 from "../public/landscape/zionCarsBackdrop.jpg"

import people1 from "../public/people/arnie.jpg"
import people3 from "../public/people/lucas.jpg"
import people4 from "../public/people/nathan.jpg"
import people5 from "../public/people/alondraPoipu.jpg"
import { StaticImageData } from "next/image"
  
  const allImages: Array<{ 
    image: StaticImageData;
    title: string;
    description: string;
    key: number;
  }> = [
    {
        image: people1, 
        title: "Arnav Karnik",
        description: "Welcome to my Photography Portfolio.",
        key: 444
      },
      
      {
        image: landscape3, 
        title: "Hanelei Bay, Kauai",
        description: "My favorite place in Kauai",
        key: 3
      },
      {
        image: people5, 
        title: "Alondra",
        description: "On a morning stroll in Poipu",
        key: 555
      },
      {
        image: landscape4, 
        title: "Location: Kalalau Lookout",
        description: "Clear skies make for the best views here",
        key: 4
      },
      {
        image: landscape2, 
        title: "Grand Canyon National Park",
        description: "Hiked the South Kaibab Trail to Skeleton Point",
        key: 2
      },
      {
        image: landscape5, 
        title: "Ocean Shore in Princeville, Kauai",
        description: "Most beautiful turquoise water",
        key: 5
      },
      {
        image: landscape6, 
        title: "The Napali Coast",
        description: "What a stunning coastline showcasing natures sheer power",
        key: 6
      },
      {
        image: landscape8, 
        title: "Smokey Mountains National Park",
        description: "Best sunset I have ever captured",
        key: 8
      },
      
      {
        image: landscape11, 
        title: "Waimea Canyon State Park",
        description: "Photo By: Arnav Karnik",
        key: 11
      },
      {
        image: people3, 
        title: "Lucas",
        description: "Scavenging for which recipe to cook next",
        key: 333
      },
      {
        image: landscape10, 
        title: "Zion National Park: <i>The Narrows</i>",
        description: "Favorite hike",
        key: 110
      },
      {
        image: landscape7, 
        title: "Costa Rica: <i>Rio Celeste Waterfall</i>",
        description: "A chemical reaction allows for the baby blue water",
        key: 7
      },
      {
        image: people4, 
        title: "Nathan",
        description: "Searching for apples to make apple pie",
        key: 444
      },
      {
        image: landscape1, 
        title: "Chicago Skyline",
        description: "The beauty of human development",
        key: 1
      },
      {
        image: landscape9, 
        title: "Smokey Mountains National Park",
        description: "Looks like the valleys extend forever",
        key: 9
      },
      {
        image: landscape12, 
        title: "Zion National Park Sunset",
        description: "Love looking at the glowing vivid orange cliffs",
        key: 12
      },
      {
        image: landscape13, 
        title: "Zion National Park",
        description: "Felt like I was in the movie Cars",
        key: 13
      },
  ];
  export default allImages;