"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Link from "next/link";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const About = () => {
  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 ">
      <div className="relative z-50 flex flex-col items-center justify-center mt-5 lg:flex-row lg:gap-48 ">
        {/* <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="bg-indigo-500 w-72 h-72 rounded-lg opacity-100 overflow-hidden lg:h-[450px] lg:w-[450px]">
          <img src={"/img/about1.png"} className="mx-auto my-auto mt-5" />
        </motion.div> */}
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mr-5 rounded-lg opacity-100 lg:h-[600px] lg:w-[410px]">
          <img src={"/img/about1.png"} className="w-full h-full mx-auto my-auto rounded-b-full" />
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show">
          <div className="w-full h-1 my-10 bg-slate-700"></div>
          <h1 className="text-4xl font-bold text-center text-slate-700 lg:text-5xl lg:text-left dark:text-slate-50">
            Tentang <span className="text-indigo-500">Azhari</span>
          </h1>
          <p className="mt-3 mb-5 text-base text-slate-500 md:w-96 lg:w-96 dark:text-slate-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis doloribus officia soluta reprehenderit amet culpa quidem aspernatur aperiam. Nesciunt dolorem voluptatibus magni, soluta repellendus error voluptatem accusamus enim
            nulla ex ducimus deleniti libero? Placeat aliquam exercitationem dicta perferendis ex possimus?
          </p>
          <div className=" md:w-96 lg:w-96">
            <table className="text-sm dark:text-slate-50 text-slate-500">
              <tr>
                <td className="flex items-center pr-2 font-semibold w-28">
                  <span className="inline-block w-24">Tempat Lahir</span> <span>:</span>
                </td>
                <td>Mawasangka, 28 Oktober 1968</td>
              </tr>
              <tr>
                <td className="flex items-center pr-2 font-semibold w-28">
                  <span className="inline-block w-24">Pendidikan</span>
                  <span>:</span>
                </td>
                <td>
                  <ul>
                    <li>Fakultas Hukum, Universitas Gadjah Mada</li>
                    <li>Fakultas Ilmu Sosial dan Ilmu Politik, Universitas Indonesia</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="flex items-center pr-2 font-semibold w-28">
                  <span className="inline-block w-24">Istri</span>
                  <span>:</span>
                </td>
                <td className="pr-2 ">Lorem, ipsum.</td>
              </tr>
            </table>
          </div>
          <div className="w-full h-2 mt-5">
            <Link href={"#"} className="block w-full px-4 py-3 text-center text-white bg-indigo-500 rounded">
              Riwayat
              <SendOutlinedIcon className="pl-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
