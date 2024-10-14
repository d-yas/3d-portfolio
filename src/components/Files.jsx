const Files = ({ setActiveComponent, setIsFolderVisible }) => {
  return (
    <div className="flex gap-15 justify-end mx-15 ">
      <div
        className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg cursor-pointer"
        onClick={() => {
          setActiveComponent("WebProjects");
          setIsFolderVisible(true); // Ensure the Folder component is visible
        }}
      >
        <img src="./code-folder.png" height={60} width={60} alt="Web Projects" />
        <label className=" uppercase font-code font-bold text-sm">Web Projects</label>
      </div>

      <div
        className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg cursor-pointer"
        onClick={() => {
          setActiveComponent("DataProjects");
          setIsFolderVisible(true); // Ensure the Folder component is visible
        }}
      >
        <img src="./code-folder.png" height={60} width={60} alt="Data Projects" />
        <label className="-mt-1 uppercase font-code font-bold text-sm">Data Projects</label>
      </div>

      <div
        className="relative mt-16 right-5 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg cursor-pointer"
        onClick={() => {
          setActiveComponent("Profile");
          setIsFolderVisible(true); // Ensure the Folder component is visible
        }}
      >
        <img src="./user-folder.png" height={60} width={60} alt="Profile" />
        <label className="uppercase font-code font-bold text-sm">Profile</label>
      </div>
      
    </div>
  );
};

export default Files;
