import { Shirt } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.017 1.992c-5.44 0-8.216 3.424-8.216 7.065 0 2.654 1.532 5.343 3.658 6.151.46.17.68-.123.733-.33.063-.25.22-.88.28-1.12.073-.28.04-.42-.17-.718-.51-.718-.87-1.58-.87-2.6 0-2.31 1.68-4.21 4.35-4.21 2.38 0 3.73 1.34 3.73 3.32 0 2.5-1.13 5.44-2.8 5.44-1.1 0-1.92-1.02-1.66-2.22.3-1.4.9-2.8.9-3.8 0-1.03-.52-1.9-1.55-1.9-1.2 0-2.1.9-2.1 2.1 0 .78.25 1.63.58 2.18.06.1.07.18.05.28l-.2 1c-.1.4-.23.78-.37.98-.4.58-1 1-1.6 1.5-.78.58-.9 1.48-.48 2.22.42.74 1.45 1.05 2.33.8 1.15-.3 2.15-1.4 3.1-2.4 1.3-1.4 2-3 2-5 0-3.4-2.5-6.5-6.5-6.5z" />
  </svg>
);

export function DressCode() {
  const pinterestLink = "https://www.pinterest.com/search/pins/?q=cocktail%20wedding%20attire"; // Replace with your Pinterest board URL

  return (
    <Section id="dress-code" title="Código de vestimenta">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <Shirt className="mx-auto w-12 h-12 text-primary" />
        <p className="text-lg text-muted-foreground">
          Le pedimos amablamente que nos acompañen con un traje tipo coctel. We can't wait to celebrate with you in style!
        </p>
        <Button asChild>
          <a href={pinterestLink} target="_blank" rel="noopener noreferrer">
            <PinterestIcon className="mr-2 h-5 w-5" />
            Ver inspiración en Pinterest
          </a>
        </Button>
      </div>
    </Section>
  );
}
