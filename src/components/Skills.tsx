import { Box, Cpu, FileText, Gauge, Ruler, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'CAD & Design Tools',
      icon: <Ruler className="text-blue-600" size={32} />,
      skills: ['Fusion 360', 'Inventor', 'AutoCAD', '3D Modeling', 'Technical Drawings'],
    },
    {
      title: 'Manufacturing Processes',
      icon: <Wrench className="text-blue-600" size={32} />,
      skills: ['CNC Machining', '3D Printing', 'Laser Cutting', 'Waterjet', 'Digital Manufacturing'],
    },
    {
      title: 'Engineering & Analysis',
      icon: <Gauge className="text-blue-600" size={32} />,
      skills: ['Risk Assessment (RCCM, PFMEA, RAF)', 'Process Optimization', 'Lean Manufacturing', 'CapEx Forecasting', 'ROI Analysis'],
    },
    {
      title: 'Programming & Software',
      icon: <Cpu className="text-blue-600" size={32} />,
      skills: ['Python', 'C++', 'MS Project', 'Jira', 'Procore'],
    },
    {
      title: 'Core Competencies',
      icon: <Box className="text-blue-600" size={32} />,
      skills: ['Project Leadership', 'Site Engineering', 'Procurement', 'Technical Communication', 'Vendor Coordination'],
    },
    {
      title: 'Automation & Robotics',
      icon: <FileText className="text-blue-600" size={32} />,
      skills: ['Workcell Design', 'SCARA Robots', 'Automated Inspection', 'System Integration', 'Equipment Commissioning'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}