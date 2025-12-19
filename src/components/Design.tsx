import { Ruler, Layers, PenTool, Box } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Design() {
  return (
    <section id="design" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Primary Image Panel */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1568057373106-63057e421d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludHMlMjBDQUR8ZW58MXx8fHwxNzY1NzQyMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering blueprints and CAD"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Surrounding Metrics */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <Layers style={{ color: '#2DEB98' }} size={40} className="mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#2DEB98' }}>20%</div>
              <p className="text-xl text-gray-900">Labor Reduction</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <PenTool style={{ color: '#FF8854' }} size={40} className="mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#FF8854' }}>Lean</div>
              <p className="text-xl text-gray-900">Process Flow</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Ruler style={{ color: '#2DEB98' }} size={32} className="mx-auto mb-3" />
            <p className="text-gray-900">CAD Modeling</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Layers style={{ color: '#2DEB98' }} size={32} className="mx-auto mb-3" />
            <p className="text-gray-900">Facility Layout</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <Box style={{ color: '#2DEB98' }} size={32} className="mx-auto mb-3" />
            <p className="text-gray-900">Workcell Design</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <PenTool style={{ color: '#2DEB98' }} size={32} className="mx-auto mb-3" />
            <p className="text-gray-900">Technical Drawings</p>
          </div>
        </div>
      </div>
      
      {/* Transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
    </section>
  );
}