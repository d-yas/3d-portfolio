import React from "react";

const AppsPhone = ({ onAppClick, selectedApp }) => {
  return (
    <div className="flex items-start justify-start space-x-9 mt-20">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={() => onAppClick("data")}
      >
        <img src="./data-mobile.png" alt="" width={120} height={120} />
        <label
          className={`text-[1.3rem] leading-5 tracking-tight  font-mont font-bold ${
            selectedApp === "data" ? "text-green-500  mt-4" : "text-slate-300 mt-4"
          }`}
        >
          Data Projects
        </label>
      </div>
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={() => onAppClick("web")}
      >
        <img src="./web-mobile.png" alt="" width={120} height={120} />
        <label
          className={`text-[1.3rem] leading-5 tracking-tight mt-4 font-mont font-bold ${
            selectedApp === "web" ? "text-green-500" : "text-slate-200"
          }`}
        >
          Web Projects
        </label>
      </div>
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={() => onAppClick("profile")}
      >
        <img src="./favicon.png" alt="" width={120} height={120} />
        <label
          className={`text-[1.3rem] leading-5 tracking-tight mt-4 font-mont font-bold ${
            selectedApp === "profile" ? "text-green-500" : "text-slate-200"
          }`}
        >
          Profile
        </label>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="" alt="" width={120} />
      </div>
    </div>
  );
};

export default AppsPhone;
