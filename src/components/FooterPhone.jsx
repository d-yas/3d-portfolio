import React from 'react'

const FooterPhone = () => {
  return (
    <div className="h-[12rem] w-11/12 p-9 absolute mt-[76rem] backdrop-blur-[140px] rounded-[6rem]">
            <div className="flex justify-center gap-3 items-end ">
              <a
                href="mailto:denizcanyas@gmail.com"
                className="-"
              >
                <img src="./mail.png" width={130} height={140} alt="Mail" />
              </a>
              <a
                href="https://www.linkedin.com/in/denizcan-yas/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <img src="./linkedin.png" width={130} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/d-yas"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <img src="./github.png" width={130} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/denizcanyas/"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <img src="./insta.png" width={130} alt="Instagram" />
              </a>
            </div>
          </div>
  )
}

export default FooterPhone