import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.imgContainer}>  
        <Image src="/img/restaurant.png" objectFit="cover" alt="" layout="fill"/>
      </div>     
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          A cozy pizza restaurant with a warm ambiance serving authentic Italian pizza, topped with fresh ingredients, baked in a wood-fired oven.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OTHER OUTLETS</h1>
          <p className={styles.text}>
            Address 1
            <br /> Location 1
            <br /> Phone No
          </p>
          <p className={styles.text}>
          Address 2
            <br /> Location 2
            <br /> Phone No
          </p>
          <p className={styles.text}>
          Address 3
            <br /> Location 3
            <br /> Phone No
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
