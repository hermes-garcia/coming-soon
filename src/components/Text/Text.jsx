import styles from './Text.module.css';

const Text = () => {
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.text}>Coming Soon</h1>
      <a href="mailto:me@hermesgarcia.com" className={styles.emailBtn}>
        me@hermesgarcia.com
      </a>
    </div>
  );
};

export default Text;
