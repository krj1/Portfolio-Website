import { Factory, TrendingUp, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Manufacturing() {
  return (
    <section id="manufacturing" className="pt-48 pb-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8" style={{ paddingTop: '40px' }}>
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl mb-6 text-gray-900">Manufacture</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
  
  {/* Left Column: Stacked items */}
  <div className="flex flex-col gap-4 md:gap-8">
    
    {/* Small Image Panel (Aspect Ratio prevents thin images) */}
    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video w-full">
      <ImageWithFallback
        src="/images/laser.jpg"
        alt="Plasma production scale"
        className="w-full h-full object-cover"
      />
    </div>


  {/* Primary Image Panel (Right Side) */}
  {/* h-full ensures it matches the total height of the left column */}
  <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[250px]">
    <ImageWithFallback
      src="/images/mill.jpeg"
      alt="Factory production line"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    {/* Text Panel - Commented out
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-6 shadow-xl h-auto justify-center">
      <h3 className="text-lg md:text-2xl" style={{ color: '#FF8854' }}>
        Rapid Prototyping
      </h3>
      <div className="text-2xl md:text-5xl leading-tight" style={{ color: '#2DEB98' }}>
        Digital Fabrication
      </div>
      <div className="text-sm md:text-2xl text-gray-400 leading-snug">
        Laser, Plasma, CNC, 3D Printing
      </div>
    </div>
    */}

  <div className="flex flex-col gap-4 md:gap-8">
    
    {/* Small Image Panel (Aspect Ratio prevents thin images) */}
    <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[250px]">
      <ImageWithFallback
        src="/images/waterjet.jpeg"
        alt="Plasma production scale"
        className="w-full h-full object-cover"
      />
    </div>


  {/* Primary Image Panel (Right Side) */}
  {/* h-full ensures it matches the total height of the left column */}
  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video w-full">
    <ImageWithFallback
      src="/images/3dprint.jpg"
      alt="Factory production line"
      className="w-full h-full object-cover"
    />
  </div>
</div>

  
</div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Zap style={{ color: '#FF8854' }} size={48} />
              <div className="text-6xl" style={{ color: '#FF8854' }}>5</div>
            </div>
            <p className="text-2xl text-gray-900">Digital Technologies</p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Target style={{ color: '#2DEB98' }} size={48} />
              <div className="text-6xl" style={{ color: '#2DEB98' }}>$2M+</div>
            </div>
            <p className="text-2xl text-gray-900">Annual Procurement</p>
          </div>
        </div>
      </div>
      
      {/* Transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}