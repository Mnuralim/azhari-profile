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
      <section id="award" className="relative flex items-center min-h-screen p-5 mt-10 lg:mt-20">
        <div className="w-full">
          <h1 className="mb-5 text-4xl font-bold text-center mt-14 text-slate-50 lg:text-5xl ">
            Penghargaan
            {/* <span className="text-indigo-500">Azhari</span> */}
          </h1>
          <Penghargaan achiev={achiev} />
        </div>
      </section>
    </>
  );
};

export default Achievement;
