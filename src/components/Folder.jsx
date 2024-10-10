import Projects from "./Projects";
import Profile from "./Profile";

const Folder = () => {
  return (
    <div className={`flex justify-center items-center h-3/4 w-full`}>
      <div
        className={`bg-black w-3/4 h-5/6 mb-10 rounded-lg flex  border-4 border-n-2 border-opacity-50`}
      >
        {/* Sidebar */}
        <div
          className={`text-slate-100 flex flex-col px-10 pt-4 bg-slate-800 rouned-lx gap-4`}
        >
          <div class="w-4 h-4 bg-red-400 rounded-full -mx-6"></div>

          <div className={`flex gap-3  w-full`}>
            <img src="./user-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Profile
            </span>
          </div>
          <div className={`flex items-center gap-3  w-full`}>
            <img src="./code-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Data Projects
            </span>
          </div>
          <div className={`flex items-center gap-3  w-full`}>
            <img src="./code-folder.png" className={`h-5`} alt="" />
            <span
              className={`text-sm font-code text-nowrap uppercase font-medium`}
            >
              Web Projects
            </span>
          </div>
        </div>
        {/* Main Bar */}
        <div className={`text-slate-300 flex flex-col  bg-slate-700 w-full`}>
          <div
            className={`w-full  p-2 bg-slate-900 text-slate-100 uppercase text-lg font-bold leading-5 tracking-wide`}
          >
            Folder Title
          </div>
          {/* <Profile /> */}
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Folder;
