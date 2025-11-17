
"use client";

import { useState, useEffect } from 'react';
import { Loader } from '@/components/shared/Loader';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide loader after a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <main className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
    </>
  );
}
