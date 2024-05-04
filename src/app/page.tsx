import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Index from "@/components/Index/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <Hero />
          <div className={styles.inner}>
          <Index />
          </div>
        </div>
      </main>
    </div>
  );
}
