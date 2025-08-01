// src/components/ProjectsSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">Projects I've Worked On</h2> {/* Added data-aos */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Project Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="100"> {/* Added data-aos and delay */}
            <Image
              src="/bookstore.jpg"
              alt="Project 1 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Literary Paradise</h3>
              <p className="text-white mb-4 text-sm">
                Digital storefront for literature. Developed a feature-rich online Literary Paradise using HTML, CSS, Bootstrap, JS
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://github.com/Noor-Mufassira/bookstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  View Code
                </Link>
                <Link
                  href="https://student3300.github.io/bookstore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200"> {/* Added data-aos and delay */}
            <Image
              src="/artgallery.jpg"
              alt="Project 2 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Echoes of Art</h3>
              <p className="text-white mb-4 text-sm">
                Showcasing art in online space. Curating a stunning virtual space for artistic expression using HTML, CSS, Bootstrap, JS
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://github.com/Noor-Mufassira/artgallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  View Code
                </Link>
                <Link
                  href="https://student3300.github.io/Art-gallery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="300"> {/* Added data-aos and delay */}
            <Image
              src="/football.jpg"
              alt="Project 3 Thumbnail"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">RedGoal FC</h3>
              <p className="text-white mb-4 text-sm">
                Implemented team rosters, match schedules, news updates, and fan engagement features using HTML, CSS, Bootstrap, JavaScript
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://github.com/Noor-Mufassira/footballclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  View Code
                </Link>
                <Link
                  href="https://redgoal-fc.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;