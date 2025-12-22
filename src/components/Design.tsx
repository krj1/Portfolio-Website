import { Layers, PenTool } from 'lucide-react';

export function Design() {
  return (
    <section 
      id="design" 
      className="relative min-h-[200vh] mb-32"
      style={{
        backgroundImage: 'url(/images/Fusion.PNG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-5 py-16">
          <div className="grid md:grid-cols-2 gap-8 p-6 min-h-[1200px]">
            <div className="flex items-end">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm">
                <Layers style={{ color: '#2DEB98' }} size={40} className="mb-4" />
                <div className="text-6xl mb-2" style={{ color: '#202020ff' }}>20%</div>
                <p className="text-xl text-black-900">Labor Reduction</p>
              </div>
            </div>
            
            <div className="flex items-end justify-end">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm">
                <PenTool style={{ color: '#FF8854' }} size={40} className="mb-4" />
                <div className="text-6xl mb-2" style={{ color: '#202020ff' }}>Lean</div>
                <p className="text-xl text-gray-900">Process Flow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
