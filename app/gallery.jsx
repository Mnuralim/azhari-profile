"use client";
import React from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="relative min-h-screen flex items-center p-5 mt-10 lg:mt-20">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-bold text-center mt-10 text-slate-700 lg:text-6xl lg:mt-24 dark:text-slate-50">
            Galeri <span className="text-indigo-500">Azhari</span>
          </h1>
          <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Silaturahmi Dengan Mahasiswa</h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/mhs.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Garda Azhari di Lakudo </h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/galeri2.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Kamomose Masyarakat Lakudo</h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/galeri3.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Silaturahmi Dengan Mahasiswa</h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/mhs.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Silaturahmi Dengan Mahasiswa</h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/mhs.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
            <motion.div variants={galleryVariant}>
              <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Silaturahmi Dengan Mahasiswa</h2>
              <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
                <div style={{ backgroundImage: "url('/img/mhs.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
