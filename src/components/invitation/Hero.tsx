import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/top.jpg"
        alt="Couple celebrating their wedding"
        fill
        className="object-cover"
        priority
        data-ai-hint="wedding couple"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg break-words">
          María de Lourdes Blanco Yañez y Yeremy Alexander Padilla Montilla
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          ¡Nos casamos!
        </p>
        <p className="mt-2 text-xl md:text-3xl font-semibold tracking-wider drop-shadow-md">
          20.12.2025
        </p>
      </div>
    </div>
  );
}
