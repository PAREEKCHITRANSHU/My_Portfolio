import React from 'react';
import myphoto from "../assets/myphoto.png";

const About = () => {
  return (
    <div name="about" className='h-screen bg-gradient-to-b from-black via-black  to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
         <div className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white my-2 inline border-b-4 border-gray-500 '>About</h1>
            <p className='text-gray-500 py-4 max-w-md'>
            With proficiency in Java, HTML, CSS, Bootstrap, JavaScript, SQL, Express.js, React.js, MongoDB, and more, I am dedicated to crafting innovative solutions that meet the evolving needs of the tech industry. My projects range from interactive e-commerce sites to robust admin panels with user authentication and CRUD operations.
            </p>
        </div>
        <div>
        <img src={myphoto} alt=" my porfile" className='h-80 md:ml-40 mb-8 md:mb-0 rounded-full' />
        </div>
        </div>
       
    </div>
  )
}

export default About
