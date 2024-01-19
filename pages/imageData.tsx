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

const landscapeImages: Array<{ 
    image: StaticImageData;
    title: string;
    description: string;
  }> = [
    {
      image: landscape1, 
      title: "Chicago Skyline",
      description: "The beauty of human development",
    },
    {
      image: landscape10, 
      title: "Zion National Park: <i>The Narrows</i>",
      description: "Favorite hike",
    },
    {
      image: landscape2, 
      title: "Grand Canyon National Park",
      description: "Hiked the South Kaibab Trail to Skeleton Point",
    },
    {
      image: landscape3, 
      title: "Hanelei Bay, Kauai",
      description: "My favorite place in Kauai",
    },
    {
      image: landscape4, 
      title: "Location: Kalalau Lookout",
      description: "Clear skies make for the best views here",
    },
    {
      image: landscape5, 
      title: "Ocean Shore in Princeville, Kauai",
      description: "Most beautiful turquoise water",
    },
    {
      image: landscape6, 
      title: "The Napali Coast",
      description: "What a stunning coastline showcasing natures sheer power",
    },
    {
      image: landscape7, 
      title: "Costa Rica: <i>Rio Celeste Waterfall</i>",
      description: "A chemical reaction allows for the baby blue water",
    },
    {
      image: landscape8, 
      title: "Smokey Mountains National Park Sunset",
      description: "Best sunset I have ever captured",
    },
    {
      image: landscape9, 
      title: "Smokey Mountains National Park",
      description: "Looks like the valleys extend forever",
    },
    {
      image: landscape11, 
      title: "Waimea Canyon State Park",
      description: "Photo By: Arnav Karnik",
    },
    {
      image: landscape12, 
      title: "Zion National Park Sunset",
      description: "Love looking at the glowing vivid orange cliffs",
    },
    {
      image: landscape13, 
      title: "Zion National Park",
      description: "Felt like I was in the movie Cars",
    },
    
  ];
  
  const peopleImages: Array<{ 
    image: StaticImageData;
    title: string;
    description: string;
  }> = [
    {
        image: people1, 
        title: "Arnav Karnik",
        description: "Welcome to my Photography Portfolio.",
      },
      {
        image: people3, 
        title: "Lucas",
        description: "Scavenging for which recipe to cook next",
      },
      {
        image: people5, 
        title: "Alondra",
        description: "On a morning stroll in Poipu",
      },
      {
        image: people4, 
        title: "Nathan",
        description: "Searching for apples to make apple pie",
      },
  ];
  
  const allImages: Array<{ 
    image: StaticImageData;
    title: string;
    description: string;
  }> = [
    {
        image: people1, 
        title: "Arnav Karnik",
        description: "Welcome to my Photography Portfolio.",
      },
      
      {
        image: landscape3, 
        title: "Hanelei Bay, Kauai",
        description: "My favorite place in Kauai",
      },
      {
        image: people5, 
        title: "Alondra",
        description: "On a morning stroll in Poipu",
      },
      {
        image: landscape4, 
        title: "Location: Kalalau Lookout",
        description: "Clear skies make for the best views here",
      },
      {
        image: landscape2, 
        title: "Grand Canyon National Park",
        description: "Hiked the South Kaibab Trail to Skeleton Point",
      },
      {
        image: landscape5, 
        title: "Ocean Shore in Princeville, Kauai",
        description: "Most beautiful turquoise water",
      },
      {
        image: landscape6, 
        title: "The Napali Coast",
        description: "What a stunning coastline showcasing natures sheer power",
      },
      {
        image: landscape8, 
        title: "Smokey Mountains National Park",
        description: "Best sunset I have ever captured",
      },
      
      {
        image: landscape11, 
        title: "Waimea Canyon State Park",
        description: "Photo By: Arnav Karnik",
      },
      {
        image: people3, 
        title: "Lucas",
        description: "Scavenging for which recipe to cook next",
      },
      {
        image: landscape10, 
        title: "Zion National Park: <i>The Narrows</i>",
        description: "Favorite hike",
      },
      {
        image: landscape7, 
        title: "Costa Rica: <i>Rio Celeste Waterfall</i>",
        description: "A chemical reaction allows for the baby blue water",
      },
      {
        image: people4, 
        title: "Nathan",
        description: "Searching for apples to make apple pie",
      },
      {
        image: landscape1, 
        title: "Chicago Skyline",
        description: "The beauty of human development",
      },
      {
        image: landscape9, 
        title: "Smokey Mountains National Park",
        description: "Looks like the valleys extend forever",
      },
      {
        image: landscape12, 
        title: "Zion National Park Sunset",
        description: "Love looking at the glowing vivid orange cliffs",
      },
      {
        image: landscape13, 
        title: "Zion National Park",
        description: "Felt like I was in the movie Cars",
      },
  ];
  export { landscapeImages, peopleImages, allImages };