import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Index from "@/components/Index/Index";
import Gallery from "@/components/Gallery/Gallery";
import Detail from "@/components/Detail/Detail";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <Hero />
          <div className={styles.inner}>
          <Index />
          <Gallery />
          <Detail />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
