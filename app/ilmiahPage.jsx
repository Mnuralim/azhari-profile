"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Book, Ilmiah } from "./fullIlmiah";

const IlmiahPage = () => {
  const [activeTab, setActiveTab] = useState("book");
  const [ilmiah, setIlmiah] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-ilmiah");
      const allData = await res.json();
      setIlmiah(allData);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://colorful-calf-helmet.cyclic.app/get-book");
      const allData = await res.json();
      setBook(allData);
    };
    getData();
  }, []);

  return (
    <section id="ilmiah" className="relative flex items-center min-h-screen mt-10 lg:mt-20">
      <div className="w-full">
        <h1 className="mb-10 text-4xl font-bold text-center mt-14 text-slate-700 lg:text-5xl lg:mt-24 dark:text-slate-50">
          Karya <span className="text-indigo-500">Ilmiah</span>
        </h1>
        <div className="flex p-1 mb-3 bg-slate-300/30 rounded-xl dark:bg-slate-700/30">
          <button className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "book" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`} onClick={() => setActiveTab("book")}>
            Buku
          </button>
          <button
            className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "jurnal" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
            onClick={() => setActiveTab("jurnal")}
          >
            Jurnal
          </button>
        </div>
        {activeTab == "book" ? <Book dataBook={book} /> : <Ilmiah ilmiah={ilmiah} />}
      </div>
    </section>
  );
};

export default IlmiahPage;
