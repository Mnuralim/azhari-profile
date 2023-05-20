"use client";
import React, { useState, useEffect } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ButtonDark = () => {
  const [dark, setDark] = useState(false);

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
    <div>
      <button onClick={togleDark}>
        <DarkModeOutlinedIcon />
      </button>
    </div>
  );
};

export default ButtonDark;
