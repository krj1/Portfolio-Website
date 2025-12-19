import { ExternalLink, TrendingUp, Factory, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Facility Startup - ERMCO',
      subtitle: 'Engineering Lead',
      period: 'January 2024 - April 2025',
      description: 'Led the complete engineering buildout of a 157,000 sq ft manufacturing facility, managing a $30M capital program with comprehensive ROI analysis and lean process implementation.',
      image: 'https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2Zvcm1lciUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU2NjYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Factory className="text-blue-600" size={24} />,
      achievements: [
        'Generated CapEx and ROI forecasts for 5 year $30M program',
        'Implemented Lean process flow achieving 20% labor reduction',
        'SME engineering lead for 157,000 sq ft manufacturing buildout',
      ],
      technologies: ['CapEx Planning', 'Lean Manufacturing', 'Facility Design', 'ROI Analysis'],
    },
    {
      title: 'Production Ramp - ERMCO',
      subtitle: 'Engineering Lead',
      period: 'January 2024 - Present',
      description: 'Spearheading the production scale-up initiative to increase transformer core output from 200k lb/day to 1M lb/day through integrated workcell design and advanced risk management.',
      image: 'https://images.unsplash.com/photo-1583737097428-af53774819a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFuJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY1NjY2MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <TrendingUp className="text-blue-600" size={24} />,
      achievements: [
        'Generate CapEx and Business Justifications to scale from 200k to 1M lb/day',
        'Coordinate with vendors to build integrated manufacturing workcells',
        'Commission, validate, and identify risks using RCCM, PFMEA, and RAF',
      ],
      technologies: ['Risk Assessment', 'Workcell Integration', 'Vendor Management', 'Process Validation'],
    },
    {
      title: 'Automated Workcell Demo - HIWIN',
      subtitle: 'Mechanical Engineer',
      period: 'August 2022 - May 2023',
      description: 'Designed and built a fully automated demonstration workcell integrating SCARA and KM-XYZ robotics for inline bearing inspection, showcasing HIWIN\'s complete robotics ecosystem.',
      image: 'https://images.unsplash.com/photo-1661882217431-b64b303fb1d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwd29ya2NlbGwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NTY2NjE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Zap className="text-blue-600" size={24} />,
      achievements: [
        'Developed demo automated workcell to showcase HIWIN\'s robotics',
        'Integrated SCARA robot and KM-XYZ for automated inline inspection',
        'Showcased complete ecosystem using only HIWIN products',
      ],
      technologies: ['SCARA Robotics', 'Automated Inspection', 'System Integration', 'Demo Engineering'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Featured Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <div>
                      <h3 className="text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-blue-600">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}