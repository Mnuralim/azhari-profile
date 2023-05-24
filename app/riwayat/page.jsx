"use client";
import React, { useState } from "react";
import { historyAzhari } from "@/data/history";

const History = () => {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen p-5 mt-10 lg:px-16 lg:mt-20">
        <div>
          <h1 className="mb-10 text-4xl font-semibold text-center text-slate-700 lg:text-5xl dark:text-slate-50">
            Riwayat <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <img src="/img/bagian1.jpg" alt="" className="w-[80px] h-[80px] rounded-full" />
                </div>
                <div className="h-[130px] w-[1px] bg-slate-600"></div>
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
                <div className="h-[130px] w-[1px] bg-slate-600"></div>
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
                <div className="h-[130px] w-[1px] bg-slate-600"></div>
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
                <div className="h-[130px] w-[1px] bg-slate-600"></div>
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
                <div className="h-[130px] w-[1px] bg-slate-600"></div>
              </div>
              <div className=" w-[220px] md:w-80 md:mt-3 lg:w-[500px]">
                <h2 className="mb-2 text-base font-bold text-indigo-500 lg:text-lg">Rektor PTN Universitas Sembilanbelas November Kolaka </h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-50">Tahun 2014-2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
