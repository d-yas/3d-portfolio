import React from "react";

const Profile = () => {
  return (
    <div className={`text-slate-300 flex flex-col  bg-slate-700 w-full`}>
      <div
        className={`w-full  p-2 bg-slate-900 text-slate-100 uppercase text-lg font-bold leading-5 tracking-wide`}
      >
        Profile
      </div>
      <div className={`flex`}>
        {/* Project names */}
        <div
          className={`w-full items-center justify-center flex flex-col`}
        >
          <div className={`p-7`}>
            <img src="./me.png" alt="Pp" className={`w-32 h-32`} />
          </div>
          <div className={`font-bold text-xl uppercase text-slate-300`}>
            Denizcan YAŞ
          </div>
          <div className={`text-sm leading-4 opacity-40`}>
            Industrial Engineer
          </div>
          <div className={`font-code uppercase mt-6 p-3 font-medium text-s`}>
            Creative Developer
          </div>
          <div className={`font-code uppercase pb-3 font-medium text-s`}>
            Data Analyst
          </div>
          <div
            className={`font-mont p-4 font-medium text-slate-50 tracking-tight`}
          >
            denizcanyas@gmail.com
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
