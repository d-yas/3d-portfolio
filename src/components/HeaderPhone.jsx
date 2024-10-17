import React, { useState, useEffect } from "react";

const HeaderPhone = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div>
      <div className="left-0 absolute text-xl ml-10 mt-2 p-5 font-bold">{formattedTime}</div>
      <div className="absolute right-0 mr-10 mt-2">
        <img src="./phone-bar.png" height={12} width={130} className="p-5" alt="Phone status bar" />
      </div>
    </div>
  );
};

export default HeaderPhone;
