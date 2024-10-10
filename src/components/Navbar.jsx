import React, { useState, useEffect } from "react";


const Navbar = () => {
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
  );
};

export default Navbar;
