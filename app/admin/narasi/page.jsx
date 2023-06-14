"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const NarasiAdmin = () => {
  const [dataNarasi, setDataNarasi] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-narasi");
      const getAllData = await res.json();
      setDataNarasi(getAllData);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-narasi/${id}`);
    router.refresh();
  };

  return (
    <section className="relative flex min-h-screen p-5 mt-10 overflow-x-auto lg:mt-20">
      <div className="w-full">
        <h1 className="mt-16 text-4xl font-bold text-center lg:text-5xl">
          Edit <span className="text-indigo-500"> Narasi</span>
        </h1>
        <div>
          <Link href={"/admin/narasi/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
            Tambah Data
          </Link>
          <table className="min-w-full mt-4 text-sm md:text-base">
            <thead>
              <tr>
                <th className="py-2 text-center border border-slate-700 dark:border-slate-50">No</th>
                <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Judul</th>
                <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Tempat</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Gambar</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataNarasi.map((data, index) => (
                <tr key={data._id}>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">{data.place}</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">
                    <img src={data.image} alt={data.title} className="w-[50px] my-0 mx-auto" />
                  </td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={`/admin/narasi/${data._id}`} className="px-2 py-2 font-bold text-white bg-indigo-500">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(data._id)} className="px-2 py-[5px] font-bold text-white bg-pink-500 ml-2">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default NarasiAdmin;
