"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import axios from "axios";

export const HomePage = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [dataImage, setDataImage] = useState("");
  const [dataPosition, setDataPosition] = useState("");
  const [dataName, setDataName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      const getData = await axios.get("https://colorful-calf-helmet.cyclic.app/get-beranda");
      setDataImage(getData.data[0].image);
      setDataPosition(getData.data[0].position);
      setDataName(getData.data[0].name);
      setDescription(getData.data[0].description);
    };
    getAllData();
  }, []);
  const homeImage = dataImage;

  const commaIndex = dataName.indexOf(",");
  const firstPart = dataName.slice(0, commaIndex + 1);
  const secondPart = dataName.slice(commaIndex + 1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <section id="home" className="relative p-5 lg:px-16">
      <div className="relative z-50 flex flex-col items-center justify-center h-screen md:gap-5 lg:flex-row-reverse lg:gap-48">
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="bg-indigo-500 w-80 h-80 blob opacity-100 overflow-hidden lg:h-[450px] lg:w-[450px]">
          {screenSize >= 1024 ? <img src={"/img/home5.png"} alt="azhari" className="-mb-10 md:ml-3 transform scale-x-[-1]" /> : <img src={homeImage} alt="azhari" className="-mb-10 md:ml-5 transform scale-x-[-1]" />}
        </motion.div>
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mt-10 text-center md:mt-0 md:text-left">
          <h1 className="text-2xl font-bold text-slate-700 md:text-4xl dark:text-slate-50 ">
            {firstPart}
            <span className="text-indigo-500">{secondPart}</span>
          </h1>
          <h2 className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-400">{dataPosition}</h2>
          <p className="mt-3 mb-5 text-lg leading-10 text-slate-500 lg:w-96 dark:text-slate-50">" {description} "</p>
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
