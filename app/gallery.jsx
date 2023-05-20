"use client";
import React from "react";
import Link from "next/link";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";

const Gallery = () => {
  return (
    <>
      <section id="narasi" className="relative min-h-screen p-5 mt-10 lg:mt-20">
        <h1 className="mb-10 text-4xl font-bold text-center text-slate-700 lg:text-6xl dark:text-slate-50">
          Galeri <span className="text-indigo-500">Azhari</span>
        </h1>
        <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={galleryVariant}>
            <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Silaturahmi Dengan Mahasiswa</h2>
            <div className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
              <div style={{ backgroundImage: "url('/img/mhs.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] rounded-md"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Gallery;
