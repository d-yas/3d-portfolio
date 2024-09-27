import { navigation } from "../constants";

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:flex lg:mx-auto lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a
          className=" font-mont font-bold border text-[1.85rem] border-n-1 block w-full"
          href="#Hero"
        >
          Denizcan.
        </a>
        <nav className={`fixed top-[5rem] left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className={`relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto`}>
           {navigation.map((item) => (
               <a className={`block relative font-code text-xl uppercase text-n-3 transition-colors hover:text-white`} key={item.id} href={item.url}>{/* PATHNAME HASH YAPILCAK. */}
                  {item.title} 
               </a>
           ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
