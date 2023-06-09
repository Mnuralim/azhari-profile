"use client";
import React, { useState, useEffect } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ButtonDark = () => {
  const [dark, setDark] = useState(true);

  const togleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark == false) {
      document.getElementById("all").className = "light";
    } else {
      document.getElementById("all").className = "dark";
    }
  });
  return (
    <div>
      <button onClick={togleDark}>
        <DarkModeOutlinedIcon />
      </button>
    </div>
  );
};

export default ButtonDark;
