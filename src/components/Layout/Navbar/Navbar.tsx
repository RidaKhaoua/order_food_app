import  { memo, useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import { Container, Img } from "@components/ui";
import { assets } from "@assets";
import NavList from "./NavList/NavList";
import { navData } from "@constantData/constantData";
import NavbarRight from "./NavbarRight/NavbarRight";
import useActiveLink from "@hooks/useActiveLink";
import LoginPopUp from "@components/Common/LoginPopUp/LoginPopUp";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import actGetLikedFoods from "@store/wishlist/act/actGetLikedFoods";

const {
  navbar,
  navbar_content,
  navbar_logo,
  navbar_links_icons,
  navbar_menu,
  navbar_links_icons_visible,
  navbar_close
} = styles;

function Navbar() {
  const accessToken = useAppSelectore(state => state.auth.accessToken);

  const { activeLink, handleActiveLink } = useActiveLink("home");
  const [isVisibleShowLoginPopUp, setIsVisibleShowLoginPopUp] = useState(false);
  const [isVisibleMenu, setisVisibleMenu] = useState(false);
  const dispatch = useAppDispatch();

  const handleVisibleMenu = useCallback(() => {
    setisVisibleMenu((prev) => !prev);
  },[]);

  const handleVisibleShowLoginPopUp = useCallback(() => {
    setIsVisibleShowLoginPopUp(true);
  },[])

  useEffect(() => {
    if(accessToken) {
      dispatch(actGetLikedFoods("foodIds"));
    }
  },[dispatch, accessToken])

  return (
    <nav className={navbar}>
      <Container>
        <div className={navbar_content}>
          <Link to="/order_food_app">
            <Img className={navbar_logo} imgName={assets.logo} title="logo" />
          </Link>
          <div
            className={`${navbar_links_icons} ${
              isVisibleMenu ? navbar_links_icons_visible : ""
            }`}>
              <div className={navbar_close} onClick={handleVisibleMenu}>
                <img src={assets.cross_icon} alt="close icon" />
              </div>
            <NavList
              data={navData}
              activeLink={activeLink}
              handleActiveLink={handleActiveLink}
            />
            <NavbarRight
              handleVisibleShowLoginPopUp={handleVisibleShowLoginPopUp}
            />
          </div>
          <div className={navbar_menu} onClick={handleVisibleMenu}>
            <img src={assets.menu_icon} alt="menu icon" />
          </div>
        </div>
      </Container>
      <LoginPopUp
        isVisibleShowLoginPopUp={isVisibleShowLoginPopUp}
        setIsVisibleShowLoginPopUp={setIsVisibleShowLoginPopUp}
      />
    </nav>
  );
}

export default memo(Navbar);
