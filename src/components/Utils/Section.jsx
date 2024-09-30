const Section = ({ id, className = "", children, three, stars, normal }) => {
  return (
    <>
      {normal && (
        <div
          id={id}
          className={`relative py-10 lg:py-16 xl:py-20 ${className}`}
        >
          {children}
        </div>
      )}
      {three && (
        <div id={id} className={`top-0 left-0 ${className}`}>
          {children}
        </div>
      )}
      {stars && (
        <div id={id} className={`top-0 left-0 absolute h-screen w-full ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default Section;
