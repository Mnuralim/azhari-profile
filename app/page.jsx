import { HomePage } from "./home";
import About from "./about";
import Narasi from "./narasi";
import Aspiration from "./aspiration";
import Gallery from "./gallery";
import FullAbout from "./fullAbout";
import Achievement from "./achievement";
import IlmiahPage from "./ilmiahPage";

export default function Home() {
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
    </main>
  );
}
