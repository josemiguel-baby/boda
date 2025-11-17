
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ClientLayout } from '@/components/shared/ClientLayout';

const pageTitle = "Yeremy y María";
const pageDescription = "Te invitamos a celebrar nuestra boda.";
const pageUrl = "https://yeremyymaria.com"; // Reemplaza con tu dominio final

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body text-foreground antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
