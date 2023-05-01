import styles from './Restart.module.css';

const Restart = ({ restartAnimation }) => {
  return (
    <div className={styles.restartWrapper}>
      <a className={styles.restartButton} href="#" onClick={restartAnimation}>
        <div className={styles.restartIcon}></div>
      </a>
    </div>
  );
};

export default Restart;
