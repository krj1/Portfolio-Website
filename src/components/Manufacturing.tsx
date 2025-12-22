import { Factory, TrendingUp, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Manufacturing() {
  return (
    <section id="manufacturing" className="pt-48 pb-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl mb-6 text-gray-900">Manufacturing</h2>
          <p className="text-2xl text-gray-600 max-w-3xl">
            Then I scale the processes that bring those designs to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Metric Panels Surrounding */}
          <div className="grid grid-rows-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200">
              <Factory style={{ color: '#FF8854' }} size={48} className="mb-4" />
              <div className="flex items-end gap-3">
                <div className="text-7xl" style={{ color: '#FF8854' }}>60k</div>
                <TrendingUp style={{ color: '#2DEB98' }} size={40} className="mb-2" />
                <div className="text-7xl" style={{ color: '#2DEB98' }}>200k</div>
              </div>
              <p className="text-xl text-gray-900 mt-4">lb/day Production Scale</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl mb-6" style={{ color: '#FF8854' }}>Next Target</h3>
              <div className="flex items-end gap-3">
                <div className="text-7xl" style={{ color: '#2DEB98' }}>1M</div>
                <div className="text-2xl text-gray-400 pb-2">lb/day</div>
              </div>
            </div>
          </div>

          {/* Primary Image Panel */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY1NzQyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Factory production line"
              className="w-full h-full object-cover"
            />
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