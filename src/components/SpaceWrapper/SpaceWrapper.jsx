import styles from './SpaceWrapper.module.css';

const SpaceWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default SpaceWrapper;
