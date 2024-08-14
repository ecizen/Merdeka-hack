import Image from "next/image";
import Hero from "../components/Hero/hero";

import "../styles/hero.css";
import Sejarah from "../components/sejarah/sejarah";
import Pahlawan from "../components/pahlawan/pahlawan";
import Footer from "../components/footer";

export default function Home() {

    
  return (
    <main className=" overflow-x-hidden">
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="sejarah">
        <Sejarah />
      </section>
      <section id="pahlawan">
        <Pahlawan />
      </section>
    </main>
  );
}
