"use client";
import { ilmiah, penghargaan } from "@/data/penghargaan";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant, slideIn } from "@/utils/motion";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export const PenghargaanTabel = ({ achiev }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-achiev/${id}`);
      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section className="relative flex justify-center p-5 mt-10 overflow-auto lg:px-16 lg:mt-10 ">
      <motion.div variants={slideIn("left", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="w-full">
        <Link href={"/admin/pencapaian/penghargaan/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
          Tambah Data
        </Link>
        <table className="min-w-full mt-3 text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">No</th>
              <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Penghargaan</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {achiev.map((data, index) => (
              <tr key={data._id}>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                  <Link href={`/admin/pencapaian/penghargaan/${data._id}`} className="inline-block w-16 py-2 font-bold text-white bg-indigo-500 ">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(data._id)} className="inline-block w-16 py-[5px] font-bold text-white  bg-pink-500 mt-2">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export const IlmiahTabel = ({ ilmiah }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-ilmiah/${id}`);
      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="relative flex justify-center p-5 mt-10 overflow-auto lg:px-16 lg:mt-20">
      <motion.div variants={slideIn("right", "tween", 0.5, 1.5)} initial="hidden" whileInView="show" className="w-full">
        <Link href={"/admin/pencapaian/ilmiah/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
          Tambah Data
        </Link>
        <table className="min-w-full mt-3 text-sm md:text-base">
          <thead>
            <tr>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">No</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Publikasi Ilmiah</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
              <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {ilmiah.map((data, index) => (
              <tr key={data._id}>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                  <Link href={`/admin/pencapaian/ilmiah/${data._id}`} className="inline-block w-16 py-2 font-bold text-white bg-indigo-500 ">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(data._id)} className="inline-block w-16 py-[5px] font-bold text-white  bg-pink-500 mt-2">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export const Book = ({ dataBook }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirmed = confirm("Yakin Mau Dihapus?");
    if (confirmed) {
      try {
        const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-book/${id}`);
        if (data.status == 200) {
          alert("Sukses!");
          setTimeout(() => {
            router.refresh();
          }, 3000);
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      router.refresh();
    }
  };

  return (
    <section className="relative flex justify-center min-h-screen mt-10 ">
      <div>
        <Link href={"/admin/pencapaian/book/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
          Tambah Data
        </Link>
        <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 mt-7 md:grid-cols-2 lg:grid-cols-3">
          {dataBook.map((data) => (
            <motion.div key={data._id} variants={galleryVariant} className="flex flex-col justify-between w-full gap-1 p-2 rounded-xl bg-slate-300/50 dark:bg-slate-700/50">
              <div className="overflow-hidden">
                <img src={data.image} alt={data.title} className="hover:scale-110  transition-all ease-in-out duration-300 w-full h-[400px]" />
              </div>
              <h2 className="text-lg font-bold text-ellipsis text-slate-700 dark:text-slate-50">{data.title}</h2>
              <p className="text-base font-semibold text-center text-slate-600 dark:text-slate-300">Tahun {data.year}</p>
              <div className="flex justify-between">
                <Link href={`/admin/pencapaian/book/${data._id}`} className="inline-block w-20 py-[5px] font-bold text-center text-white bg-indigo-500 ">
                  Edit
                </Link>
                <button onClick={() => handleDelete(data._id)} className="inline-block w-16 py-[5px] font-bold text-white  bg-pink-500 ">
                  Hapus
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
