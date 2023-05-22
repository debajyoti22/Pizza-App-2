import axios from "axios";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import OrderRazorPay from "@/components/OrderRazorPay";




const Cart = () => {
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false);
  const [razorpay,setRazorpay] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  const router = useRouter();
  const amount = (cart.total*100) + 4000;
  const orderID = cart._id;

  
 

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const createOrder2 = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        const link = router.push(`/orders/${res.data._id}`);
        return link
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const  handleDelete = async (id)=>{
    dispatch(reset());
    
  }
  

  return (
    <>
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
        <tbody>
        <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th><button
                    className={styles.btn}
                    onClick={() => 
                    handleDelete()}>                    
                    Empty Cart</button></th>
          </tr>

          {cart.products.map(product=>(

          

          <tr className={styles.trData} key={product._id}>
          <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td className={styles.data}>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td className={styles.data}>
              <span className={styles.extras}>
                {product.extras.length==0 ? 'Nil' : ''}

                {product.extras.map(extra=>(                  
                  <span key={extra._id}>{extra.text} </span>
                ))}
                
              </span>
            </td>
            <td className={styles.data}>
              <span className={styles.price}>Rs {product.price}</span>
            </td>
            <td className={styles.data}>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td className={styles.data}>              
              <span className={styles.total}>Rs {product.price * product.quantity}</span>
            </td>           
          </tr>
          ))}
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>Rs 40
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs {cart.total + 40}
          </div>
          {open ? ( 
            <div className={styles.paymentMethods}>
            <button
                className={styles.button}
                onClick={() => setCash(true)}>CASH ON DELIVERY</button>
                
            <button className={styles.button} 
            onClick={() => setRazorpay(true)}>ONLINE PAYMENT</button>

            
            </div>
          ) : (
            <button onClick={()=> setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>
          )}
          
        </div>
      </div>
      {razorpay && <OrderRazorPay total={cart.total} createOrder2={createOrder2} id={cart._id}/>}

      {cash && <OrderDetail total={cart.total} createOrder={createOrder}/>}
    </div>
    </>
  );
};



export default Cart;
