import React from 'react'

const DataPhone = () => {
  return (
    <div className="bg-slate-700 w-11/12 h-[52rem] mt-28 rounded-3xl">
            <div className="flex">
              <div className=" w-[20rem] h-[20rem] flex justify-center items-center">
                <img
                  src="./asthma.png"
                  className="object-cover w-full h-full rounded-3xl shadow-sm"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="max-w-[22rem] w-[22rem] text-center mt-12   text-2xl ">
                  Understanding Customer Churn: Analyzing Gender Disparities,
                  Age Impact, and ML Predictions in Banking
                </div>
                <span className="absolute text-xl tracking-tighter  font-code  max-w-[22rem] text-slate-400 mt-[13rem] ml-3 -mr-3">
                  Web Application • Order/Stock System • SAP{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-col p-6  items-center">
              <span className="bg-slate-600 p-6 text-2xl rounded-3xl">
                Targeted promotions, automated dealer-specific discounts,
                real-time order and inventory visibility, and streamlined
                communication through automated email
              </span>
              <a
                href="#"
                className="hover:cursor-pointer  flex items-center gap-1 p-5 rounded-sm shadow-xl bg-gradient-to-r from-blue-300 to-purple-500 w-36 mt-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="button text-black text-xl">Detail</div>
                <img
                  src="./arrow.png"
                  height={32}
                  width={32}
                  className="rotate-180"
                  alt="Arrow Icon"
                />
              </a>
              <div className="flex absolute mt-[21rem] gap-4 ">
                <a href="#" className="text-5xl ring-8 ring-green-400  bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                <a href="#" className="text-5xl bg-rose-600 p-3 rounded-full">U</a>
                
              </div>
            </div>
          </div>
  )
}

export default DataPhone