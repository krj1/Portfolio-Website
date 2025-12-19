import { Shield, FileCheck, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Support() {
  const tools = [
    'MS Project',
    'Jira',
    'Procore',
    'RCCM',
    'PFMEA',
    'RAF',
  ];

  return (
    <section id="support" className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl mb-6 text-gray-900">Support</h2>
          <p className="text-2xl text-gray-600 max-w-3xl">
            Finally, I ensure long-term success through project management and risk mitigation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Primary Image Panel */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748256373165-e4d125c5124f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBsYW5uaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTc0MjM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineer planning workspace"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Surrounding Metrics */}
          <div className="grid grid-rows-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center shadow-xl border border-gray-200">
              <Shield style={{ color: '#FF8854' }} size={48} className="mx-auto mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#FF8854' }}>95%</div>
              <p className="text-xl text-gray-900">Risk Mitigation</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center shadow-xl border border-gray-200">
              <FileCheck style={{ color: '#2DEB98' }} size={48} className="mx-auto mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#2DEB98' }}>98%</div>
              <p className="text-xl text-gray-900">On-Time Delivery</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center shadow-xl border border-gray-200">
              <TrendingUp style={{ color: '#FF8854' }} size={48} className="mx-auto mb-4" />
              <div className="text-6xl mb-2" style={{ color: '#FF8854' }}>100%</div>
              <p className="text-xl text-gray-900">Completion Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-4xl mb-10" style={{ color: '#2DEB98' }}>Tools & Methodologies</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-center rounded-xl text-lg"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}