import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
import Link from "next/link";


const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}><b>Cash On Delivery</b></h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+91 777 666 555"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Enter Your Address"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
        <Link href="/">
        <button className={styles.button}>
          Cancel
        </button></Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;