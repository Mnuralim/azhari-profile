"use client";
// import { ilmiah, penghargaan } from "@/data/penghargaan";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export const Penghargaan = ({ achiev }) => {
  return (
    <section className="relative flex justify-center p-5  overflow-auto lg:px-16 ">
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
            {achiev.map((data, index) => (
              <tr key={data.id}>
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
