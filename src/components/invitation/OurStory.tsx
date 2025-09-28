import Image from "next/image";
import { Section } from "@/components/shared/Section";

export function OurStory() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/fondo.jpg')" }}
    >
      <Section id="story" title="Nuestra historia">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto bg-background/80 p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <Image
              src="/images/history.jpg"
              alt="Nuestra Historia"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover aspect-[3/4]"
              data-ai-hint="couple portrait sunset"
            />
          </div>
          <div className="md:w-1/2 text-justify space-y-4 text-lg text-foreground/80">
            <p>
              Our journey began on a crisp autumn evening, under a sky full of
              stars. What started with a shared laugh over a cup of coffee soon
              blossomed into a connection neither of us expected. We discovered a
              shared love for spontaneous road trips, quiet evenings with good
              books, and the simple joy of making each other smile.
            </p>
            <p>
              Con el amor que nos une, queremos recibir la bendición de Dios,
              acompañados por nuestros padres e hijos.
            </p>
            <p>
              Por esto te invitamos a celebrar el día más especial para nuestras
              vidas, el comienzo de nuestra historia.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
