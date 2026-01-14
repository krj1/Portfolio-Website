import { ChevronDown } from 'lucide-react';
import mainHero from '../../images/snow.jpeg';
import { useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (heroRef.current) {
      const scrollPosition = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={mainHero}
          alt="Kurt Jackson - Process Engineer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto h-[500px]">
        <h1 className="text-6xl md:text-8xl mb-0 text-white">Kurt Jackson</h1>
        
        {/* Changes made here: Removed pl-4/pl-8 and changed text-left to text-center */}
        <div className="w-full max-w-6xl mx-auto">
          <p className="text-2xl md:text-3xl mb-20 text-gray-200 text-center" style={{ fontWeight: 100 }}>Making More With Less</p>
        </div>
        
        
        <div className="grid grid-cols-3 gap-2 md:gap-12 relative">
          {/* Cards (Commented out in your original code) */}
        </div>
      </div>
      
      <a
        href="#design"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
}