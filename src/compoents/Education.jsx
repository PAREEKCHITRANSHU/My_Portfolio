import React from 'react';
import school_logo from "../assets/school_logo.png";
import mlv_logo from "../assets/logo-college.png";

const Education = () => {
  const events = [
    {
      year: '2020-2024',
      institution: 'MLV Textile and Engineering College',
      title: 'B.Tech(Information Technology)',
      logo: mlv_logo, // Replace with the actual path to the logo
    },
    {
      year: '2018-2020',
      institution: 'Central Academy Sr. Sec. School',
      title: 'Sr. Sec.(Science)',
      logo: school_logo, // Replace with the actual path to the logo
    },
  ];

  return (
    <div name="education" className="h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="container mx-auto my-8 p-4">
          <h2 className="text-4xl font-bold mb-8 text-center  border-b-4 border-gray-500">Education</h2>
          <div className="relative">
            {/* Adjust the border to ensure it doesn't overlap */}
            <div className="border-r-4 border-blue-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
            {events.map((event, index) => (
              <div key={index} className={`mb-8 flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
                <div className={`w-full md:w-1/2 p-4 flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg border border-blue-500 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <img src={event.logo} alt={`${event.institution} logo`} className="w-16 h-16 object-cover rounded-full mr-4"/>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{event.institution}</h3>
                        <span className="text-black">{event.year}</span>
                        <p className="pb-0 text-white ml-0">{event.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
