import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer