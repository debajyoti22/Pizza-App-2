import styles from "../styles/Pizza.module.css"
import PizzaCard from "./PizzaCard"
const Pizza = ({pizzaList}) => {
    return(
      
       <div className={styles.container} id="pizza">
       <h1 className={styles.title}>PIZZERIA !</h1>
       <p className={styles.desc}>
       Located in the heart of downtown, our pizza restaurant serves up delicious pies made with the freshest ingredients. Our menu features a wide variety of classic and specialty pizzas, as well as salads, appetizers, and desserts. The cozy and inviting atmosphere makes it the perfect spot for a casual lunch or dinner with friends and family. We also offer delivery and catering services for any occasion. Come visit us and taste the difference!
       </p>
            
       <div className={styles.wrapper}>
         {pizzaList.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza}/>
         ))}
         
        
       </div>     
       </div>
    )
   }
   export default Pizza