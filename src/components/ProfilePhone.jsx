import React from "react";

const ProfilePhone = () => {
  return (
    <div className="bg-slate-700 w-11/12 h-[52rem] mt-28 rounded-3xl">
      <div
        className={`text-slate-300 flex flex-col  bg-slate-700 w-full rounded-3xl`}
      >
        <div className={`flex`}>
          <div className={`absolute -mt-15 text-4xl font-bold text-green-500`}>
            Profile
          </div>
          <div
            className={`w-full items-center justify-center flex flex-col mt-10`}
          >
            <div className={`p-12`}>
              <img src="./me.png" alt="Pp" className={`w-64 h-64`} />
            </div>
            <div className={`font-bold text-3xl uppercase text-slate-300`}>
              Denizcan YAŞ
            </div>
            <div className={`text-xl font-medium leading-7 opacity-40`}>
              Industrial Engineer
            </div>
            <div
              className={`font-code uppercase mt-8 p-3 font-medium text-2xl`}
            >
              Creative Developer
            </div>
            <div className={`font-code uppercase p-3 font-medium text-2xl`}>
              Data Analyst
            </div>

            <div
              className={`font-mont p-4 font-medium text-3xl mt-12 text-slate-50 tracking-tight`}
            >
              denizcanyas@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhone;
