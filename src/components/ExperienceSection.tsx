// src/components/ExperienceSection.tsx

import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Developer',
    company: 'Alright Tech Solutions',
    period: 'Jan 2022 - Present',
    details: [
      'Developed and maintained full-stack web applications using Node.js and React.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Implemented RESTful APIs and integrated with third-party services.',
      'Optimized application performance and ensured scalability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'ZySoftec',
    period: 'Jun 2020 - Dec 2021',
    details: [
      'Software Design, Development, and Implementation.',
      'Cross-functional Collaboration and Stakeholder Communication.',
      'System Debugging, Testing, and Performance Optimization.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'One Network IT Solutions',
    period: 'Jan 2019 - May 2020',
    details: [
      'Assisted in front-end development using HTML, CSS, and JavaScript.',
      'Contributed to database design and management.',
      'Participated in code reviews and adopted industry best practices.',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center mb-16 relative z-10">
          Where I've Worked
          <span className="block w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></span>
        </h2>

        <div className="relative border-l border-purple-600 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <span className="absolute -left-[30px] top-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Briefcase className="w-5 h-5" />
              </span>

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400 italic mt-1">{exp.period}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-200 mt-4">
                {exp.details.map((point, i) => (
                  <li key={i} className="transition duration-200 group-hover:translate-x-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
