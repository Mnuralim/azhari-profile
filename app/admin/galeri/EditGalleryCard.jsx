"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { galleryContainerVariant, galleryVariant } from "@/utils/motion";
import { galleryVideo } from "@/data/gallery";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export const EditGalleryCardPhoto = () => {
  const [photoData, setPhotoData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const getAllData = await axios.get("https://colorful-calf-helmet.cyclic.app/get-gallery-photo");
      setPhotoData(getAllData.data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-gallery-photo/${id}`);
    if (data.status == 200) {
      alert("Sukses, jika data belum terupdate silakan refresh!!");
      setTimeout(() => {
        router.refresh();
      }, 2000);
    } else {
      alert("Gagal");
    }
  };

  return (
    <div>
      <Link href={"/admin/galeri/photo/add"} className="inline-block px-5 py-2 my-6 font-bold text-white bg-indigo-500">
        Tambah Data
      </Link>
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {photoData.map((data) => (
          <div variants={galleryVariant} key={data._id}>
            <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
            <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
              <div style={{ backgroundImage: `url(${data.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full min-h-[250px] "></div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <Link href={`/admin/galeri/photo/${data._id}`} className="inline-block px-5 py-2 text-center bg-indigo-500 ">
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={() => handleDelete(data._id)} className="px-4 py-2 text-center bg-pink-500 ">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const EditGalleryCardVideo = () => {
  const [videoData, setVideoData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const getAllData = await axios.get("https://colorful-calf-helmet.cyclic.app/get-gallery-video");
      setVideoData(getAllData.data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-gallery-video/${id}`);
    if (data.status == 200) {
      alert("Sukses, jika data belum terupdate silakan refresh!!");
      setTimeout(() => {
        router.refresh();
      }, 2000);
    } else {
      alert("Gagal");
    }
  };
  return (
    <div>
      <Link href={"/admin/galeri/video/add"} className="inline-block px-5 py-2 my-6 font-bold text-white bg-indigo-500">
        Tambah Data
      </Link>
      <motion.div variants={galleryContainerVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {videoData.map((data) => (
          <div variants={galleryVariant} key={data._id}>
            <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">{data.title}</h2>
            <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
              <iframe width="100%" height="315" loading="lazy" src={data.url} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <Link href={`/admin/galeri/video/${data._id}`} className="inline-block px-5 py-2 text-center bg-indigo-500 ">
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={() => handleDelete(data._id)} className="px-4 py-2 text-center bg-pink-500 ">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <motion.div variants={galleryVariant}>
          <h2 className="my-3 text-lg font-semibold text-slate-700 dark:text-slate-50">Azhari yang Menginspirasi</h2>
          <div className="w-full p-2 transition-colors duration-200 ease-in-out border border-slate-400 hover:bg-slate-400 dark:hover:bg-slate-400 dark:border-slate-400">
            <video src="https://youtu.be/-Nec3XJLrKo" className="w-full h-full" controls>
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  );
};
