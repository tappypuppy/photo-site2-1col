import styles from "./Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <div className={styles.img_box}>
      <Image
        className={styles.img}
        src="/mainvisual.png"
        alt="hero"
        width={1000}
        height={400}
      />
    </div>
  );
}

export default Hero;
