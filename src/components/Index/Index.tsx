import styles from "./Index.module.css";

function Index() {
  return (
    <div className={styles.inner}>
      <h2 className={styles.title}>Index</h2>
      <div className={styles.list}>
        <ol>
          <li>タイトルタイトルタイトルタイトル タイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトル タイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトル タイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトル タイトルタイトルタイトル</li>
          <li>タイトルタイトルタイトルタイトル タイトルタイトルタイトル</li>
        </ol>
      </div>
    </div>
  );
}

export default Index;
