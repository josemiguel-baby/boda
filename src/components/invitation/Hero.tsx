import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/wedding-hero/1920/1080"
        alt="Couple celebrating their wedding"
        fill
        className="object-cover"
        priority
        data-ai-hint="wedding couple"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
          Carlos & Francisbel
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Are getting married
        </p>
        <p className="mt-2 text-xl md:text-3xl font-semibold tracking-wider drop-shadow-md">
          20.09.2025
        </p>
      </div>
    </div>
  );
}
