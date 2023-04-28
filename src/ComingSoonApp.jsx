import Rocket from './components/Rocket';
import styles from './ComingSoonApp.module.css';
import Text from './components/Text';

const ComingSoonApp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stars}></div>
      <Rocket type='first' />
      <Rocket type='second' />
      <div className={styles.platform} ></div>
      <Text />
    </div>
  );
};

export default ComingSoonApp;
