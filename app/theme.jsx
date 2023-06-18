"use client";
import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ButtonDark from "./buttonDark";

const Theme = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenSize <= 1024 ? (
    <div className={`fixed  z-[99999] flex justify-center items-center text-center bottom-2/3 transition-all ${showTheme == false ? "-left-20" : "left-0"}`}>
      <div className="flex flex-col items-center justify-center w-20 h-20 gap-3 rounded-r-xl bg-white/60 backdrop-blur-md dark:bg-slate-700/60">
        <h1 className="text-base font-semibold">Tema</h1>
        <ButtonDark />
      </div>
      <div>
        <button
          className="flex items-center justify-center w-12 h-12 text-2xl bg-white rounded-r-full bg-white/60 text-slate-600 backdrop-blur-md dark:bg-slate-700/60 transition-all duration-[400ms] dark:text-white"
          onClick={() => setShowTheme(!showTheme)}
        >
          <PlayArrowIcon className={` transition-all duration-[400ms] ${showTheme ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Theme;
