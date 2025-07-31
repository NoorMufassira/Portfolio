// src/components/ExperienceSection.tsx

import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up"> {/* Added data-aos */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Where I've Worked</h2>

        {/* Experience Item 1 */}
        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">MERN Developer</h3>
              <p className="text-lg text-white">Alright Tech Solutions</p>
            </div>
            <p className="text-md text-white">Jan 2022 - Present</p>
          </div>
          <ul className="list-disc list-inside space-y-4 text-white">
            <li>Developed and maintained full-stack web applications using Node.js and React.</li>
            <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
            <li>Implemented RESTful APIs and integrated with various third-party services.</li>
            <li>Optimized application performance and ensured high scalability.</li>
          </ul>
        </div>

        {/* Experience Item 2  */}
        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <p className="text-lg text-white">ZySoftec</p>
            </div>
            <p className="text-md text-white">Jun 2020 - Dec 2021</p>
          </div>
          <ul className="list-disc list-inside space-y-4 text-white">
            <li>Software Design, Development, and Implementation.</li>
            <li>Cross-functional Collaboration and Stakeholder Communication.</li>
            <li>System Debugging, Testing, Performance Optimization and Technology Adoption.</li>
          </ul>
        </div>

        {/* Experience Item 3  */}
        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Junior Developer</h3>
              <p className="text-lg text-white">One Network IT Solutions</p>
            </div>
            <p className="text-md text-white">Jun 2020 - Dec 2021</p>
          </div>
          <ul className="list-disc list-inside space-y-4 text-white">
            <li>Assisted in front-end development using HTML, CSS, and JavaScript.</li>
            <li>Contributed to database design and management for client projects.</li>
            <li>Participated in code reviews and learned best practices from senior developers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;