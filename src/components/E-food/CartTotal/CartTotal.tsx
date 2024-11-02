import { Button } from "@components/ui";
import  { useMemo } from "react";
import styles from "./styles.module.css";
import { TFood } from "@types";
import { useLocation, useNavigate } from "react-router-dom";
import { Warning } from "@components/Feedback";

type TCartTotal = {
  foods: TFood[];
  accessToken?: string | null;
  discountVal?: number;
};

const { cart_totals, cart_total, delivery_info } = styles;

const deliveryFee = 2;

const PATH_NAME = import.meta.env.BASE_URL +  "placeOrder";

function CartTotal({ foods, accessToken, discountVal }: TCartTotal) {
  const navigate = useNavigate();
  const location = useLocation();

  const totalQuantity = foods
    .reduce(
      (acc, food) => acc + +food.price * (food.quantity ? food.quantity : 1),
      0
    )
    .toFixed(2);
 

  const totalDiscount = useMemo(() => {
    if (discountVal)
      return (+totalQuantity * (1 - discountVal / 100)).toFixed(2);
  }, [discountVal, totalQuantity]);
  return (
    <div className={cart_totals}>
      <h3>Cart Totals</h3>
      <div className={delivery_info}>
        <span>Subtotal</span>
        <span>{totalQuantity}$</span>
      </div>
      <div className={delivery_info}>
        <span>Delivery fee</span>
        <span>2</span>
      </div>
      <div className={`${cart_total} ${delivery_info}`}>
        <span>Total</span>
        <span>
          {
         discountVal && discountVal > 0
            ? totalDiscount
            : (+totalQuantity + deliveryFee).toFixed(2)
            }
            $
        </span>
      </div>
      {location.pathname !== PATH_NAME ? (
        <Button
          type="button"
          style={{
            backgroundColor: "tomato",
            padding: "10px 0",
            textAlign: "center",
            width: "200px",
            color: "white",
            border: "none",
            borderRadius: "2px",
            marginTop: "10px",
          }}
          onClick={() => navigate(PATH_NAME)}>
          PROCED TO CHECKOUT
        </Button>
      ) : accessToken ? (
        <Button
          type="button"
          style={{
            backgroundColor: "tomato",
            padding: "10px 0",
            textAlign: "center",
            width: "200px",
            color: "white",
            border: "none",
            borderRadius: "2px",
            marginTop: "10px",
          }}>
          PROCED TO CHECKOUT
        </Button>
      ) : (
        <Warning text="You should Login to procede checkout" />
      )}
    </div>
  );
}

export default CartTotal;
