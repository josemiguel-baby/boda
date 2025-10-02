import { Shirt } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export function DressCode() {
  const pinterestLink = "https://pin.it/1xo70k2cG";

  return (
    
    <Section id="dress-code" className="bg-cover bg-no-repeat rounded-lg shadow-lg bg-bottom" style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
        <div className="bg-background/50 p-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">Código de vestimenta</h2>
          <div className=" max-w-2xl mx-auto text-center space-y-6">

            <p className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            <img src="/images/detalle.png" className="w-3 inline-block mx-2"></img>
            Coctel
            <img src="/images/detalle.png" className="w-3 inline-block mx-2" ></img>
            </p>
            
            <p className="text-lg text-muted-foreground">
            Amablemente les pedimos que cumplan con la vestimenta sugerida para que todos luzcan hermosos en nuestras fotos del recuerdo.
            </p>
            
            <div className="text-lg text-muted-foreground space-y-2">

              <div className="flex items-center justify-center gap-1">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>

                <span>Restricciones:</span>
              </div>
              <ul className="list-none p-0">
                <li>No Blue Jeans</li>
                <li>No zapatos de tacón de punta</li>
                <li>No franelas</li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground">
            Aqui puedes ver un enlace con ideas semejantes a lo que queremos.
            </p>
            
            <Button asChild>
              <a href={pinterestLink} target="_blank" rel="noopener noreferrer">
                <Shirt className="mr-2 h-4 w-4" />
                Ver ideas
              </a>
            </Button>
          </div>
        </div>
    </Section>
  );
}
