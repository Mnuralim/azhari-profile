"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setNavbarVisible(false);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setNavbarVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>{navbarVisible ? <Navbar /> : ""}</header>
    </>
  );
};

export default Header;
