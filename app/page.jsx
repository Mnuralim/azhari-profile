import { HomePage } from "./home";
import About from "./about";
import Narasi from "./narasi";
import Aspiration from "./aspiration";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main className="overflow-x-hidden lg:px-36 ">
      <HomePage />
      <About />
      <Narasi />
      <Gallery />
      <Aspiration />
    </main>
  );
}
