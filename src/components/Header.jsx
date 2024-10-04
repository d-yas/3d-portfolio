import { navigation } from "../constants";
import Button from "./Utils/Button";

const Header = () => {
  return (
    <div
      className={`bg-black fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:flex lg:items-center lg:justify-between lg:mx-auto lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a
          className="font-mont font-bold text-[1.85rem] block"
          href="#Hero"
        >
          Denizcan.
        </a>
      </div>
      <nav
        className={`lg:flex lg:justify-center w-full lg:w-auto lg:bg-transparent  mr-32`}
      >
        <div
          className={`relative z-2 flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto `}
        >
          {navigation.map((item) => (
            <a
              className={`block relative font-code text-xl uppercase text-n-3 hover:text-white lg:leading-5 lg:text-xs lg:font-semibold px-12 py-6 md:py-8`}
              key={item.id}
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
      <div className="hidden lg:block">
        <Button className="mr-6 uppercase " title="Contact me" />
      </div>
    </div>
  );
};

export default Header;