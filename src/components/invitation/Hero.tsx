import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <Image
        src="/images/top.jpg"
        alt="Wedding header image"
        fill
        className="object-cover"
        priority
        data-ai-hint="wedding decoration"
      />
    </div>
  );
}
