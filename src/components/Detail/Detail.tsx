import Link from "next/link";
import styles from "./Detail.module.css";

function Detail() {
  return (
    <div className={styles.box}>
      <h2>DETAIL</h2>
      <div className={styles.info}>
        <dl>
          <div className={styles.data}>
            <dt>著者</dt>
            <dd>タイトルタイトルタイトル</dd>
          </div>
          <div className={styles.data}>
            <dt>出版社</dt>
            <dd>タイトルタイトルタイトル</dd>
          </div>
          <div className={styles.data}>
            <dt>発行年</dt>
            <dd>タイトルタイトルタイトル</dd>
          </div>
        </dl>
        <div className={styles.line}></div>
        <div className={styles.text_box}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <Link className={styles.link} href="/detail">
            オンラインストアで見る
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
