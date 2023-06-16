"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import axios from "axios";

const About = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [wife, setWife] = useState("");
  const [firstchild, setFirstchild] = useState("");
  const [secondchild, setSecondchild] = useState("");
  const [thirdchild, setThirdchild] = useState("");
  const [fourthchild, setFourthchild] = useState("");
  const [imageAbout, setImageAbout] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      const getData = await axios.get("https://colorful-calf-helmet.cyclic.app/get-about");
      setName(getData.data[0]?.name);
      setBirth(getData.data[0]?.birt);
      setWife(getData.data[0]?.wifeName);
      setFirstchild(getData.data[0]?.firstchild);
      setSecondchild(getData.data[0]?.secondchild);
      setThirdchild(getData.data[0]?.thirdchild);
      setFourthchild(getData.data[0]?.fourthchild);
      setImageAbout(getData.data[0]?.images);
    };
    getAllData();
  }, []);

  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20">
      <div className="relative z-50 flex flex-col items-center justify-center mt-5 lg:flex-row lg:gap-48 ">
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mr-5 rounded-lg opacity-100 lg:h-[600px] lg:w-[410px]">
          <img src={imageAbout} className="w-full h-full mx-auto my-auto rounded-b-full" />
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show">
          <h1 className="mt-10 mb-5 text-4xl font-bold text-center text-slate-700 lg:text-5xl lg:text-left dark:text-slate-50">
            Tentang <span className="text-indigo-500">Azhari</span>
          </h1>

          {/* <p className="mt-3 mb-5 text-base text-slate-500 md:w-96 lg:w-96 dark:text-slate-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis doloribus officia soluta reprehenderit amet culpa quidem aspernatur aperiam. Nesciunt dolorem voluptatibus magni, soluta repellendus error voluptatem accusamus enim
            nulla ex ducimus deleniti libero? Placeat aliquam exercitationem dicta perferendis ex possimus?
          </p> */}
          <div className="w-full h-1 my-10 bg-indigo-500"></div>

          <div className=" md:w-96 lg:w-96">
            <table className="text-sm leading-6 dark:text-slate-50 text-slate-500">
              <tbody>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Nama</span> <span>:</span>
                  </td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Tempat Lahir</span> <span>:</span>
                  </td>
                  <td>{birth}</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Istri</span>
                    <span>:</span>
                  </td>
                  <td className="pr-2 ">{wife}</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Anak</span>
                    <span>:</span>
                  </td>
                  <td>
                    <ul>
                      <li>{firstchild}</li>
                      <li>{secondchild}</li>
                      <li>{thirdchild}</li>
                      <li>{fourthchild}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full h-1 my-10 bg-indigo-500"></div>

          {/* <div className="w-full h-2 mt-5">
            <Link spy={true} smooth={true} offset={50} duration={500} to="history" className="block w-full px-4 py-3 text-center text-white bg-indigo-500 rounded cursor-pointer">
              Riwayat
              <SendOutlinedIcon className="pl-2" />
            </Link>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
