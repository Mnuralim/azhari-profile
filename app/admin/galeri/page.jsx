"use client";
import React, { useState } from "react";
import { EditGalleryCardPhoto, EditGalleryCardVideo } from "./EditGalleryCard";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photo");
  return (
    <>
      <section id="gallery" className="relative flex min-h-screen p-5 mt-10 lg:mt-5">
        <div className="w-full">
          <h1 className="mb-10 text-4xl font-bold text-center mt-14 text-slate-700 lg:text-5xl lg:mt-24 dark:text-slate-50">
            Edit Galeri <span className="text-indigo-500">Azhari</span>
          </h1>
          <div className="flex p-1 mb-5 bg-slate-300/30 rounded-xl dark:bg-slate-700/30">
            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "photo" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("photo")}
            >
              Foto
            </button>

            <button
              className={`transition-colors duration-300 ease-linear w-full rounded-xl ${activeTab == "video" ? "bg-indigo-500 text-white" : "bg-transparent"}  text-sm leading-5 font-medium py-3`}
              onClick={() => setActiveTab("video")}
            >
              Video
            </button>
          </div>
          {activeTab == "photo" ? <EditGalleryCardPhoto /> : activeTab == "video" ? <EditGalleryCardVideo /> : ""}
        </div>
      </section>
    </>
  );
};

export default Gallery;
