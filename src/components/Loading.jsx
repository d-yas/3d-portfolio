import React, { useEffect, useState } from 'react';

const Loading = () => {
/*   const fullText = "CRREATING DIGITAL EXPERIENCE."; // Corrected the text
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index += 1;
      } else {
        clearInterval(interval); // Clear the interval when done
      }
    }, 40); // Adjust the timing as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText]); */

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className={`font-code text-sm font-bold mb-60 uppercase`}>
        Creating digital experience
      </div>
      
      <h2 className="absolute rotate-90 text-3xl font-bold mb-4 text-slate-200">{`</>`}</h2>
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4  border-[#4246e6] border-solid mb-4"></div>
    </div>
  );
}

export default Loading;
