"use client";

import { useState } from "react";
import { Heart, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";

export function RsvpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section id="rsvp" title="¡Gracias!">
        <div className="text-center max-w-md mx-auto">
          <Heart className="mx-auto w-12 h-12 text-primary animate-pulse" />
          <p className="mt-4 text-lg">Tu respuesta ha sido recibida. ¡Nos vemos en la celebración!</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" title="Confirmación de asistencia" description="Por favor déjanos saber si podrás acompañarnos en esta fecha">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8 flex justify-center">
          <Button onClick={handleClick} size="lg">
            <Send className="mr-2 h-4 w-4" />
            Confirmar asistencia
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
