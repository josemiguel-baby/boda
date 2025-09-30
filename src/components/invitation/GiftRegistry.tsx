import { Gift } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export function GiftRegistry() {
  return (
    <Section id="gifts" title="Recepción de obsequios">
      <div className="bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: "url('/images/birds.jpg')" }}>
        <div className="bg-background/70 p-8 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Gift className="mx-auto w-12 h-12 text-primary" />
            <p className="text-lg text-muted-foreground">
              Su presencia en nuestra boda será el mejor regalo. Pero si desean darnos otro obsequio, en la recepción tendremos una caja de sobres.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
