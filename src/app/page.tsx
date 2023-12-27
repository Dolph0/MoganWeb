import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
import MyHeading from "@/components/HomePage/MyHeading";
import LinkedSections from "@/components/HomePage/LinkedSections";
import VideoSection from "@/components/HomePage/VideoSection";
import Card from "@/components/HomePage/Card";
import MyHeading2 from "@/components/HomePage/MyHeading2";
import Services from "@/components/HomePage/services";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <Services />
      <MyHeading2>Lorem ipsum dolor sit amet.</MyHeading2>
      <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4">
        <LinkedSections
          imageUrl="/Playa de Mogán.png"
          subtitle="hello subtitle "
          title="Playas"
        />
        <LinkedSections
          imageUrl="/Parking.png"
          subtitle="hello subtitle "
          title="Parking"
        />
        <LinkedSections
          imageUrl="/ZonaAzul.png"
          subtitle="hello subtitle "
          title="Zona Azul"
        />
        <LinkedSections
          imageUrl="/VPO.jpg"
          subtitle="hello subtitle "
          title="VPO"
        />
      </div>
      <div>
        <VideoSection />
      </div>
      <MyHeading>Últimas noticias.</MyHeading>
      <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4">
        <Card
          title="Hello world"
          subtitle="lorem ipsum dolor sit amet"
          imgSrc="https://source.unsplash.com/random/?pakistan&1"
        />
        <Card
          title="Hello world"
          subtitle="lorem ipsum dolor sit amet"
          imgSrc="https://source.unsplash.com/random/?pakistan&1"
        />
      </div>
    </div>
  );
}
