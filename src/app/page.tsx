import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Index from "@/components/Index/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className={styles.container}>
          <Index />
        </div>
      </main>
    </div>
  );
}
