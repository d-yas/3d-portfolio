import Folder from "./Folder";
import Footer from "./Footer";
import Files from "./Files";
import Navbar from "./Navbar";
const Intro = () => {
  return (
    <section className="w-full h-screen top-0 left-0">
      <img
        src="./bg-grad.jpeg"
        alt="Desktop"
        className="w-full h-screen fixed  pointer-events-none"
      />
      <Navbar />

      <div className={`absolute w-full h-screen flex flex-col justify-between`}>
        <Files />

        <Folder />

        <Footer />
      </div>
    </section>
  );
};

export default Intro;
