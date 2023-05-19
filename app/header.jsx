"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setNavbarVisible(false);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setNavbarVisible(true);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  return (
    <>
      <header>{navbarVisible || screenSize >= 1024 ? <Navbar /> : ""}</header>
    </>
  );
};

export default Header;
