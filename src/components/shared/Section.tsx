import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function Section({ children, title, description, className, ...props }: SectionProps) {
  return (
    <section className={cn("w-full container max-w-5xl py-12 md:py-20", className)} {...props}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>}
          {description && <p className="mt-2 text-lg text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
