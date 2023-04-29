import styles from './Rocket.module.css';

const Rocket = ({type = 'first'}) => {
  return (
    <img
      className={styles[type]}
      src="./rocket.webp"
      alt="Rocket in the space"
    />
  );
};

export default Rocket;
