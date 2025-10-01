import Image from "next/image";

export function Hero() {
  return (
    <div className="w-full">
      <Image
        src="/images/top_myy.jpg"
        alt="María y Yeremy"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
        data-ai-hint="wedding decoration"
      />
    </div>
  );
}
