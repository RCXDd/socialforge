'use client';

import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';

export default function ClientHome() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <ProductList />
    </main>
  );
}
