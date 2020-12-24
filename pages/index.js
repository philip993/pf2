import IndexImage from "../components/IndexImage/IndexImage";
import IndexText from "../components/IndexText/IndexText";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <IndexText />
      <IndexImage />
    </div>
  );
}
