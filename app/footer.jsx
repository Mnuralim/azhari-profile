"use client";
import Link from "next/link";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden px-9 pb-36 pt-10 lg:pb-14">
        <motion.section variants={slideIn("down", "tween", 0.5, 1)} initial="hidden" whileInView="show" className="mx-auto flex flex-col  gap-7 justify-center md:w4/5 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col gap-2">
            <h1 className="text-indigo-500 font-medium md:text-xl md:font-semibold">Azhari</h1>
            <h6 className="text-sm text-slate-500 md:text-base">Demisioner Rektor USN Kolaka</h6>
            <div className="mb-0 text-sm gap-3 md:text-base">
              <Link href={"https://www.facebook.com/profile.php?id=100079286988073"} target="blank">
                <FacebookRoundedIcon className="text-slate-500" fontSize="small" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-slate-700  md:text-xl">Informasi</h6>
            <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-base">
              <Link href={"#"} className="hover:text-indigo-500 cursor-pointer">
                Beranda
              </Link>
              <Link href={"#"} className="hover:text-indigo-500 cursor-pointer">
                Tentang
              </Link>
              <Link href={"#"} className="hover:text-indigo-500 cursor-pointer">
                Galeri
              </Link>
              <Link href={"#"} className="hover:text-indigo-500 cursor-pointer">
                Pencapaian
              </Link>
              <Link href={"#"} className="hover:text-indigo-500 cursor-pointer">
                Kontak
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-slate-700 md:text-xl">Alamat</h6>
            <div className="flex flex-col gap-2 text-sm text-slate-500 md:text-base">
              <p className="hover:text-indigo-500 cursor-pointer">Mawasangka - Buton Tengah</p>
              <p className="hover:text-indigo-500 cursor-pointer">Sulawesi Tenggara - Indonesia</p>
              <p className="hover:text-indigo-500 cursor-pointer">+62-858-6525-7441</p>
              <p className="hover:text-indigo-500 cursor-pointer">azhari@gmail.com</p>
            </div>
          </div>
        </motion.section>
      </footer>
    </>
  );
};

export default Footer;
