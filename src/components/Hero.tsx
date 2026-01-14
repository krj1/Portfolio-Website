import { ChevronDown } from 'lucide-react';
import mainHero from '../../images/Main-Hero.jpeg';
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
const text = "Design&nbsp"
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto h-[500px]">
        <h1 className="text-6xl md:text-8xl mb-0 text-white">Kurt Jackson</h1>
        <div className="w-full max-w-6xl mx-auto pl-4 md:pl-8">
          <p className="text-2xl md:text-3xl mb-20 text-gray-200 text-left" style={{ fontWeight: 100, marginLeft: '0' }}>Making More With Less</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-12 relative">
          <a 
            href="#" 
            className="card-hover"
            style={{
              display: 'block',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease-out',
              transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(2)';
              e.currentTarget.style.zIndex = '10';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(45, 235, 152, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(45, 235, 152, 0.7)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '2rem';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.zIndex = 'auto';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '3rem';
              }
            }}
          >
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#2DEB98' }}>Deploying Capital</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>$2M per year</p>
          </a>
          
          <a 
            href="#" 
            className="card-hover"
            style={{
              display: 'block',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease-out',
              transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(2)';
              e.currentTarget.style.zIndex = '10';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(255, 136, 84, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(255, 136, 84, 0.7)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '1rem';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.zIndex = 'auto';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '3rem';
              }
            }}
          >
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#FF8854' }}>Creating Space</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>Developed 157k sqft</p>
          </a>
          
          <a 
            href="#" 
            className="card-hover"
            style={{
              display: 'block',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease-out',
              transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(2)';
              e.currentTarget.style.zIndex = '10';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(45, 235, 152, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(45, 235, 152, 0.7)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '2rem';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.zIndex = 'auto';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              const textElement = e.currentTarget.querySelector('div');
              if (textElement) {
                (textElement as HTMLElement).style.fontSize = '3rem';
              }
            }}
          >
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#2DEB98' }}>Improve Processes</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>Increased production 3x</p>
          </a>
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