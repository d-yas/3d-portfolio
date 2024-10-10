import Projects from "./Projects";
import WebProjects from "./WebProjects";
import Profile from "./Profile";

const Folder = ({ activeComponent, setActiveComponent, isFolderVisible, setIsFolderVisible }) => {
  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Profile":
        return <Profile />;
      case "DataProjects":
        return <Projects />;
      case "WebProjects":
        return <WebProjects />;
      default:
        return <Profile />;
    }
  };

  // Return null if the Folder is not visible
  if (!isFolderVisible) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-3/4 w-full">
      <div className="bg-black w-3/4 h-5/6 mb-10 rounded-lg flex border-4 border-n-2 border-opacity-50">
        {/* Sidebar */}
        <div className="text-slate-100 flex flex-col px-10 pt-4 bg-slate-800 rounded-lx gap-4">
          {/* Close Button */}
          <div
            className="w-4 h-4 bg-red-400 rounded-full -mx-6 cursor-pointer"
            onClick={() => setIsFolderVisible(false)}
          ></div>

          <div
            className={`flex gap-3 w-full cursor-pointer ${
              activeComponent === "Profile" ? "text-green-500" : ""
            }`}
            onClick={() => setActiveComponent("Profile")}
          >
            <img src="./user-folder.png" className="h-5" alt="Profile" />
            <span className="text-sm font-code text-nowrap uppercase font-medium">Profile</span>
          </div>

          <div
            className={`flex items-center gap-3 w-full cursor-pointer ${
              activeComponent === "DataProjects" ? "text-green-500" : ""
            }`}
            onClick={() => setActiveComponent("DataProjects")}
          >
            <img src="./code-folder.png" className="h-5" alt="Data Projects" />
            <span className="text-sm font-code text-nowrap uppercase font-medium">Data Projects</span>
          </div>

          <div
            className={`flex items-center gap-3 w-full cursor-pointer ${
              activeComponent === "WebProjects" ? "text-green-500" : ""
            }`}
            onClick={() => setActiveComponent("WebProjects")}
          >
            <img src="./code-folder.png" className="h-5" alt="Web Projects" />
            <span className="text-sm font-code text-nowrap uppercase font-medium">Web Projects</span>
          </div>
        </div>

        {/* Main Bar */}
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default Folder;
