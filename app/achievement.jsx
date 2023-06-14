"use client";
import React, { useState, useEffect } from "react";
import { Ilmiah, Penghargaan } from "./fullAchive";

const Achievement = () => {
  const [activeTab, setActiveTab] = useState("penghargaan");
  const [achiev, setAchiev] = useState([]);
  const [ilmiah, setIlmiah] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-achiev");
      const allData = await res.json();
      setAchiev(allData);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-ilmiah");
      const allData = await res.json();
      setIlmiah(allData);
    };
    getData();
  }, []);

  return (
    <>
      <section id="achive" className="relative flex items-center min-h-screen p-5 mt-10 lg:mt-20">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-bold text-center mt-14 text-slate-700 lg:text-5xl lg:mt-24 dark:text-slate-50">
            Pencapaian <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="flex p-1 mb-5 bg-slate-300/30 rounded-xl dark:bg-slate-700/30">
            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "penghargaan" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("penghargaan")}
            >
              Penghargaan
            </button>
            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "ilmiah" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("ilmiah")}
            >
              Publikasi <span className="block md:inline">Ilmiah</span>
            </button>
            <button className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "buku" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`} onClick={() => setActiveTab("buku")}>
              Buku <span className="block md:inline"></span>
            </button>
          </div>
          {activeTab == "penghargaan" ? <Penghargaan achiev={achiev} /> : activeTab == "ilmiah" ? <Ilmiah ilmiah={ilmiah} /> : ""}
        </div>
      </section>
    </>
  );
};

export default Achievement;
