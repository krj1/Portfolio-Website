import { ChevronDown } from 'lucide-react';
import mainHero from '../../images/Main-Hero.jpeg';

export function Hero() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const scrollPosition = heroSection.offsetTop + heroSection.offsetHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={mainHero}
          alt="Kurt Jackson - Process Engineer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto h-[500px]">
        <h1 className="text-6xl md:text-8xl mb-0 text-white">Kurt Jackson</h1>
        <p className="text-2xl md:text-3xl mb-20 text-gray-200">Process Engineer</p>
        
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
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#2DEB98' }}>157k</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>Sq Ft</p>
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
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#FF8854' }}>$30M</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>CapEx</p>
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
            <div style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '0.5rem', color: '#2DEB98' }}>3x</div>
            <p style={{ color: 'rgb(229, 231, 235)' }}>Scale</p>
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