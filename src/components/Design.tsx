import { Layers, PenTool } from 'lucide-react';

export function Design() {
  return (
    <section 
      id="design" 
      className="relative min-h-[100vh] mb-32"
      style={{
        backgroundImage: 'url(/images/Fusion.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '800px'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center" style={{ transform: 'translateY(-30%)' }}>
        
        {/* THE SIMPLIFIED LAYOUT */}
        {/* flex-row + justify-between pushes items to the far edges */}
        <div className="w-full max-w-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end h-[100px]">
            
            {/* Left Card (Automatically stays Left) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm">
              <Layers style={{ color: '#2DEB98' }} size={40} className="mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#202020ff' }}>GD&T</div>
              <p className="text-xl text-black-900">and Tolerance Analysis</p>
            </div>
            
            {/* Right Card (Automatically stays Right) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm mt-8 md:mt-0">
              <PenTool style={{ color: '#FF8854' }} size={40} className="mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#202020ff' }}>CAD</div>
              <p className="text-xl text-gray-900">Fusion 360 & SolidWorks</p>
            </div>

        </div>
      </div>

      <div className="sticky top-0 h-screen flex items-center" style={{ transform: 'translateY(-100%)' }}>
        
        {/* THE SIMPLIFIED LAYOUT */}
        {/* flex-row + justify-between pushes items to the far edges */}
        <div className="w-full max-w-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end h-[200px]">
            
            {/* Left Card (Automatically stays Left) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm">
              <Layers style={{ color: '#2DEB98' }} size={40} className="mb-4" />
              <div className="text-3xl mb-2" style={{ color: '#202020ff' }}>Risk Assessment</div>
              <p className="text-xl text-black-900">RAF, FMEA, HAZOP</p>
            </div>
            
            {/* Right Card (Automatically stays Right) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm mt-8 md:mt-0">
              <PenTool style={{ color: '#FF8854' }} size={40} className="mb-4" />
              <div className="text-5xl mb-2" style={{ color: '#202020ff' }}>Simulation</div>
              <p className="text-xl text-gray-900">Ansys</p>
            </div>

        </div>
      </div>

      <div className="sticky top-0 h-screen flex items-center" style={{ transform: 'translateY(-170%)' }}>
        
        {/* THE SIMPLIFIED LAYOUT */}
        {/* flex-row + justify-between pushes items to the far edges */}
        <div className="w-full max-w-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end h-[200px]">
            
            {/* Left Card (Automatically stays Left) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm">
              <Layers style={{ color: '#2DEB98' }} size={40} className="mb-4" />
              <div className="text-4xl mb-2" style={{ color: '#202020ff' }}>Capital Planning</div>
              <p className="text-xl text-black-900">& Production Forcasting</p>
            </div>
            
            {/* Right Card (Automatically stays Right) */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-sm mt-8 md:mt-0">
              <PenTool style={{ color: '#FF8854' }} size={40} className="mb-4" />
              <div className="text-4xl mb-2" style={{ color: '#202020ff' }}>Programming</div>
              <p className="text-xl text-gray-900">Python, C++, MATLAB</p>
            </div>

        </div>
      </div>
    </section>
  );
}