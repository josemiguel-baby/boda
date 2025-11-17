import Image from "next/image";

export function FooterImage() {
  return (
    <div className="w-full">
      <Image
        src="/images/bottom.jpg"
        alt=""
        width={1920}
        height={1080}
        className="w-full h-auto"
        data-ai-hint="wedding decoration"
      />
    </div>
  );
}
