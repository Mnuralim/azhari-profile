"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Organization = () => {
  const [organizationHistory, setOrganizationHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-organization", {
        cache: "no-store",
      });
      const allData = await res.json();
      setOrganizationHistory(allData);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-organization/${id}`);
      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className="relative flex min-h-screen p-5 mt-10 overflow-x-auto lg:mt-8">
      <div className="w-full">
        <div>
          <Link href={"/admin/riwayat/organisasi/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
            Tambah Data
          </Link>
          <table className="min-w-full mt-4 text-sm md:text-base">
            <thead>
              <tr>
                <th className="py-2 text-center border border-slate-700 dark:border-slate-50">No</th>
                <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Judul</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Gambar</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {organizationHistory.map((data, index) => (
                <tr key={data._id}>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">
                    <img src={data.image} alt={data.title} className="w-[50px] my-0 mx-auto" />
                  </td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={`/admin/riwayat/organisasi/${data._id}`} className="px-2 py-2 font-bold text-white bg-indigo-500">
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

export const Work = () => {
  const [workHistory, setWorkHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-workhistory", {
        cache: "no-store",
      });
      const allData = await res.json();
      setWorkHistory(allData);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-workhistory/${id}`);
      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section className="relative flex min-h-screen p-5 mt-10 overflow-x-auto lg:mt-8">
      <div className="w-full">
        <div>
          <Link href={"/admin/riwayat/pekerjaan/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
            Tambah Data
          </Link>
          <table className="min-w-full mt-4 text-sm md:text-base">
            <thead>
              <tr>
                <th className="py-2 text-center border border-slate-700 dark:border-slate-50">No</th>
                <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Judul</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Gambar</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {workHistory.map((data, index) => (
                <tr key={data._id}>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">
                    <img src={data.image} alt={data.title} className="w-[50px] my-0 mx-auto" />
                  </td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={`/admin/riwayat/pekerjaan/${data._id}`} className="px-2 py-2 font-bold text-white bg-indigo-500">
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

export const Study = () => {
  const [studyHistory, setStudyHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-study", {
        cache: "no-store",
      });
      const allData = await res.json();
      setStudyHistory(allData);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`https://colorful-calf-helmet.cyclic.app/delete-study/${id}`);
      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section className="relative flex min-h-screen p-5 mt-10 overflow-x-auto lg:mt-8">
      <div className="w-full">
        <div>
          <Link href={"/admin/riwayat/pendidikan/add"} className="px-5 py-2 font-bold text-white bg-indigo-500">
            Tambah Data
          </Link>
          <table className="min-w-full mt-4 text-sm md:text-base">
            <thead>
              <tr>
                <th className="py-2 text-center border border-slate-700 dark:border-slate-50">No</th>
                <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Judul</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Tahun</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Gambar</th>
                <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {studyHistory.map((data, index) => (
                <tr key={data._id}>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">{index + 1}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">{data.title}</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">{data.year}</td>
                  <td className="px-2 py-2 border border-slate-700 dark:border-slate-50">
                    <img src={data.image} alt={data.title} className="w-[50px] my-0 mx-auto" />
                  </td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={`/admin/riwayat/pendidikan/${data._id}`} className="px-2 py-2 font-bold text-white bg-indigo-500">
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
