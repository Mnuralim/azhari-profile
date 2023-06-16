"use client";
import React from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, slideIn } from "@/utils/motion";
import { galleryVariant } from "@/utils/motion";

export const Ilmiah = ({ ilmiah }) => {
  return (
    <section className="relative flex justify-center p-5 mt-10 overflow-auto lg:px-16 lg:mt-20">
      <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="w-full">
        <table className="min-w-full text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">No</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Publikasi Ilmiah</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
            </tr>
          </thead>
          <tbody>
            {ilmiah.map((data, index) => (
              <tr key={data._id}>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

const dataBook = [
  {
    _id: 1,
    title: "Good Governance dan Otonomi Daerah",
    url: "/img/book/book1.jpeg",
    year: "2000",
  },
  {
    _id: 2,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    url: "/img/book/book2.jpeg",
    year: "2000",
  },
  {
    _id: 3,
    title: "test",
    url: "/img/book/book1.jpeg",
    year: "2000",
  },
  {
    _id: 4,
    title: "test",
    url: "/img/book/book1.jpeg",
    year: "2000",
  },
  {
    _id: 5,
    title: "test",
    url: "/img/book/book1.jpeg",
    year: "2000",
  },
];

export const Book = ({ dataBook }) => {
  return (
    <section className="relative flex items-center justify-center min-h-screen p-5 mt-10 ">
      <div>
        <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dataBook.map((data) => (
            <motion.div key={data._id} variants={galleryVariant} className="flex flex-col justify-between w-full gap-1 p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
              <div className="overflow-hidden">
                <img src={data.image} alt={data.title} className="hover:scale-110  transition-all ease-in-out duration-300 w-full h-[450px]" />
              </div>
              <h1 className="text-lg font-bold text-center text-slate-700 dark:text-slate-50">{data.title}</h1>
              <p className="text-base font-semibold text-center text-slate-600 dark:text-slate-300">Tahun {data.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
