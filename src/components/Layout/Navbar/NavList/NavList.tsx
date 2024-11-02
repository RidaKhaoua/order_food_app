
import { Link } from "react-router-dom";
import styles from "../style.module.css";
import { memo } from "react";


type TNavList = {
  data: string[];
  activeLink : string,
  handleActiveLink: (activeLink: string) => void
};

const { navbar_list } = styles;
const LINK_IS_Home = "Home";

const  NavList = memo(({ data, activeLink, handleActiveLink }: TNavList) => {
 
  const displayData = data.map((item) => {
    return (
      <li key={item} onClick={() => handleActiveLink(item)}>
        <Link
          key={item}
          to={item === LINK_IS_Home ? "/" : item}
          className={item === activeLink ? styles["active-link"] : ""}>
          {item}
        </Link>
      </li>
    );
  });
  return <ul className={navbar_list}>{displayData}</ul>;
})

export default NavList;
