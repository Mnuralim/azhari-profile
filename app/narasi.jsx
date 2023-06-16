"use client";
import React, { useState, useEffect } from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import { FullNarasi } from "./fullNarasi";
import axios from "axios";

const Narasi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const [dataNarasi, setDataNarasi] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      const getData = await axios.get("https://colorful-calf-helmet.cyclic.app/get-narasi");
      setDataNarasi(getData.data);
    };
    getAllData();
  }, []);

  const getSubTitle = (article) => {
    const subtitle = article.split(" ").slice(0, 20).join(" ");
    return subtitle;
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = openModal ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
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
          {dataNarasi.map((data) => (
            <motion.div key={data._id} variants={galleryVariant} className="w-full p-2  rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
              <div className="overflow-hidden">
                <img src={data.image} alt={data.title} className="hover:scale-110  transition-all ease-in-out duration-300 w-full h-[344px]" />
              </div>
              <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
                <div>
                  <PushPinOutlinedIcon fontSize="small" />
                  <span>{data.place}</span>
                </div>
                <div>
                  <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                  <span>{data.year}</span>
                </div>
              </div>
              <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {getSubTitle(data.article)}
                <span>
                  {/* <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=pfbid02JgxpY9CTWxyhXv796WceS6V5tvzSMFpUHokztJpBiD6sfVptmoUmyGGooKd81r3tl&id=100079286988073"} className="text-indigo-500">
                    lihat selengkapnya
                  </Link> */}
                  <button onClick={() => handleOpenModal(data._id)} className="text-indigo-500">
                    ...lihat selengkapnya
                  </button>
                </span>
              </p>
              <FullNarasi isOpen={openModal} onClose={handleCloseModal} data={currentId} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Narasi;
