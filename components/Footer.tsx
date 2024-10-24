import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SocialForge</h3>
            <p className="mb-4">Your trusted source for premium social media assets and bulletproof mediabuying setups.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="flex items-center">
              <Send size={20} className="mr-2" />
              <a href="https://t.me/socialforgesupport" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Contact us on Telegram: @socialforgesupport
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} SocialForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
