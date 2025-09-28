import { Shirt } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export function DressCode() {
  const pinterestLink = "https://www.pinterest.com/search/pins/?q=cocktail%20wedding%20attire"; // Replace with your Pinterest board URL

  return (
    <Section id="dress-code" title="Código de vestimenta">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Shirt className="mx-auto w-12 h-12 text-primary" />
        <p className="text-lg text-muted-foreground">
          Le pedimos amablamente que nos acompañen con un traje tipo coctel. We can't wait to celebrate with you in style!
        </p>
        <Button asChild>
          <a href={pinterestLink} target="_blank" rel="noopener noreferrer">
            Ver inspiración en Pinterest
          </a>
        </Button>
      </div>
    </Section>
  );
}
