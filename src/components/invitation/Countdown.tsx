"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/shared/Section";

interface CountdownProps {
  weddingDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ weddingDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
    
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  if (!timeLeft) {
    return null;
  }

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <Section title="El gran día se esta acercando">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center justify-center bg-card p-6 rounded-lg shadow-md border border-primary/20">
            <span className="font-headline text-4xl md:text-6xl font-bold text-primary-foreground/90">{String(unit.value).padStart(2, "0")}</span>
            <span className="text-sm md:text-base text-muted-foreground">{unit.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
