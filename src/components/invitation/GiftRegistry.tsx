import { Gift } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export function GiftRegistry() {
  return (
    <Section id="gifts" title="Recepción de obsequios">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Gift className="mx-auto w-12 h-12 text-primary" />
        <p className="text-lg text-muted-foreground">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered a list of items we would love to have in our new home.
        </p>
      </div>
    </Section>
  );
}
