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
        <div id={id} className={`top-0 left-0 h-screen bg-black ${className}`}>
          {children}
        </div>
      )}

    </>
  );
};

export default Section;
