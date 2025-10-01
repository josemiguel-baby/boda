import { Shirt } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export function DressCode() {
  const pinterestLink = "https://pin.it/1xo70k2cG";

  return (
    <Section id="dress-code" title="Código de vestimenta" className="bg-cover bg-no-repeat rounded-lg shadow-lg" style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
      
      <div className=" max-w-2xl mx-auto text-center space-y-6">
        <p className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
          Coctel
        </p>
        
        <p className="text-lg text-muted-foreground">
        Amablemente les pedimos que cumplan con la vestimenta sugerida para que todos luzcan hermosos en nuestras fotos del recuerdo.
        </p>

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
    </Section>
  );
}
