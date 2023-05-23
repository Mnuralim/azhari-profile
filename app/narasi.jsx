"use client";
import React from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";

const Narasi = () => {
  return (
    <section id="narasi" className="relative min-h-screen flex items-center p-5 mt-10 ">
      <div>
        <h1 className="mb-5 text-4xl font-bold text-center mt-10 lg:mt-24 lg:text-5xl">Narasi</h1>
        <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={galleryVariant} className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
            <div style={{ backgroundImage: "url('/img/bagian1.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] rounded-md"></div>
            <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
              <div>
                <PushPinOutlinedIcon fontSize="small" />
                <span>Buton Tengah</span>
              </div>
              <div>
                <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                <span>12 Mei 2023</span>
              </div>
            </div>
            <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">Transportasi Laut Buton Tengah Berdampak Positif (Doktor Azhari Effect)</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Dua gagasan Doktor Azhari dipastikan berdampak sangat besar pada peningkatan pendapatan ekonomi jasa transportasi laut se-Buton Tengah...{" "}
              <span>
                <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=pfbid02JgxpY9CTWxyhXv796WceS6V5tvzSMFpUHokztJpBiD6sfVptmoUmyGGooKd81r3tl&id=100079286988073"} className="text-indigo-500">
                  lihat selengkapnya
                </Link>
              </span>
            </p>
          </motion.div>

          <motion.div variants={galleryVariant} className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
            {/* <img src="/img/blog1.jpg" alt="" className="max-h-[156px] w-full" /> */}
            <div style={{ backgroundImage: "url('/img/bagian2.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-[250px] rounded-md"></div>
            <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
              <div>
                <PushPinOutlinedIcon fontSize="small" />
                <span>Buton Tengah</span>
              </div>
              <div>
                <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                <span>13 Mei 2023</span>
              </div>
            </div>
            <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">Sudah Saatnya Supir Mobil Penumpang dan Ojek Berpihak 2024</h2>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Buton Tengah lahir menjadi daerah baru sejak 24 Juli 2014, akan genap 9 tahun usianya pada 2023 ini. Kita semua sadari daerah tercinta Buteng...{" "}
              <span>
                <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=240889921897239&id=100079286988073"} className="text-indigo-500">
                  lihat selengkapnya
                </Link>
              </span>
            </p>
          </motion.div>

          <motion.div variants={galleryVariant} className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
            {/* <img src="/img/blog1.jpg" alt="" className="max-h-[156px] w-full" /> */}
            <div style={{ backgroundImage: "url('/img/bagian4.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-[250px] rounded-md"></div>
            <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
              <div>
                <PushPinOutlinedIcon fontSize="small" />
                <span>Buton Tengah</span>
              </div>
              <div>
                <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                <span>16 Mei 2023</span>
              </div>
            </div>
            <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">Kebangkitan Ekonomi Nelayan Buton Tengah</h2>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Penduduk Buton Tengah sebagian besar bermukim tidak jauh dari daerah pesisir. Kendati demikian masyarakat banyak yang berprofesi sebagai nelayan...{" "}
              <span>
                <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=242514275068137&id=100079286988073"} className="text-indigo-500">
                  lihat selengkapnya
                </Link>
              </span>
            </p>
          </motion.div>
          <motion.div variants={galleryVariant} className="w-full p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
            {/* <img src="/img/blog1.jpg" alt="" className="max-h-[156px] w-full" /> */}
            <div style={{ backgroundImage: "url('/img/blog2.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-[250px] rounded-md"></div>
            <div className="flex gap-4 mt-3 text-sm text-slate-500 dark:text-slate-300">
              <div>
                <PushPinOutlinedIcon fontSize="small" />
                <span>Buton Tengah</span>
              </div>
              <div>
                <CalendarMonthOutlinedIcon fontSize="small" className="mb-1" />
                <span>16 Mei 2023</span>
              </div>
            </div>
            <h2 className="my-3 font-semibold text-slate-700 dark:text-slate-50">MENELUSURI DASAR SUDUT PANDANG CALON KUAT BUPATI BUTON TENGAH 2024</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Wawasan dan latar belakang seseorang dapat mempengaruhi sudut pandang pengambilan keputusan, begitu pun dalam pemecahan sebuah masalah selalu bersinggungan...{" "}
              <span>
                <Link target="_blank" href={"https://www.facebook.com/permalink.php?story_fbid=239606668692231&id=100079286988073"} className="text-indigo-500">
                  lihat selengkapnya
                </Link>
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Narasi;
