'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Wallet, Bitcoin, DollarSign } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'FB USA ACCOUNTS',
    variants: [
      { name: 'USA Normal', price: '35 €', features: ['Proxy + Documents', 'Perfect for Business Managers'] },
      { name: 'USA Light', price: '7 €', features: ['Only for advertising'] }
    ],
    description: 'High-quality Facebook accounts for USA market',
  },
  {
    id: 2,
    name: 'FACEBOOK BUSINESS MANAGERS',
    variants: [
      { name: 'Verified Aged BM (2018-2023)', price: '110 €', features: ['$250 Daily Spending Limit'] },
      { name: 'Verified Business Manager', price: '90 €', features: ['$250 Daily Spending Limit'] },
      { name: 'Aged Business Manager (2018-2023)', price: '35 €', features: ['$250 Daily Spending Limit'] },
      { name: 'Standard Business Manager', price: '25 €', features: ['$250 Daily Spending Limit'] },
      { name: 'Basic Business Manager', price: '18 €', features: ['$50 Daily Spending Limit'] }
    ],
    description: 'Various types of Facebook Business Managers for your needs. All Business Managers have $250 Daily Spend Limit. Ad Accounts start with $50-150 DSL and grow up to $250 DSL with compliant use. Ad Account creation limit starts at 1-2 and grows up to 5.',
  },
  {
    id: 3,
    name: 'FACEBOOK FAN PAGE',
    variants: [
      { name: 'Reinstated Fan Page', price: '40 €', features: ['Followers 150+'] }
    ],
    description: 'Reinstated Fan Page with 150+ followers',
  },
  {
    id: 4,
    name: 'TIKTOK BUSINESS ACCOUNTS',
    variants: [
      { name: 'TikTok Verified USA', price: '55 €', features: ['Green Tick'] },
      { name: 'TikTok USA Postpay', price: '25 €', features: [] }
    ],
    description: 'TikTok business accounts for your marketing needs',
  },
  {
    id: 5,
    name: 'PROXY',
    variants: [
      { name: '30 days', price: '7 €', features: ['USA Proxy'] },
      { name: '60 days', price: '13 €', features: ['USA Proxy'] },
      { name: '90 days', price: '18 €', features: ['USA Proxy'] }
    ],
    description: 'USA proxies for various durations',
  },
  {
    id: 6,
    name: 'ACCOUNT SETUP SERVICE',
    variants: [
      { name: 'Setup Basic', price: '55 €', features: ['Browser + Proxy'] },
      { name: 'Setup Standard', price: '75 €', features: ['Browser + Proxy + BM'] },
      { name: 'Setup Premium', price: '110 €', features: ['Browser + Proxy + BM + Page + Campaign'] }
    ],
    description: 'Complete setup services for your accounts',
  },
];

export default function ProductPageContent({ id }: { id: string }) {
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      const productId = parseInt(id);
      const foundProduct = products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedVariant(foundProduct.variants[0].name);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const currentVariant = product.variants.find((v: any) => v.name === selectedVariant) || product.variants[0];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
          <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">{product.name}</h1>
              <p className="text-gray-300 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-indigo-400 mb-2">{currentVariant.price}</h2>
                <p className="text-gray-400 mb-4">/ {currentVariant.name}</p>
                <Select onValueChange={setSelectedVariant} defaultValue={selectedVariant}>
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    {product.variants.map((variant: any) => (
                      <SelectItem key={variant.name} value={variant.name}>
                        {variant.name} - {variant.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  {currentVariant.features.map((feature: string, index: number) => (
                    <li key={index} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Wallet className="mr-2 h-6 w-6" />
                Pay with Crypto
              </Button>

              <div className="mt-4 text-center text-gray-400 flex items-center justify-center space-x-2">
                <Bitcoin className="h-5 w-5 text-yellow-500" />
                <DollarSign className="h-5 w-5 text-green-400" />
                <span>We accept various cryptocurrencies including Bitcoin, USDT, and more!</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
