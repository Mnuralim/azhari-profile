import { ilmiah, penghargaan } from "@/data/penghargaan";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export const Penghargaan = () => {
  return (
    <section className="relative flex justify-center p-5 mt-10 overflow-auto lg:px-16 lg:mt-20 ">
      <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="w-full">
        <table className="min-w-full text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">No</th>
              <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Penghargaan</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
            </tr>
          </thead>
          <tbody>
            {penghargaan.map((data) => (
              <tr key={data.id}>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.id}</td>
                <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export const Ilmiah = () => {
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
            {ilmiah.map((data) => (
              <tr key={data.id}>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.id}</td>
                <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};
