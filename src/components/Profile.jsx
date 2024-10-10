import React from 'react'

const Profile = () => {
  return (
    <div className={`flex`}>
            {/* Project names */}
            <div
              className={`w-1/4 border items-center justify-center flex flex-col`}
            >
              <div>image</div>
              <div>name</div>
              <div>title</div>
              <div>profession</div>
              <div>mail</div>
              <div>skills</div>
              resume to action email
            </div>
            {/* Project details */}
            <div className={`border flex flex-col items-center gap-9  w-3/4  `}>
              <div>ford</div>
              <div>digicot</div>
              <div>odea</div>
              <div>hayat kimya</div>
            </div>
          </div>
  )
}

export default Profile