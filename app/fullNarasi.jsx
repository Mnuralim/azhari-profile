"use client";
import React, { useState, useEffect } from "react";
import { narasi } from "@/data/narasi";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import axios from "axios";

export const FullNarasi = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [dataNarasi, setDataNarasi] = useState("");
  const [narasiArticle, setNarasiArticle] = useState("");
  useEffect(() => {
    const getAllData = async () => {
      const getData = await axios.get(`https://colorful-calf-helmet.cyclic.app/get-narasi/${data}`);
      setDataNarasi(getData.data);
      setNarasiArticle(getData.data.article);
    };
    getAllData();
  }, []);

  const words = narasiArticle.split(" ");
  const subtitle = words.slice(0, 45).join(" ");
  const content = words.slice(45).join(" ");

  return (
    <motion.section variants={galleryContainerVariant} initial="hidden" whileInView="show" className=" fixed inset-0 flex  justify-center overflow-auto z-[100] bg-slate-50 text-lg  dark:bg-slate-900 ">
      <motion.div variants={galleryVariant} className="flex w-full p-5 mb-10 md:px-80">
        <div className="w-full h-24 mt-5 ">
          <div>
            <div className="flex gap-6 text-sm font-medium dark:text-slate-300">
              <p>
                Terbit <span className="text-slate-600 dark:text-slate-100">{dataNarasi.year} </span>
              </p>
              <p>{dataNarasi.place}</p>
            </div>
            <div className="my-5">
              <h2 className="text-3xl font-bold">{dataNarasi.title}</h2>
            </div>
            <div className="text-lg ">
              <p>{subtitle}</p>
              {/* <div style={{ backgroundImage: `url('${dataNarasi.image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[320px] rounded-md my-5 md:min-h-[680px]"></div> */}
              <img src={dataNarasi.image} alt={dataNarasi.title} className="w-full" />
              <div>
                <p className="mb-5 whitespace-pre-wrap">{content}</p>
              </div>
            </div>
            <div>
              <button onClick={onClose} className="py-3 mb-20 font-semibold text-white bg-indigo-500 rounded px-7 mt-7">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
