import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
import Link from "next/link";

const OrderRazorPay = ({ total, createOrder2,id }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const amount = (total*100) + 4000;
  const orderID = id;
    
    
    const loadScript = (src) =>{
        return new Promise(resolve =>{
       
        const script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
          resolve(true)
        } 
        script.onerror = () =>{
          resolve(fasle)
        }
        document.body.appendChild(script)
      })
      }
    
      const displayRazorpay = async () =>{
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
          alert('Razorpay SDK failed')
          return
        }   
       
      
        const options = {
          key: "rzp_test_WOUMEw4QkDUwQ7", // Enter the Key ID generated from the Dashboard
          amount: amount, //  Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Pizza Corp", //your business name
          description: "Test Transaction",
          image: "../img/logo.png",
          order_id: orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
          callback_url: createOrder2({ customer, address, total, method: 1 }),
          // handler: function (response){
          //   alert(response.razorpay_payment_id);
          //   alert(response.razorpay_order_id);
          //   alert(response.razorpay_signature);
    
          
          // },
    
    
          prefill: {
              name: "Enter Name", //your customer's name
              email: "Enter Mail",
              contact: "999888777"
          },
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              "color": "#F07151",
              
          }
      };
      const paymentObject = new Razorpay(options);
      paymentObject.open();
      }
    
    
 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}><b>ONLINE PAYMENT</b></h1>
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
        <button className={styles.button} onClick={displayRazorpay}>
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

export default OrderRazorPay;