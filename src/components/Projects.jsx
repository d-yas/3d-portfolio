import React, { useState, useEffect } from "react";
import { projects } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

  // Function to preload images
  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    // Preload all project images when the component mounts
    const imageUrls = projects.map((project) => project.image);
    preloadImages(imageUrls);
  }, []);

  return (
    <div className={`text-slate-300 flex flex-col  bg-slate-700 w-full`}>
    <div
      className={`w-full  p-2 bg-slate-900 text-slate-100 uppercase text-lg font-bold leading-5 tracking-wide`}
    >
      Data Projects
    </div>
    <div className="flex">
      {/* Project names */}
      <div className="w-1/4 flex flex-col">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`hover:bg-slate-400 active:bg-slate-400 p-2 text-justify line-clamp-1 leading-10 text-[0.8rem] tracking-tighter shadow-md bg-slate-500 border-slate-900 border cursor-pointer ${
              selectedProject.id === project.id ? "bg-slate-600" : ""
            }`}
            onClick={() => setSelectedProject(project)} // Update the selected project on click
          >
            {project.title}
          </div>
        ))}
      </div>

      {/* Project details */}
      <div className="flex flex-col items-center gap-9 w-3/4">
        <div className="mt-3">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="object-cover aspect-auto rounded-3xl"
            width={300}
          />
        </div>
        <div className="-my-3 text-[.85rem] font-code leading-3 text-slate-400 tracking-tighter">
          • {selectedProject.categories.join(", ")}
        </div>
        <div className="font-mont font-bold text-xl p-1 -mb-4 shadow-sm text-center">
          {selectedProject.title}
        </div>
        <div className="w-5/6 font-mont text-sm font-medium rounded-2xl border p-4 text-center shadow-l bg-slate-800 mr-5 -mt-1">
          <span>{selectedProject.description}</span>
        </div>
        <a
          href={selectedProject.url}
          className="hover:cursor-pointer -mt-3 flex items-center gap-1 p-2 rounded-sm shadow-xl bg-gradient-to-r from-blue-300 to-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button text-black">Detail</div>
          <img src="./arrow.png" height={16} width={24} className="rotate-180" alt="Arrow Icon" />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Projects;
