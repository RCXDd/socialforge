'use client';

import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';
import GuideSection from '@/components/GuideSection';

export default function ClientHome() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <ProductList />
      <GuideSection />
    </main>
  );
}
