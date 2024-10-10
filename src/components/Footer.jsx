import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center gap-3 items-end py-5">
      <a
        href="https://www.instagram.com/denizcanyas/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-150 transform transition duration-300 shadow-lg"
      >
        <img src="./insta.png" width={80} alt="Instagram" />
      </a>
      
      <a
        href="https://www.linkedin.com/in/denizcan-yas/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-150 transform transition duration-300"
      >
        <img src="./linkedin.png" width={80} alt="LinkedIn" />
      </a>
      
      <a
        href="https://github.com/d-yas"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-150 transform transition duration-300"
      >
        <img src="./github.png" width={80} alt="GitHub" />
      </a>
    </div>
  );
};

export default Footer;
