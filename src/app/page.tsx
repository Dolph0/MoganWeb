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
      <MyHeading2
        title={<span>Esto es lo que nos une.</span>}
        paragraph={<span>Nuestro compromiso.</span>}
      />
      <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4">
        <LinkedSections
          imageUrl="/Playa de Mogán.png"
          subtitle="Tu pequeño paraiso."
          title="Playas"
        />
        <LinkedSections
          imageUrl="/Parking.png"
          subtitle="Accesos ilimitados."
          title="Parking"
        />
        <LinkedSections
          imageUrl="/ZonaAzul.png"
          subtitle="Parquímetro en tu mano."
          title="Zona Azul"
        />
        <LinkedSections
          imageUrl="/VPO.png"
          subtitle="Promociones de viviendas."
          title="VPO"
        />
      </div>
      <div>
        <VideoSection />
      </div>
      <MyHeading>Últimas noticias.</MyHeading>
      <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4">
        <Card
          title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
          subtitle="El Ayuntamiento de Mogán ha instalado este viernes nuevas hamacas y sombrillas en la playa de Mogán, dando comienzo con ello a la gestión directa de los servicios de temporada de esta y las otras seis playas para las que ostenta la autorización correspondiente: Las Marañuelas, Costa Alegre, Taurito, El Cura, Aquamarina y Patalavaca."
          imgSrc="/1.png"
        />
        <Card
          title="Onalia Bueno da la bienvenida al nuevo personal de las playas."
          subtitle="El pasado miércoles Viernes 27 de enero. La alcaldesa de Mogán, Onalia Bueno, ha dado la bienvenida a la nueva plantilla de profesionales que realizarán las funciones de salvamento, alquiler de sombrillas y hamacas y mantenimiento en las playas que el Ayuntamiento tiene concesionadas por la Demarcación de Costas de Canarias."
          imgSrc="/2.png"
        />
        <Card
          title="Mogán estrena oficina virtual tributaria."
          subtitle="Desde este jueves 2 de marzo está disponible la app Oficina Tributaria de Mogán con la que realizar el pago directo de tributos y, en definitiva, desde la que los contribuyentes pueden acceder a toda su información tributaria. Es la primera de Canarias de estas características."
          imgSrc="/4.png"
        />
      </div>
    </div>
  );
}
