import { navigation } from "../constants";
import Button from "./Utils/Button";

const Header = () => {
  return (
    <div
      className={` fixed top-0  w-full z-50  flex items-center justify-between :mx-auto pt-4`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <span className="font-mont font-bold text-[1.85rem] block">
          Denizcan.
        </span>
      </div>

      <div className="block">
        <Button className="mr-6 uppercase " title="Contact me" />
      </div>
    </div>
  );
};

export default Header;
