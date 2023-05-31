"use client";
import React, { useState } from "react";
import { historyWork, organizationHistory, studyHistory } from "@/data/history";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";

export const HistoryWork = () => {
  return (
    <section id="history" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20 ">
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show">
        <div className="flex flex-col">
          {historyWork.map((data) => (
            <motion.div variants={galleryVariant} key={data.id} className="flex justify-center gap-3 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div>
                  <img src={data.thumbnail} alt={data.title} className="w-[80px] h-[80px] rounded-full bg-black border-[rgb(209,59,59)] border-opacity-0 border-2 group-hover:border-opacity-100 transition-all duration-300 ease-in-out" />
                </div>
                <div className="h-[60px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg dark:text-slate-50">{data.title}</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{data.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const StudyHistory = () => {
  return (
    <section id="history" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20 ">
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show">
        <div className="flex flex-col">
          {studyHistory.map((data) => (
            <motion.div variants={galleryVariant} key={data.id} className="flex justify-center  gap-3 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div>
                  <img src={data.thumbnail} alt={data.title} className="w-[80px] h-[80px] rounded-full bg-black border-[rgb(209,59,59)] border-opacity-0 border-2 group-hover:border-opacity-100 transition-all duration-300 ease-in-out" />
                </div>
                <div className="h-[60px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-1 lg:w-[500px]">
                <h2 className="mb-1 mt-1 text-base font-bold text-indigo-500 md:mt-0 lg:text-lg dark:text-slate-50">{data.title}</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{data.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const OrganizationHistory = () => {
  return (
    <section id="history" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20 ">
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show">
        <div className="flex flex-col">
          {organizationHistory.map((data) => (
            <motion.div variants={galleryVariant} key={data.id} className="flex justify-center gap-3 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div>
                  <img src={data.thumbnail} alt={data.title} className="w-[80px] h-[80px] rounded-full bg-black border-[rgb(209,59,59)] border-opacity-0 border-2 group-hover:border-opacity-100 transition-all duration-300 ease-in-out" />
                </div>
                <div className="h-[60px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg dark:text-slate-50">{data.title}</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{data.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
