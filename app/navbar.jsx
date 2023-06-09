"use client";
import React, { useState, useEffect, createContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { navVariants, slideIn } from "@/utils/motion";
import ButtonDark from "./buttonDark";
import { usePathname } from "next/navigation";

export const DarkModeContext = createContext();

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(0);
  const path = usePathname();

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
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className="fixed top-0 z-[100] flex h-14  min-w-full justify-center bg-white/50 backdrop-blur-lg sm:px-28 dark:bg-slate-800/50">
      <div className="container flex items-center justify-between dark:text-slate-50">
        <div>
          <NextLink href={"/"} className="text-indigo-500 cursor-pointer">
            Azhari
          </NextLink>
        </div>
        <div className="flex gap-4 ">
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="home" className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Beranda
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="about" className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Tentang
            </Link>
          </div>
          <div>
            <Link to="award" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Penghargaan
            </Link>
          </div>
          <div>
            <Link to="ilmiah" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Ilmiah
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="narasi" className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Narasi
            </Link>
          </div>

          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="gallery" className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Galeri
            </Link>
          </div>
          <div>
            <Link spy={true} smooth={true} offset={50} duration={500} to="contact" className="cursor-pointer text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-slate-50">
              Aspirasi
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute text-2xl text-indigo-500 right-10 top-3">
        <ButtonDark />
      </div>
    </motion.nav>
  ) : path == "/riwayat" ? (
    ""
  ) : (
    <motion.nav
      variants={slideIn("up", "tween", 0.1, 0.3)}
      initial="hidden"
      whileInView="show"
      className="fixed inset-x-0 bottom-6 z-[100] mx-auto flex h-16 w-4/5 items-center justify-evenly rounded-2xl bg-white/40 text-lg backdrop-blur-md dark:bg-slate-900/50 "
    >
      <Link spy={true} smooth={true} offset={50} duration={500} to="home">
        <HomeOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="about">
        <PersonOutlineOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="award">
        <EmojiEventsOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="ilmiah">
        <MenuBookOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="narasi">
        <EmojiObjectsOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="gallery">
        <CollectionsOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
      <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
        <CallOutlinedIcon className="cursor-pointer text-black/75 hover:text-indigo-500 dark:text-slate-50" />
      </Link>
    </motion.nav>
  );
};

export default Navbar;
