"use client";
import React from "react";
import Link from "next/link";

const Admin = () => {
  return (
    <>
      <section className="relative flex min-h-screen p-5 mt-10 lg:mt-20">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-bold text-center mt-14 text-slate-700 lg:text-5xl lg:mt-24 dark:text-slate-50">
            Halaman <span className="text-indigo-500">Admin</span>
          </h1>
          <div>
            <table className="min-w-full text-sm md:text-base">
              <thead>
                <tr>
                  <th className="py-2 border border-slate-700 dark:border-slate-50">No</th>
                  <th className="px-2 py-2 border border-slate-700 dark:border-slate-50">Bagian</th>
                  <th className="px-3 py-2 border border-slate-700 dark:border-slate-50">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">1</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Beranda</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/beranda"}>Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">2</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Tentang</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/tentang"}>Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">3</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Riwayat</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/riwayat"}>Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">4</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Pencapaian</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/pencapaian"}>Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">5</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Narasi</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/narasi"}>Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-center border border-slate-700 dark:border-slate-50">6</td>
                  <td className="px-2 py-2 text-center border border-slate-700 dark:border-slate-50">Galeri</td>
                  <td className="px-3 py-2 text-center border border-slate-700 dark:border-slate-50">
                    <Link href={"/admin/galeri"}>Edit</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
