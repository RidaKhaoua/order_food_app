import { Img } from "@components/ui";
import { assets } from "@assets";
import styles from "../style.module.css";
import { Button } from "@components/ui";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import cartTotalQuantitySelectore from "@store/Cart/selectores/selectors";
import { resetAuth } from "@store/auth/authSlice";
import NavbarQuantity from "../NavbarQuatity/NavbarQuantity";
import { cleanWishlist } from "@store/wishlist/wishlistSlice";
import toast from "react-hot-toast";

const btnStyle = {
  backgroundColor: "transparent",
  borderRadius: "50px",
  padding: "8px 16px",
  color: "black",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
};

type TNavbarRight = {
  setIsVisibleShowLoginPopUp: (val: boolean) => void;
};

const {
  navbar_right,
  navbar_right_login,
} = styles;

function NavbarRight({ setIsVisibleShowLoginPopUp }: TNavbarRight) {
  const accessToken = useAppSelectore((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handelShowLogin = () => {
    setIsVisibleShowLoginPopUp(true);
  };

  const cartTotalQuantity = useAppSelectore(cartTotalQuantitySelectore);
  const wishlistQuantity = useAppSelectore(
    (state) => state.wishlist.foodIds.length
  );

  return (
    <div className={navbar_right}>
      <Img imgName={assets.search_icon} title="search_icon" />

      <NavbarQuantity
        TotalQuantity={wishlistQuantity}
        icon={assets.favorite_icon}
        page="wishlist"
      />

      <NavbarQuantity
        TotalQuantity={cartTotalQuantity}
        icon={assets.basket_icon}
        page="cart"
      />

      <div className={navbar_right_login}>
        {!accessToken ? (
          <Button
            className="sing-in"
            type="button"
            disabled={false}
            style={btnStyle}
            onClick={handelShowLogin}>
            Sing In
          </Button>
        ) : (
          <Button
            className="logOut"
            type="button"
            disabled={false}
            style={btnStyle}
            onClick={() => {
              dispatch(resetAuth())
              dispatch(cleanWishlist())
              if (searchParams.get("message")) setSearchParams("");
              navigate("/")
              toast("you are Loged out.",{
                icon:"✌️"
              })
            }}>
            logOut
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavbarRight;
