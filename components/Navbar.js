import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Pizza from "./Pizza";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

const quantity = useSelector((state)=>state.cart.quantity);    
 return(
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
            <Link href="/contact"><Image src="/img/telephone.png" alt="" width="32" height="32"/></Link>
            </div>
            <div className={styles.texts}>
                <div className={styles.texts}>ORDER NOW!!</div>
                <div className={styles.texts}>777-666-555</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/">Homepage</Link></li>
                
                <li className={styles.listItem}><Link href="/#pizza">Menu</Link></li>
                <Link href="/"><Image src="/img/logo.png" alt="" width="70" height="70"/></Link>
                <li className={styles.listItem}><Link href="/admin">Admin</Link></li>
                <li className={styles.listItem}><Link href="/contact">Contact</Link></li>
                
            </ul>
        </div>
        
        <div className={styles.item}>
            <div className={styles.cart}>
            <Link href="/cart">
                <Image src="/img/cart.png" alt="" width="30" height="30"/>
                </Link>
                <div className={styles.counter}>{quantity}</div>
            </div>
        </div>
        
    </div>
 )
}
export default Navbar
