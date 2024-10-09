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

      <div className="absolute w-full h-screen flex justify-end items-start gap-15 ">
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

      <div className="absolute w-full h-screen flex justify-center gap-3 items-end py-5 ">
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
    </section>
  );
};

export default Intro;
