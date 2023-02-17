import styles from "./index.module.css";
import Config from "@/config";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div></div>
      <div className={styles.container}>
        <p className={styles.item}>
          Copyright &copy; 2018-{new Date().getFullYear()}, {Config.name}{" "}
          {Config.surname}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
