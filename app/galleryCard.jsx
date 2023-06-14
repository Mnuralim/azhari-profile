"use client";
import React from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import { galleryPhoto, galleryVideo } from "@/data/gallery";

export const GalleryCardPhoto = ({ photo }) => {
  return (
    <div>
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {photo.map((data) => (
          <motion.div variants={galleryVariant} key={data._id}>
            <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
            <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
              <div style={{ backgroundImage: `url(${data.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const GalleryCardVideo = ({ video }) => {
  return (
    <div>
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {video.map((data) => (
          <motion.div variants={galleryVariant} key={data._id}>
            <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
            <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
              <iframe width="100%" height="315" loading="lazy" src={data.url} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            </div>
          </motion.div>
        ))}
        {/* <motion.div variants={galleryVariant}>
          <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Azhari yang Menginspirasi</h2>
          <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
            <video src="https://youtu.be/-Nec3XJLrKo" className="w-full h-full" controls>
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  );
};
