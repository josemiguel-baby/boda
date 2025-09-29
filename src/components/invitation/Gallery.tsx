import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function Gallery() {
  const images = PlaceHolderImages;

  return (
    <Section id="gallery" title="Galeria" description="Algunos de nuestros momentos.">
       <div className="bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
        <div className="bg-background/60 p-4 md:p-8 rounded-lg shadow-lg">
          <div className="columns-2 md:columns-3 gap-4">
            {images.map((image, index) => (
              <div key={image.id} className="mb-4 break-inside-avoid">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={index % 2 === 0 ? 400 : 600}
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
