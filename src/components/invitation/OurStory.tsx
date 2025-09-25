import Image from "next/image";
import { Section } from "@/components/shared/Section";

export function OurStory() {
  return (
    <Section id="story" title="Nuestra historia">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
        <div className="md:w-1/2">
          <Image
            src="/images/our_story.jpg"
            alt="Nuestra Historia"
            width={600}
            height={800}
            className="rounded-lg shadow-lg object-cover aspect-[3/4]"
            data-ai-hint="couple portrait sunset"
          />
        </div>
        <div className="md:w-1/2 text-left space-y-4 text-lg text-foreground/80">
          <p>
            Our journey began on a crisp autumn evening, under a sky full of stars. What started with a shared laugh over a cup of coffee soon blossomed into a connection neither of us expected. We discovered a shared love for spontaneous road trips, quiet evenings with good books, and the simple joy of making each other smile.
          </p>
          <p>
            Through every chapter of our lives, we've been each other's biggest supporters and best friends. We've built a life filled with love, adventure, and countless cherished memories.
          </p>
          <p>
            Now, we're thrilled to start our next chapter as husband and wife, and we can't wait to celebrate this special moment with you, our dearest family and friends.
          </p>
        </div>
      </div>
    </Section>
  );
}
