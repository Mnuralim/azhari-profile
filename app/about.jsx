"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { Link } from "react-scroll";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const About = () => {
  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20">
      <div className="relative z-50 flex flex-col items-center justify-center mt-5 lg:flex-row lg:gap-48 ">
        <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="mr-5 rounded-lg opacity-100 lg:h-[600px] lg:w-[410px]">
          <img src={"/img/about1.png"} className="w-full h-full mx-auto my-auto rounded-b-full" />
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show">
          <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-slate-700 lg:text-5xl lg:text-left dark:text-slate-50">
            Tentang <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="w-full h-1 my-10 bg-slate-700"></div>

          {/* <p className="mt-3 mb-5 text-base text-slate-500 md:w-96 lg:w-96 dark:text-slate-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis doloribus officia soluta reprehenderit amet culpa quidem aspernatur aperiam. Nesciunt dolorem voluptatibus magni, soluta repellendus error voluptatem accusamus enim
            nulla ex ducimus deleniti libero? Placeat aliquam exercitationem dicta perferendis ex possimus?
          </p> */}
          <div className=" md:w-96 lg:w-96">
            <table className="text-sm leading-6 dark:text-slate-50 text-slate-500">
              <tbody>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Nama</span> <span>:</span>
                  </td>
                  <td>Dr.Azhari,S.STP.,M.Si</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Tempat Lahir</span> <span>:</span>
                  </td>
                  <td>Mawasangka, 10 Juni 1976</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Istri</span>
                    <span>:</span>
                  </td>
                  <td className="pr-2 ">Umi Noranah</td>
                </tr>
                <tr>
                  <td className="flex items-center pr-2 font-semibold w-28">
                    <span className="inline-block w-24">Anak</span>
                    <span>:</span>
                  </td>
                  <td>
                    <ul>
                      <li>Fauziah Azhar</li>
                      <li>Dwi Abdul Faqih Azhari</li>
                      <li>Muh.Fadhil Azhar</li>
                      <li>Muh.Fariz Azhari</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full h-2 mt-5">
            <Link spy={true} smooth={true} offset={50} duration={500} to="history" className="block w-full px-4 py-3 text-center text-white bg-indigo-500 rounded cursor-pointer">
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
