import Image from "next/image";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.img_box}>
      <Image className={styles.img} src="/photo1.png" alt="Gallery" width={392} height={261} />
      <Image className={styles.img} src="/photo2.png" alt="Gallery" width={392} height={261} />
      <Image className={styles.img} src="/photo3.png" alt="Gallery" width={392} height={261} />
      <Image className={styles.img} src="/photo4.png" alt="Gallery" width={392} height={261} />
    </div>
  );
}

export default Gallery;
