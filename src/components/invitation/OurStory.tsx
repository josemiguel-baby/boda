import Image from "next/image";
import { Section } from "@/components/shared/Section";

export function OurStory() {
  return (
      <Section id="story" title="Nuestra historia">
        <div className="bg-cover bg-center bg-no-repeat rounded-lg"  style={{ backgroundImage: "url('/images/fondo.jpg')" }} >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto bg-background/60 p-8 rounded-lg shadow-lg">
          
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
            &emsp;&emsp;Cuando nos conocimos entendimos que nos uniría algo más fuerte que el tiempo y la distancia. Hoy damos gracias a Dios por haberlas sabido superar con mucha paciencia y amor, y por habernos hecho coincidir en el camino y empezar una vida juntos.
            </p>
            <p>
            &emsp;&emsp;Por eso con el amor que nos une, queremos recibir la bendición de Dios,
              acompañados por nuestros padres e hijos.
            </p>
            <p>
            &emsp;&emsp;Por esto te invitamos a celebrar el día más especial para nuestras
              vidas, el comienzo de nuestra historia.
            </p>
          </div>
        </div>
        </div>
      </Section>
  );
}
