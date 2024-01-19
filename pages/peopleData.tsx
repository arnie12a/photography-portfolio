import people1 from "../public/people/arnie.jpg"
import people3 from "../public/people/lucas.jpg"
import people4 from "../public/people/nathan.jpg"
import people5 from "../public/people/alondraPoipu.jpg"
import { StaticImageData } from "next/image"
  
  const peopleImages: Array<{ 
    image: StaticImageData;
    title: string;
    description: string;
    key: number;
  }> = [
    {
        image: people1, 
        title: "Arnav Karnik",
        description: "Welcome to my Photography Portfolio.",
        key: 1110
      },
      {
        image: people3, 
        title: "Lucas",
        description: "Scavenging for which recipe to cook next",
        key: 3330
      },
      {
        image: people5, 
        title: "Alondra",
        description: "On a morning stroll in Poipu",
        key: 5550
      },
      {
        image: people4, 
        title: "Nathan",
        description: "Searching for apples to make apple pie",
        key: 4440
      },
  ];
  
  
  export default peopleImages;