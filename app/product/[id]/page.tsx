'use client';

import React from 'react';
import ProductPageContent from '@/components/ProductPageContent';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <ProductPageContent id={params.id} />
    </div>
  );
}
