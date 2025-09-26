import { Countdown } from "@/components/invitation/Countdown";
import { DressCode } from "@/components/invitation/DressCode";
import { EventDetails } from "@/components/invitation/EventDetails";
import { Gallery } from "@/components/invitation/Gallery";
import { GiftRegistry } from "@/components/invitation/GiftRegistry";
import { Hero } from "@/components/invitation/Hero";
import { OurStory } from "@/components/invitation/OurStory";
import { RsvpForm } from "@/components/invitation/RsvpForm";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  // Set the wedding date to a future date for the countdown
  const weddingDate = new Date("2025-12-20T16:00:00");

  return (
    <div className="flex flex-col items-center px-4">
      <Hero />
      <OurStory />
      <Separator className="my-12 md:my-20" />
      <Countdown weddingDate={weddingDate} />
      <EventDetails />
      <Gallery />
      <DressCode />
      <GiftRegistry />
      <RsvpForm />
    </div>
  );
}
