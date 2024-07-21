import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import reacttjs from "../assets/reacttjs.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwind.png";
import bootstraplogo from "../assets/bootstraplogo.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import dsa from "../assets/dsa.png";


const Skills = () => {
  const skill=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500",
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-blue-500",
    },
    {
      id:3,
      src:javascript,
      title:"JavaScript",
      style:"shadow-yellow-500",
    },
    {
      id:4,
      src:node,
      title:"Node JS",
      style:"shadow-green-500",
    },
    {
      id:5,
      src:reacttjs,
      title:"ReactJS",
      style:"shadow-blue-500",
    },
    {
      id:6,
      src:express,
      title:"ExpressJS",
      style:"shadow-green-500",
    },
    {
      id:7,
      src:mongodb,
      title:"MongoDB",
      style:"shadow-green-500",
    },
    {
      id:8,
      src:tailwind,
      title:"tailwindCSS",
      style:"shadow-blue-700",
    },
    {
      id:9,
      src:bootstraplogo,
      title:"Bootstrap",
      style:"shadow-purple-600",
    },
    {
      id:10,
      src:java,
      title:"Java",
      style:"shadow-orange-700",
    },
    {
      id:11,
      src:dsa,
      title:"Data Structures and Algorithm",
      style:"shadow-white",
    },
    {
      id:c,
      src:c,
      title:"C",
      style:"shadow-blue-900",
    }

  ]
  return (
    <div name="skills" className="h-auto bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <h1 className='text-4xl sm:text-7xl font-bold text-white my-1 border-b-4 inline border-gray-500'>Technical Skills</h1>
          <p className='text-gray-500 py-4 max-w-md text-2xl mt-2'>Technologies i have hands on</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            skill.map(({id,src,title,style}) =>(
              <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}> 
            <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills