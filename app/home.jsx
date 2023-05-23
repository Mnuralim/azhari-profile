"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export const HomePage = () => {
  return (
    <section id="home" className="relative p-5 lg:px-16">
      <div className="relative z-50 flex flex-col items-center justify-center h-screen mt-10 md:gap-5 lg:flex-row-reverse lg:gap-48">
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="bg-indigo-500 w-80 h-80 blob opacity-100 overflow-hidden lg:h-[450px] lg:w-[450px]">
          <img src={"/img/azhari.png"} alt="azhari" className="mt-5 -mb-10" />
        </motion.div>
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mt-10 text-center md:mt-0 md:text-left">
          <h1 className="text-4xl font-bold text-slate-700 md:text-5xl dark:text-slate-50 ">
            DR. Azhari,<span className="text-indigo-500">S.STP., M.Si</span>
          </h1>
          <h2 className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-400">Rektor USN Periode 2014-2018, 2018-2022</h2>
          <p className="mt-3 mb-5 text-lg text-slate-500 lg:w-96 dark:text-slate-50">"Mari kita desain pondasi dan pembangunan identitas masa kini dan masa depan jangka panjang Buton Tengah!"</p>
          {/* <div>
            <Link href={"#"} className="px-4 py-3 text-white bg-indigo-500 rounded ">
              <SendOutlinedIcon className="mr-2" />
              Hubungi Saya
            </Link>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
