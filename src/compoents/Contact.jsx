import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                    Linkedin <FaLinkedin size={30} />
                    </>
            ),
            href:"https://linkedin.com/in/chitranshu-pareek-aa8a8b220",
            style:'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30} />
                    </>
            ),
            href:"https://github.com/PAREEKCHITRANSHU",
            style:'rounded-br-md',
        }
    ]
  return (
     <div className='flex flex-col top-[18%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style}) =>(
                <li key={id} className={`flex justify-between  items-center w-40 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-white '  target="_blank" rel="noreferrer">
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  );
};

export default Contact