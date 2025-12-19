import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12 text-gray-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-gray-700">
              I'm a Process Engineer specializing in manufacturing scale-up and automation. 
              Currently at ERMCO, I've designed and commissioned 157,000 sq ft of new manufacturing 
              space and developed processes that tripled transformer core production capacity from 
              60k lb/day to 200k lb/day.
            </p>
            <p className="mb-6 text-gray-700">
              My engineering approach combines hands-on technical expertise with strategic project 
              leadership. From robotics integration and digital manufacturing to lean process 
              implementation, I excel at turning ambitious production goals into operational reality.
            </p>
            <p className="text-gray-700">
              I procure and deploy millions in capital equipment annually, always balancing technical 
              performance with ROI to deliver cost-effective, scalable manufacturing solutions.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Education</h3>
                  <p className="text-gray-600">B.S. in Mechanical Engineering</p>
                  <p className="text-gray-500">Northern Illinois University, May 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Current Role</h3>
                  <p className="text-gray-600">Process Engineer at ERMCO</p>
                  <p className="text-gray-500">May 2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Key Achievements</h3>
                  <p className="text-gray-600">Led $30M facility buildout</p>
                  <p className="text-gray-500">3x production capacity increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}