"use client";
import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
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
  return screenSize >= 1024 ? (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className="fixed top-0 z-[100] flex h-14  min-w-full justify-center bg-white/50 backdrop-blur-lg sm:px-28 ">
      <div className="container flex items-center justify-between ">
        <div>
          <Link spy={true} smooth={true} offset={50} duration={500} to="home" className="text-indigo-500 cursor-pointer">
            Azhari
          </Link>
        </div>
        <div className="flex gap-4">
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="home" className="cursor-pointer text-slate-500">
              Beranda
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="about" className="cursor-pointer text-slate-500">
              Tentang
            </Link>
          </div>
          <div>
            <Link to="" className="text-slate-500">
              Pencapaian
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="gallery" className="cursor-pointer text-slate-500">
              Galeri
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="contact" className="cursor-pointer text-slate-500">
              Kontak
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute text-2xl text-indigo-500 right-10 top-3">
        <button>
          <DarkModeOutlinedIcon />
        </button>
      </div>
    </motion.nav>
  ) : (
    <nav className="fixed bottom-6 left-1/2 z-[100] my-auto flex h-16 w-4/5 -translate-y-1/2 -translate-x-1/2  items-center justify-evenly rounded-2xl bg-white/40 text-lg backdrop-blur-md ">
      <Link spy={true} smooth={true} offset={50} duration={500} to="home">
        <HomeOutlinedIcon className="cursor-pointer text-black/75" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="about">
        <PersonOutlineOutlinedIcon className="cursor-pointer text-black/75" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="home">
        <EmojiEventsOutlinedIcon className="cursor-pointer text-black/75" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="gallery">
        <CollectionsOutlinedIcon className="cursor-pointer text-black/75" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
        <CallOutlinedIcon className="cursor-pointer text-black/75" />
      </Link>
    </nav>
  );
};

export default Navbar;
