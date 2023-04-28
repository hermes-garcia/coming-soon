import styles from './Rocket.module.css';

const Rocket = ({type = 'first'}) => {
  return (
    <img
      className={styles[type]}
      src="/src/components/rocket2.png"
      alt="Rocket in the space"
    />
  );
};

export default Rocket;
