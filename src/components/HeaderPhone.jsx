import React from "react";

const HeaderPhone = () => {
  return (
    <div>
      <div className="left-0 absolute text-xl p-4 font-bold">11:39</div>
      <div className="absolute right-0">
        <img src="./phone-bar.png" height={12} width={130} className="p-4" />
      </div>
    </div>
  );
};

export default HeaderPhone;
