import { Shirt } from "lucide-react";
import { Section } from "@/components/shared/Section";

export function DressCode() {
  return (
    <Section id="dress-code" title="Código de vestimenta">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Shirt className="mx-auto w-12 h-12 text-primary" />
        <p className="text-lg text-muted-foreground">
          We kindly request our guests to dress in formal attire. We can't wait to celebrate with you in style!
        </p>
      </div>
    </Section>
  );
}
