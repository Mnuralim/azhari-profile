import Image from "next/image";
import { HomePage } from "./home";
import About from "./about";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-50 lg:px-36">
      <section className="relative">
        <div className="fixed top-10 left-4 h-72 w-72 rounded-full  bg-blue-400 opacity-50 blur-3xl  filter md:h-96 md:w-96"></div>
        <div className="fixed top-10 right-0 h-72 w-72 rounded-full  bg-yellow-200 opacity-50 blur-3xl  filter md:h-96 md:w-96"></div>
        <div className={`fixed top-96 right-20 h-72 w-72 md:h-96  md:w-96 bg-slate-500 rounded-full  opacity-50 blur-3xl filter`}></div>
      </section>
      <HomePage />
      <About />
      <Gallery />
      <section className="mb-[1000px]"></section>
    </main>
  );
}
