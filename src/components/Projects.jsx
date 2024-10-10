import React from "react";

const Projects = () => {
  return (
    <div className={`flex`}>
      {/* Project names */}
      <div className={`w-1/4  flex flex-col`}>
        <div className="hover:bg-slate-400 active:bg-slate-400 p-2  text-justify line-clamp-1 leading-10 text-[0.8rem] tracking-tighter shadow-md bg-slate-500 border-slate-900 border">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum
          tempora voluptatibus iste nemo fugiat! Quia fugit aspernatur
          reprehenderit sit quasi itaque quis eius delectus, ea sed id magnam
          eveniet?
        </div>
      </div>
      {/* Project details */}
      <div className={`flex flex-col items-center gap-9  w-3/4  `}>
        <div className="mt-3">
          <img
            src="./bg-grad.jpeg"
            alt=""
            className=" object-cover rounded-3xl"
            width={300}
          />
        </div>
        <div className="-my-3  text-[.85rem] font-code leading-3 text-slate-400 tracking-tighter ">
          • keywords
        </div>
        <div className="font-mont font-bold text-xl p-1 -mb-4 shadow-sm text-center">
          EDA of Reach and Height Impact on UFC Fighters Across Weight Classes
        </div>
        <div className=" text-ellipsis  w-full font-mont text-sm font-medium rounded-2xl p-6 shadow-l bg-slate-800 mr-5 -mt-1 ">
          The project aims to develop a model to predict asthma likelihood based
          on demographi
        </div>
        <a className="hover:cursor-pointer -mt-3 flex items-center gap-1 p-2 rounded-sm shadow-xl bg-gradient-to-r from-blue-300  to-purple-500 ">
          <div className="button text-black  ">Detail</div>
          <img
            src="./arrow.png"
            height={16}
            width={24}
            className="rotate-180"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
