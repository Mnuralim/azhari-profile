import Image from "next/image";
import { HomePage } from "./home";
import About from "./about";
import Narasi from "./narasi";
import Aspiration from "./aspiration";
import Theme from "./theme";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-50 lg:px-36 dark:bg-slate-800 dark:text-slate-50">
      <section className="relative">
        <div className="fixed bg-blue-400 rounded-full opacity-50 top-10 left-4 h-72 w-72 blur-3xl filter md:h-96 md:w-96"></div>
        <div className="fixed right-0 bg-yellow-200 rounded-full opacity-50 top-10 h-72 w-72 blur-3xl filter md:h-96 md:w-96"></div>
        <div className={`fixed top-96 right-20 h-72 w-72 md:h-96  md:w-96 bg-indigo-500 rounded-full  opacity-50 blur-3xl filter`}></div>
      </section>
      <HomePage />
      <About />
      <Narasi />
      <Gallery />
      <Aspiration />
      <Theme />
    </main>
  );
}
