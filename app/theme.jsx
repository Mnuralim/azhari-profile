"use client";
import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Theme = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [dark, setDark] = useState(true);

  const togleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark == false) {
      document.body.className = "light";
    } else {
      document.body.className = "dark";
    }
  });
  return (
    <div className={`fixed left-0 z-50 flex justify-center items-center text-center bottom-1/3 transition-all ${showTheme == false ? "-left-14" : ""}`}>
      <div className="flex flex-col items-center justify-center h-20 gap-3 w-14 rounded-r-xl bg-white/60 backdrop-blur-md dark:bg-slate-700/60">
        <h1 className="text-base font-semibold">Tema</h1>
        <button onClick={togleDark}>
          <DarkModeOutlinedIcon />
        </button>
      </div>
      <div>
        <button
          className="flex items-center justify-center w-12 h-12 text-2xl bg-white rounded-r-full bg-white/60 text-slate-600 backdrop-blur-md dark:bg-slate-700/60 transition-all duration-[400ms] dark:text-white"
          onClick={() => setShowTheme(!showTheme)}
        >
          <PlayArrowIcon className={`transition-all duration-[400ms] ${showTheme ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default Theme;
