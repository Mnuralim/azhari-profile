"use client";
import React, { useState } from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import { narasi } from "@/data/narasi";
import { FullNarasi } from "./fullNarasi";

const Narasi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  if (openModal === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const handleOpenModal = (id) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <section id="narasi" className="relative flex items-center min-h-screen p-5 mt-10 ">
      <div>
        <h1 className="mt-10 mb-5 text-4xl font-bold text-center lg:mt-24 lg:text-5xl">Narasi</h1>
        <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {narasi.map((data) => (
            <motion.div key={data.id} variants={galleryVariant} className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
              <div style={{ backgroundImage: `url('${data.thumbnail}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] rounded-md"></div>
              <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
                <div>
                  <PushPinOutlinedIcon fontSize="small" />
                  <span>{data.place}</span>
                </div>
                <div>
                  <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                  <span>{data.date}</span>
                </div>
              </div>
              <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {data.subtitle}
                <span>
                  {/* <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=pfbid02JgxpY9CTWxyhXv796WceS6V5tvzSMFpUHokztJpBiD6sfVptmoUmyGGooKd81r3tl&id=100079286988073"} className="text-indigo-500">
                    lihat selengkapnya
                  </Link> */}
                  <button onClick={() => handleOpenModal(data.id)} className="text-indigo-500">
                    ...lihat selengkapnya
                  </button>
                </span>
              </p>
              <FullNarasi isOpen={openModal} onClose={handleCloseModal} data={currentId - 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Narasi;
