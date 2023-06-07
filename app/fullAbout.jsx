"use client";
import React, { useState } from "react";
import { StudyHistory, HistoryWork, OrganizationHistory } from "./fullAboutCard";

const FullAbout = () => {
  const [activeTab, setActiveTab] = useState("workHistory");
  return (
    <>
      <section id="history" className="relative flex items-center min-h-screen p-5 mt-10 lg:mt-20">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-bold text-center mt-14 text-slate-700 lg:text-5xl lg:mt-24 dark:text-slate-50">
            Riwayat <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="flex p-1 mb-5 bg-slate-300/30 rounded-xl dark:bg-slate-700/30">
            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "workHistory" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("workHistory")}
            >
              Riwayat <span className="block md:inline">Pekerjaan</span>
            </button>
            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "organization" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("organization")}
            >
              Riwayat <span className="block md:inline">Organisasi</span>
            </button>

            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "studyHistory" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("studyHistory")}
            >
              Riwayat <span className="block md:inline">Pendidikan</span>
            </button>
          </div>
          {activeTab == "organization" ? <OrganizationHistory /> : activeTab == "studyHistory" ? <StudyHistory /> : activeTab == "workHistory" ? <HistoryWork /> : ""}
        </div>
      </section>
    </>
  );
};

export default FullAbout;
