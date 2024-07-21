import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import EmailCard from '../compoents/EmailCard'; // Ensure this path is correct

const Home = () => {
  const [showCard, setShowCard] = useState(false);

  const handleContactClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  const handleClick = () => {
    window.open("https://drive.google.com/file/d/1VHXaCzqPo4IEdz_61E3UaLz6oJoPZQal/view?usp=sharing", "_blank", "noopener,noreferrer");
  };

  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-black  to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-mono text-white my-2'>Hi,I am Chitranshu</h2>
          <p className='text-gray-500 py-4 max-w-md'>
          A passionate software engineer specializing in front-end and full-stack development. With a degree in Information Technology and a solid foundation in various programming languages and frameworks, I create efficient, scalable, and user-friendly applications.
          </p>
          <div className='flex flex-row '>
            <button 
              className='text-white w-fit px-6 py-4 mr-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105'
              onClick={handleContactClick}
            >
              Contact
              <MdEmail className="ml-2"/>
            </button>
            <button
                onClick={handleClick}
                className="text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105"> Resume
            </button>
          </div>
        </div>
      </div>
      {showCard && <EmailCard onClose={handleCloseCard} />}
    </div>
  );
}

export default Home;
