import React, { useState, useEffect } from "react";
const Intro = () => {
  // State to hold the current date and time
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect hook to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Format the date and time for display
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  return (
    <section className="w-full h-screen top-0 left-0">
      <img
        src="./bg-grad.jpeg"
        alt="Desktop"
        className="w-full h-screen fixed  pointer-events-none"
      />
      {/* Navbar */}
      <div className="fixed top-0 left-0 h-8 w-full flex flex-row bg-black pointer-events-none">
        <div className={`w-1/2 flex items-center`}>
          <img
            src="./apple.png"
            alt="logo"
            width={24}
            height={24}
            className={`ml-6 p-0.5 `}
          />
          <span className={`mt-0.5 uppercase font-bold ml-6 text-sm`}>
            Denizcan Yaş
          </span>
        </div>
        <div className={`w-1/2 flex justify-end px-6  mt-1`}>
          <span>
            <img src="./navbar-icon.png" height={20} width={20} />
          </span>
          <span className={`mt-0.5 uppercase font-bold ml-6 text-sm`}>
            {formattedDate}
          </span>
          <span className={`mt-0.5 uppercase font-bold ml-6 text-sm`}>
            {formattedTime}
          </span>
        </div>
      </div>

      <div className={`absolute w-full h-screen flex flex-col justify-between`}>
        {/* Folders */}
        <div className={`flex gap-15 justify-end mx-15 border `}>
          <div className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg">
            <img src="./code-folder.png" height={100} width={100} />
            <label className="-mt-1 uppercase font-code font-bold text-sm">
              Web Projects
            </label>
          </div>

          <div className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg">
            <img
              src="./code-folder.png"
              height={100}
              width={100}
              className="transition-all duration-300 ease-in-out"
            />
            <label className="-mt-1 uppercase font-code font-bold text-sm ring-indigo-500 transition-all duration-300 ease-in-out">
              Data Projects
            </label>
          </div>

          <div className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg">
            <img
              src="./user-folder.png"
              height={100}
              width={100}
              className="transition-all duration-300 ease-in-out"
            />
            <label className="uppercase font-code font-bold text-sm ring-indigo-500 transition-all duration-300 ease-in-out">
              Profile
            </label>
          </div>
        </div>

        {/* Folder look */}
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
            <div className={`text-black flex flex-col  bg-slate-400 w-full`}>
              <div
                className={`w-full border p-2 bg-slate-900 text-slate-100 uppercase text-lg font-bold leading-5 tracking-wide`}
              >
                Folder Title
              </div>
              <div className={`flex`}>
                {/* Project names */}
                <div className={`w-1/3 border flex flex-col`}>
                  <div>dd</div>
                  <div>dd</div>
                  <div>dd</div>
                </div>
                {/* Project details */}
                <div
                  className={`flex flex-col justify-center items-center w-3/4`}
                >
                  description
                  {/* Deniz burada kaldın layoutu bitir sonra bunu ayrı bi componente al */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom part */}
        <div className="flex justify-center border border-red-500 gap-3 items-end py-5 ">
          <div className="hover:scale-150 transform transition duration-300 shadow-lg">
            <img src="./insta.png" width={50} alt="insta" />
          </div>
          <div className="hover:scale-150 transform transition duration-300">
            <img src="./linkedin.png" width={50} alt="linkedin" />
          </div>
          <div className="hover:scale-150 transform transition duration-300">
            <img src="./github.png" width={50} alt="github" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
