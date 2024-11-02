
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

const {hero_section, hero_content} = styles;

function Herosection() {
  return (
    <div className={hero_section}>
        <div className={hero_content}>
            <h2>Order your favorite food here</h2>
            <p>
                Choose from a diverse menu featuring a delectable array of dishes crafted 
                with the fitnes ingredients and culinary expertise. Our mission is to satisfy your
                cravings  and elevate your dining experience , one delicious meal at a time.     
            </p>
            <Link to="menu">View Menu</Link>
        </div>
    </div>
  )
}

export default Herosection