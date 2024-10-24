'use client';

import { Button } from "@/components/ui/button"
import { ArrowRight, Info } from "lucide-react"
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent">
                Bulletproof Mediabuying Setups
              </span>
            </h1>
            <p className="text-2xl font-semibold text-gray-300 mb-6">
              Stop Getting Banned. Start Scaling.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl mx-auto">
              Unlock unparalleled performance with our premium Facebook and TikTok assets. 
              Best quality, unbeatable prices, and rock-solid reliability for unstoppable campaigns.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white" onClick={scrollToProducts}>
                Explore Assets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-indigo-300 border-indigo-500 hover:bg-indigo-950" onClick={() => setIsModalOpen(true)}>
                How It Works
                <Info className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How It Works</DialogTitle>
            <DialogDescription>
              <ol className="list-decimal list-inside space-y-2 mt-4">
                <li>Browse our curated selection of premium social media assets.</li>
                <li>Choose the bulletproof setup that matches your campaign needs.</li>
                <li>Complete your purchase securely with cryptocurrency.</li>
                <li>Receive your high-quality assets promptly and discreetly.</li>
                <li>Deploy your campaigns with confidence, knowing you&apos;re backed by the best.</li>
                <li>Scale your media buying efforts without the fear of bans or restrictions.</li>
              </ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
