const Section = ({ id, className = "", children }) => {
  return (
    <div id={id} className={`relative py-10 lg:py-16 xl:py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
