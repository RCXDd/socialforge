'use client';  // Add this line at the top of the file

import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.slice(1);
      const element = document.getElementById(targetId!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const productLink = document.querySelector('a[href="#products"]');
    productLink?.addEventListener('click', handleScroll);

    return () => {
      productLink?.removeEventListener('click', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              SocialForge
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <a 
              href="#products" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Products
            </a>
            <a 
              href="https://t.me/socialforgesupport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <Send className="mr-2 h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
