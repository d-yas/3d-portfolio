import React, { useState } from 'react';
import { projects } from '../constants';

const WebPhone = () => {
  // State to keep track of the selected project
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

  // Function to handle the selection of a project based on the initial
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="bg-slate-700 w-11/12 h-[52rem] mt-28 rounded-3xl shadow-2xl">
      <div className={`absolute -mt-15 text-4xl font-bold text-green-500`}>
        Data Projects
      </div>
      <div className="flex">
        <div className="w-[20rem] h-[20rem] flex justify-center items-center">
          <img
            src={selectedProject.image}
            className="object-cover w-full h-full rounded-tl-3xl  rounded-br-3xl shadow-sm"
            alt={selectedProject.title}
          />
        </div>
        <div className="flex flex-col">
          <div className="max-w-[22rem] w-[22rem] text-center mt-12 text-3xl font-bold">
            {selectedProject.title}
          </div>
          <span className="absolute text-xl tracking-tighter font-code max-w-[22rem] text-slate-400 mt-[13rem] ml-3 -mr-3">
            {selectedProject.categories.join(' • ')}
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6 items-center">
        <span className="bg-slate-600 p-6 text-2xl rounded-3xl">
          {selectedProject.description}
        </span>
        <a
          href={selectedProject.url}
          className="hover:cursor-pointer flex items-center gap-1 p-5 rounded-sm shadow-xl bg-gradient-to-r from-blue-300 to-purple-500 w-36 mt-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button text-black text-xl">Detail</div>
          <img
            src="./arrow.png"
            height={32}
            width={32}
            className="rotate-180"
            alt="Arrow Icon"
          />
        </a>
        <div className="flex absolute mt-[21rem] gap-4">
        {projects.map((project) => (
  <a
    key={project.id}
    href="#"
    className={`flex justify-center items-center w-[4.5rem] h-[4.5rem] text-5xl p-3 rounded-full ${
      selectedProject.id === project.id
        ? 'ring-8 ring-green-400 bg-rose-600'
        : 'bg-rose-600'
    }`}
    onClick={() => handleProjectClick(project)}
  >
    {project.initial}
  </a>
))}

        </div>
      </div>
    </div>
  );
};

export default WebPhone;
