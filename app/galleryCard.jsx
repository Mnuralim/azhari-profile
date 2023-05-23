"use client";
import React from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";

export const GalleryCardPhoto = () => {
  return (
    <div>
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
      </motion.div>
    </div>
  );
};

export const GalleryCardVideo = () => {
  return (
    <div>
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* <motion.div variants={galleryVariant}>
          <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Lorem ipsum dolor sit.</h2>
          <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/7I9kKCnd_Ug" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
        </motion.div> */}
        <motion.div variants={galleryVariant}>
          <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Azhari yang Menginspirasi</h2>
          <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
            <video src="/video/coba.mp4" className="w-full h-full" controls>
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
