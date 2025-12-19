import { Building2, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'ERMCO',
      role: 'Process Engineer',
      period: 'May 2023 - Present',
      location: 'Round Lake, IL',
      achievements: [
        'Designed and commissioned 157,000 sq ft of new manufacturing space',
        'Created manufacturing processes to scale production of transformer cores from 60k lb/day to 200k lb/day',
        'Procure $2M of equipment annually',
      ],
    },
    {
      company: 'HIWIN',
      role: 'Mechanical Engineer',
      period: 'August 2022 - May 2023',
      location: '',
      achievements: [
        'Developed a demo automated workcell to showcase HIWIN\'s robotics',
        'Integrated a SCARA robot and a KM-XYZ to demonstrate automated inline inspection of bearings',
        'Incorporated only HIWIN products to showcase their ecosystem of robotics',
      ],
    },
    {
      company: 'Baxter',
      role: 'Innovation Lab Intern',
      period: 'April 2019 - 2021',
      location: '',
      achievements: [
        'Led short turnaround projects utilizing digital manufacturing',
        'Identified opportunities for additive manufacturing',
        'Presented additive manufacturing equipment for CapEx approval',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-gray-900 mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
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
