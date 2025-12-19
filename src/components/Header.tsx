'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  opacity?: number;
  scrollProgress?: number;
}

export function Header({ opacity = 1, scrollProgress: initialScrollProgress = 0 }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(initialScrollProgress);
  const headerRef = useRef<HTMLElement>(null);

  // Calculate styles based on scroll progress (0 to 1)
  // When scrollProgress is 0 (top of page), header is transparent with white text
  // When scrollProgress is 1 (60% scrolled), header has white background with dark text
  const headerOpacity = 1; // Keep text fully opaque
  const isHeaderSolid = scrollProgress > 0.1; // Start showing background slightly after scroll starts
  const bgOpacity = Math.min(1, scrollProgress * 1.5); // Scale background opacity to reach 1 at 60% scroll

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Design', href: '#design' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Integration', href: '#integration' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }

      // Calculate scroll progress based on hero section
      const heroSection = document.querySelector('#home');
      if (!heroSection) return;
      
      const heroHeight = heroSection.clientHeight;
      const scrollY = window.scrollY;
      // Start transition at 70% of hero height, complete by end of hero
      const progress = Math.min(Math.max(0, (scrollY - (heroHeight * 0.95)) / (heroHeight * 0.3)), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        opacity: headerOpacity,
      }}
    >
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isHeaderSolid ? 'bg-white/90' : 'bg-black/20'
        } backdrop-blur-md shadow-sm`}
        style={{
          opacity: isHeaderSolid ? bgOpacity : 1,
          backgroundColor: isHeaderSolid ? '' : 'rgba(0, 0, 0, 0.2)'
        }}
      />
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center h-16 px-6">
          <a 
            href="#home" 
            className={`text-4xl font-bold z-20 ml-2 ${
              isHeaderSolid ? 'text-[#06070E]' : 'text-white'
            }`}
          >
            Kurt Jackson
          </a>
          
          {/* Desktop Navigation */}
          <nav className="text-xl z-20">
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`font-bold ${
                      isHeaderSolid ? 'text-[#06070E]' : 'text-white'
                    } hover:text-[#2DEB98] transition-colors duration-300`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 z-20 ${
              isHeaderSolid ? 'text-[#1D1D1F]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg p-4 mt-2 shadow-lg z-50">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 px-3 text-gray-800 hover:text-[#2DEB98] rounded-md transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
