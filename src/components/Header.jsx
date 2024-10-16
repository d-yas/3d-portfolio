import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const ambianceSoundRef = useRef(null);

  useEffect(() => {
    ambianceSoundRef.current = new Audio("./ambiance.mp3");
    ambianceSoundRef.current.loop = true;
    ambianceSoundRef.current.volume = 0.1;

    const startAudio = () => {
      ambianceSoundRef.current.play();
      window.removeEventListener("click", startAudio);
    };
    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      if (ambianceSoundRef.current) {
        ambianceSoundRef.current.pause();
        ambianceSoundRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleMute = () => {
    if (ambianceSoundRef.current) {
      ambianceSoundRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 flex items-center justify-between :mx-auto pt-5">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <span className="font-mont font-bold text-[1.85rem] block">Denizcan.</span>
          
        </div>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <span
            className={`font-mont font-bold text-[1.85rem] block cursor-pointer ${
              isMuted ? "opacity-50" : ""
            }`}
            onClick={toggleMute}
          >
            <img src="./volume.png" height={4} width={32} alt="Volume" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
