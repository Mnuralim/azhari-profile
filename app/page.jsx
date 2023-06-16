"use client";
import { HomePage } from "./home";
import About from "./about";
import Narasi from "./narasi";
import Aspiration from "./aspiration";
import Gallery from "./gallery";
import FullAbout from "./fullAbout";
import Achievement from "./achievement";
import IlmiahPage from "./ilmiahPage";
import Statistic from "./statistic";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.put("https://colorful-calf-helmet.cyclic.app/update-stats");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <main className="overflow-x-hidden lg:px-36 ">
      <HomePage />
      <About />
      <FullAbout />
      <Achievement />
      <IlmiahPage />
      <Narasi />
      <Gallery />
      <Aspiration />
      <Statistic data={data} />
    </main>
  );
}
