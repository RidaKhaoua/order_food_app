
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type TNvbarQuantity = {
  TotalQuantity: number;
  icon: string;
  page: string;
};

const { navbar_quantity, navbar_total } = styles;

function NavbarQuantity({ TotalQuantity, icon, page }: TNvbarQuantity) {
  return (
    <Link to={`${import.meta.env.BASE_URL + page}`}>
      <div className={navbar_quantity}>
        <img src={icon} alt="icon" />
        <div className={navbar_total}>{TotalQuantity}</div>
      </div>
    </Link>
  );
}

export default NavbarQuantity;
