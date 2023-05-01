import styles from './Topbar.module.css';

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <a
        href="https://twitter.com/hermesgarciam"
        target="_blank"
        rel="noreferrer"
        className={styles.twitterLink}
      >
        <div className={styles.twitterIcon}></div>
      </a>
    </header>
  );
};

export default Topbar;
