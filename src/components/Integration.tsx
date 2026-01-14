import { Cpu, Workflow, Cable, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Integration() {
  return (
    <section id="integration" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl mb-6 text-gray-900">Integration</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Surrounding Metrics */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2DEB98' }}>
                <Cpu size={32} className="text-black" />
              </div>
              <div className="text-3xl mb-2">SCARA Robot</div>
              <p className="text-gray-400">Pick & Place</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FF8854' }}>
                <Workflow size={32} className="text-black" />
              </div>
              <div className="text-3xl mb-2">KM-XYZ</div>
              <p className="text-gray-400">Inline Inspection</p>
            </div>
          </div>
          
          {/* Primary Image Panel */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <ImageWithFallback
              src="/images/mess.jpeg"
              alt="Robotic workcell automation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="text-7xl mb-4" style={{ color: '#2DEB98' }}>100%</div>
            <p className="text-xl text-gray-900">System Uptime</p>
          </div>
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="text-7xl mb-4" style={{ color: '#FF8854' }}>3</div>
            <p className="text-xl text-gray-900">Validation Methods</p>
          </div>
          <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <Cable style={{ color: '#2DEB98' }} size={48} className="mx-auto mb-4" />
            <p className="text-xl text-gray-900">Full Integration</p>
          </div>
        </div>
      </div>
      
      {/* Transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
    </section>
  );
}