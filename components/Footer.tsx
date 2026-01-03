import React from 'react';
import { Facebook, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold mb-6">A4 Forever</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
                Dù mai này có đi đâu về đâu, hãy nhớ rằng chúng ta đã từng có một thanh xuân tươi đẹp dưới mái nhà A4.
            </p>
        </div>

        <div className="flex gap-8 mb-12">
            {/* Facebook */}
            <a href="#" className="p-4 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Facebook size={24} />
            </a>
            
            {/* TikTok */}
            <a 
                href="https://www.tiktok.com/@8a4phuongmaimaidinh?lang=vi-VN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
            >
                {/* TikTok Icon SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            </a>

            {/* Github */}
            <a 
                href="https://github.com/oceep/a4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
            >
                <Github size={24} />
            </a>
        </div>

        <div className="w-full border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Class 12A4. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 fill-current" />
                <span>by A4 Dev Team</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;