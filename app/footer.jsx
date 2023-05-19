"use client";
import Link from "next/link";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 overflow-hidden px-9 pb-36 lg:pb-14 dark:bg-slate-800">
        <motion.section variants={slideIn("down", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="flex flex-col justify-center mx-auto gap-7 md:w4/5 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-indigo-500 md:text-xl md:font-semibold">Azhari</h1>
            <h6 className="text-sm text-slate-500 md:text-base dark:text-slate-300">Demisioner Rektor USN Kolaka</h6>
            <div className="gap-3 mb-0 text-sm md:text-base">
              <Link href={"https://www.facebook.com/profile.php?id=100079286988073"} target="blank">
                <FacebookRoundedIcon className="text-slate-500" fontSize="small" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-slate-700 md:text-xl dark:text-slate-50">Informasi</h6>
            <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-base dark:text-slate-300">
              <Link href={"#"} className="cursor-pointer hover:text-indigo-500">
                Beranda
              </Link>
              <Link href={"#"} className="cursor-pointer hover:text-indigo-500">
                Tentang
              </Link>
              <Link href={"#"} className="cursor-pointer hover:text-indigo-500">
                Galeri
              </Link>
              <Link href={"#"} className="cursor-pointer hover:text-indigo-500">
                Pencapaian
              </Link>
              <Link href={"#"} className="cursor-pointer hover:text-indigo-500">
                Kontak
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-slate-700 md:text-xl dark:text-slate-50">Alamat</h6>
            <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-base dark:text-slate-300">
              <p className="cursor-pointer hover:text-indigo-500">Mawasangka - Buton Tengah</p>
              <p className="cursor-pointer hover:text-indigo-500">Sulawesi Tenggara - Indonesia</p>
              <p className="cursor-pointer hover:text-indigo-500">+62-858-6525-7441</p>
              <p className="cursor-pointer hover:text-indigo-500">azhari@gmail.com</p>
            </div>
          </div>
        </motion.section>
      </footer>
    </>
  );
};

export default Footer;
