import React from "react";

const Folder = () => {
  return (
    <div className={`flex border justify-center items-center h-3/4 w-full`}>
      <div
        className={`bg-black w-1/2 h-5/6 mb-10 rounded-lg flex  border-4 border-n-2 border-opacity-50`}
      >
        {/* Sidebar */}
        <div
          className={`text-slate-100 flex flex-col px-10 pt-4 bg-slate-800 rouned-lx gap-4`}
        >
          <div class="w-4 h-4 bg-red-400 rounded-full -mx-6"></div>

          <div className={`flex gap-3 border w-full`}>
            <img src="./user-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Profile
            </span>
          </div>
          <div className={`flex items-center gap-3 border w-full`}>
            <img src="./code-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Data Projects
            </span>
          </div>
          <div className={`flex items-center gap-3 border w-full`}>
            <img src="./code-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Web Projects
            </span>
          </div>
        </div>
        {/* Main Bar */}
        <div className={`text-slate-300 flex flex-col  bg-slate-700 w-full`}>
          <div
            className={`w-full border p-2 bg-slate-900 text-slate-100 uppercase text-lg font-bold leading-5 tracking-wide`}
          >
            Folder Title
          </div>
          <div className={`flex`}>
            {/* Project names */}
            <div className={`w-1/4 border flex flex-col`}>
              <div className="hover:bg-slate-500 active:bg-slate-500 p-2  text-justify line-clamp-1 leading-10 text-[0.8rem] tracking-tighter shadow-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum tempora voluptatibus iste nemo fugiat! Quia fugit aspernatur reprehenderit sit quasi itaque quis eius delectus, ea sed id magnam eveniet?</div>
              <div className="p-2  text-justify line-clamp-1 leading-10 text-[0.8rem] tracking-tighter shadow-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum tempora voluptatibus iste nemo fugiat! Quia fugit aspernatur reprehenderit sit quasi itaque quis eius delectus, ea sed id magnam eveniet?</div>
              
              
              
              
            </div>
            {/* Project details */}
            <div className={`flex flex-col items-center gap-6  w-3/4  `}>
              <div className="mt-3">
                <img src="./bg-grad.jpeg"  alt="" className=" object-cover rounded-3xl" width={300}/>
              </div>
              <div className="-my-3 text-xs font-code leading-3 tracking-tighter ">• keywords</div>
              <div className="font-mont font-bold text-xl -mb-4 shadow-sm">Title</div>
              <div className=" text-ellipsis  w-full font-mont text-sm font-medium rounded-2xl p-4 shadow-xl -mt-1 ">
                    The project aims to develop a model to predict asthma likelihood based on demographi
                  </div>
              <div className="-mt-3 flex items-center gap-1 p-2 rounded-sm shadow-xl bg-gradient-to-r from-blue-300  to-purple-500 ">
                <div className="button text-black  ">
                    Detail
                </div>
                <img src="./arrow.png" height={16} width={24} className="rotate-180" />
              </div>
              {/* Deniz burada kaldın layoutu bitir sonra bunu ayrı bi componente al */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
