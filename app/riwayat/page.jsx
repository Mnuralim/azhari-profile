"use client";
import React, { useState } from "react";
import { historyAzhari } from "@/data/history";

const History = () => {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20">
        <div>
          <h1 className="mb-12 text-4xl font-semibold text-center text-slate-700 lg:text-5xl dark:text-slate-50">
            Riwayat <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Rektor PTN Universitas Sembilanbelas November Kolaka </h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2014-2022</p>
              </div>
            </div>

            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Pelopor peralihan status USN Kolaka dari PTS menjadi PTN </h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2010-2014</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Rektor Universitas 19 November Kolaka </h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2005-2013</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg"> Wakil Sekretaris Redistribusi Aset PT.Perkebunan Ladongi Kolaka,Sulawesi Tenggara</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2004-2007</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Ketua Sekolah Tinggi Keguruan dan Ilmu Pendidikan (SKIP) Kolaka</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2004</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg"> Staf Khusus Bupati Kolaka,Provinsi Sulawesi Tenggara</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2003-2008</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Kepala Subbagian Pusat Data Elektronik Kab.Kolaka</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2003-2004</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Kepala Subbagian Kependudukan Bagian Pemerintahan Umum Setda Kab.Kolaka</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2000</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Pelaksana Tugas (PLTP) Kepala Subbagian Trantib Bagian Pemerintahan Umum Setda Kab.Kolaka</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2000</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[100px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">: PNS Depdagri Golongan III/a</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 1999</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
