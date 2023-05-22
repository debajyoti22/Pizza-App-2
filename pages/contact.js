import styles from "../styles/Contact.module.css"
const contact = () => {
    return (
        <div className={styles.container}>
        <div className={styles.title}>CONTACT US</div>
            <div className={styles.maprouter}>
            <div className={styles.gmap_canvas}>
            <iframe className={styles.gmap_iframe} width="100%" frameborder="0" scrolling="no" marginheight="0" 
            marginwidth="0" 
            src="https://maps.google.com/maps?width=864&amp;height=400&amp;hl=en&amp;q=South City Mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
             
            </iframe>
            </div>
            </div>
            
        </div>
    );
};

export default contact;