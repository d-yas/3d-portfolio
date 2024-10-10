import React from 'react'

const Files = () => {
    
  return (
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
  )
}

export default Files