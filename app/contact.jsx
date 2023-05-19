"use client";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Contact = () => {
  return (
    <section className="relative mt-32 mb-20" id="contact">
      <h1 className="text-4xl font-bold text-center lg:text-6xl">
        Hubungi <span className="text-indigo-500">Saya</span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-10">
        <motion.div variants={slideIn("left", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="flex flex-col items-center justify-center w-11/12 p-10 bg-white shadow-md rounded-xl lg:w-2/6">
          <motion.div className="flex flex-col justify-center gap-5">
            <div className="flex gap-4">
              <div>
                <CallOutlinedIcon className="text-indigo-400" />
              </div>
              <div>
                <h1 className="font-medium text-slate-600 md:text-lg">Telepon</h1>
                <p className="text-sm text-slate-500">+62-858-6525-7441</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <EmailOutlinedIcon className="text-indigo-400" />
              </div>
              <div>
                <h1 className="font-medium text-slate-600 md:text-lg">Email</h1>
                <p className="text-sm text-slate-500">azhari@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <LocationOnOutlinedIcon className="text-indigo-400" />
              </div>
              <div>
                <h1 className="font-medium text-slate-600 md:text-lg">Lokasi</h1>
                <p className="text-sm text-slate-500">Buton Tengah - Sulawesi Tenggara - Indonesia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="w-3/4 py-10 mt-10 bg-white shadow-md px-7 rounded-xl md:mt-5 lg:w-1/3">
          <form className="flex flex-col items-center justify-center gap-3">
            <div className="w-full">
              <label className="text-slate-500 md:text-lg" htmlFor="name">
                Nama :
              </label>
              <input className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base" type="text" placeholder="Nama" />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg" htmlFor="email">
                Email :
              </label>
              <input className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none bg-slate-100 md:text-base" type="email" placeholder="email" />
            </div>
            <div className="w-full">
              <label className="text-slate-500 md:text-lg" htmlFor="message">
                Pesan :
              </label>
              <textarea name="message" id="message" rows="4" placeholder="Pesanmu..." className="block w-full px-2 py-1 mt-2 text-sm rounded-md outline-none resize-none bg-slate-100 md:text-base"></textarea>
            </div>
            <div className="self-start mt-5">
              <button type="submit" className="px-3 py-1 text-white bg-indigo-500 rounded ">
                <SendOutlinedIcon className="pr-2" />
                Kirim
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
