import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Music2, Shield, Users, Settings } from "lucide-react";

const products = [
  { 
    id: 1, 
    name: 'FB USA ACCOUNTS', 
    price: 'Starting at 7 €', 
    description: 'High-quality Facebook accounts for USA market',
    variants: ['USA Normal', 'USA Light'],
    icon: Facebook
  },
  { 
    id: 2, 
    name: 'FACEBOOK BUSINESS MANAGERS', 
    price: 'Starting at 18 €', 
    description: 'Various types of Facebook Business Managers for your needs. All Business Managers have $250 Daily Spend Limit. Ad Accounts start with $50-150 DSL and grow up to $250 DSL with compliant use. Ad Account creation limit starts at 1-2 and grows up to 5.',
    variants: ['Verified Aged BM', 'Verified Business Manager', 'Aged Business Manager', 'Standard Business Manager', 'Basic Business Manager'],
    icon: Settings
  },
  { 
    id: 3, 
    name: 'FACEBOOK FAN PAGE', 
    price: '40 €', 
    description: 'Reinstated Fan Page with 150+ followers',
    variants: ['Reinstated Fan Page'],
    icon: Users
  },
  { 
    id: 4, 
    name: 'TIKTOK BUSINESS ACCOUNTS', 
    price: 'Starting at 25 €', 
    description: 'TikTok business accounts for your marketing needs',
    variants: ['TikTok Verified USA', 'TikTok USA Postpay'],
    icon: Music2
  },
  { 
    id: 5, 
    name: 'PROXY', 
    price: 'Starting at 7 €', 
    description: 'USA proxies for various durations',
    variants: ['30 days', '60 days', '90 days'],
    icon: Shield
  },
  { 
    id: 6, 
    name: 'ACCOUNT SETUP SERVICE', 
    price: 'Starting at 55 €', 
    description: 'Complete setup services for your accounts',
    variants: ['Setup Basic', 'Setup Standard', 'Setup Premium'],
    icon: Settings
  },
];

export default function ProductList() {
  return (
    <div id="products" className="py-24 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Our Digital Arsenal</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="bg-gray-800 border-gray-700 text-white overflow-hidden flex flex-col h-[500px]">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                  <div className="flex items-center gap-4">
                    <IconComponent size={24} className="text-white" />
                    <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow overflow-auto">
                  <p className="text-xl font-semibold text-indigo-400 mb-4">{product.price}</p>
                  <p className="text-gray-300 mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-800 p-6 mt-auto">
                  <Link href={`/product/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
