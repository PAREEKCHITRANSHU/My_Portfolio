//import { useState } from "react";
import React  from "react";
import adminpanel from "../assets/adminpanel.jpeg";
import furnituremart from "../assets/furnituremart.jpeg";
import movie from "../assets/movie.jpeg";

const Projects = () => {

  const portfolios = [
    {
      id: 1,
      src: furnituremart,
      href:"https://pareekchitranshu.github.io/Furniture-Mart/",
    },
    {
      id: 2,
      src: movie,
      href:"https://movie-driver.vercel.app/",
    },
    {
      id: 3,
      src: adminpanel,
      href:"https://admin-panel-beta-two.vercel.app",
    }
  ];
  

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project's
          </p>
          <p className="py-6">Explore my projects to see how I turn ideas into reality.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-md " />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(href, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  visit 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 flex flex-row text-white justify-center items-center">
        <p className="pt-10 pb-10 font-bold ">
          To know about more project's visit my GitHub account!!
        </p>
      </div>
    </div>
  );
};

export default Projects;
