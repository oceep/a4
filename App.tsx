import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Memories from './components/Memories';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Manifesto from './components/Manifesto';
import FilmStrip from './components/FilmStrip';
import ScrollSequence from './components/ScrollSequence'; // Imported
import LockScreen from './components/LockScreen'; // Imported
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(true); // New Locked State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Giới Thiệu', href: '#about' },
    { label: 'Thanh Xuân', href: '#manifesto' },
    { label: 'Gương Mặt', href: '#members' },
    { label: 'Hành Trình', href: '#memories' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Show Loader first
  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  // 2. Show Lock Screen second
  if (locked) {
    return <LockScreen onUnlock={() => setLocked(false)} />;
  }

  // 3. Show Main Content
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold font-serif tracking-tighter cursor-pointer relative z-50" 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
                A4<span className="text-purple-500">.</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
                {navItems.map((item, idx) => (
                    <motion.button 
                        key={item.label} 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-white transition-colors relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </motion.button>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
            >
                <div className="flex flex-col gap-8 items-center">
                    {navItems.map((item) => (
                        <button 
                            key={item.label} 
                            onClick={() => scrollToSection(item.href)}
                            className="text-4xl font-serif text-white hover:text-purple-500 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Manifesto />
        <div id="about"><About /></div>
        <ScrollSequence />
        <FilmStrip />
        <div id="members"><Members /></div>
        <div id="memories"><Memories /></div>
      </main>

      <Footer />
    </div>
  );
};

export default App;