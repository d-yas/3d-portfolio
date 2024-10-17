import React from "react";

const AppsPhone = () => {
  return (
    <div className="flex items-start justify-start space-x-6  mt-20  ">
      <div className="flex flex-col justify-center items-center">
        <img src="./data-mobile.png" alt="" width={120} height={120} />
        <label className="text-slate-300 text-[1.3rem] leading-5 tracking-tight mt-4  font-mont font-bold">
          Data Projects
        </label>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="./web-mobile.png" alt="" width={120} height={120} />
        <label className="text-slate-200 text-[1.3rem] leading-5 tracking-tight mt-4  font-mont font-bold">
          Web Projects
        </label>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="./favicon.png" alt="" width={120} height={120} />
        <label className="text-slate-200 text-[1.3rem] leading-5 tracking-tight mt-4  font-mont font-bold">
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
