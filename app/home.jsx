"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Link from "next/link";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export const HomePage = () => {
  return (
    <section className="p-5 relative lg:px-16">
      <div className="relative h-screen z-50 flex flex-col justify-center items-center md:gap-5 lg:flex-row-reverse lg:gap-48">
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="bg-indigo-500 w-80 h-80 blob opacity-100 overflow-hidden lg:h-[450px] lg:w-[450px]">
          <img src={"/img/azhari.png"} className="mt-5 -mb-10" />
        </motion.div>
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="text-center mt-10 md:mt-0 md:text-left">
          <h1 className="text-4xl font-bold text-slate-700 lg:text-6xl">
            Hai,saya <span className="text-indigo-500">Azhari</span>
          </h1>
          <h2 className="text-xl font-medium text-slate-600 mt-4">Demisioner Rektor USN Kolaka</h2>
          <p className="text-lg text-slate-500 mt-3 lg:w-96 mb-5">"Mari kita desain pondasi dan pembangunan identitas masa kini dan masa depan jangka panjang Buton Tengah!"</p>
          <div>
            <Link href={"#"} className="text-white bg-indigo-500 px-4 py-3 rounded ">
              <SendOutlinedIcon className="mr-2" />
              Hubungi Saya
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
