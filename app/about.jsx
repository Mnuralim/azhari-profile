"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Link from "next/link";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const About = () => {
  return (
    <section id="about" className="relative p-5 mt-10 lg:px-16">
      <div className="relative z-50 flex flex-col items-center justify-center lg:flex-row lg:gap-48">
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="bg-indigo-500 w-72 h-72 rounded-lg opacity-100 overflow-hidden lg:h-[450px] lg:w-[450px]">
          <img src={"/img/about1.png"} className="mx-auto my-auto mt-5" />
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mt-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-700 lg:text-6xl">
            Tentang <span className="text-indigo-500">Saya</span>
          </h1>
          <p className="mt-3 mb-5 text-lg text-slate-500 md:w-96 lg:w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque aut esse totam nostrum, dolor commodi quos non cumque iure.</p>
          <div>
            <Link href={"#"} className="px-4 py-3 text-white bg-indigo-500 rounded ">
              <SendOutlinedIcon />
              Hubungi Saya
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
