import styles from './Text.module.css';

const Text = () => {
  return (
    <div className={styles.textWrapper}>
      <span className={styles.text}>Coming Soon</span>
      <a href="mailto:me@hermesgarcia.com" className={styles.emailBtn}>
        me@hermesgarcia.com
      </a>
    </div>
  );
};

export default Text;
