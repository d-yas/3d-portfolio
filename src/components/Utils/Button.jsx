const Button = ({ title, className }) => {
  return (
    <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-code font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white  ${className}`}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0 text-xs">
        {title}
      </span>
    </button>
  );
};

export default Button;
