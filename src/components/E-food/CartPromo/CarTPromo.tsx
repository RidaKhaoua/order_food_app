import  { useRef } from "react";
import { Button } from "@components/ui";
import { Warning } from "@components/Feedback";
import styles from "./style.module.css";
import { useAppDispatch } from "@store/hooks";
import { discountTotalPrice, resetDiscount } from "@store/foods/foodsSlice";

const {
  cart_promo,
  cart_promo_title,
  cart_promo_input_button,
  cart_promo_input,
} = styles;

type TCartPromo = {
  discountVal: number;
};

function CarTPromo({ discountVal }: TCartPromo) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const handleDiscount = () => {
    if (discountVal === -1) dispatch(resetDiscount());
   const timeOut = setTimeout(() => {
      dispatch(discountTotalPrice(inputRef.current?.value as string));
    }, 1000);
    return () => clearTimeout(timeOut);
  };
  return (
    <div className={cart_promo}>
      <h5 className={cart_promo_title}>if you have promos code Enter it.</h5>
      <div className={cart_promo_input_button}>
        <div className={cart_promo_input}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your code"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (inputRef.current) inputRef.current.value = e.target.value;
            }}
          />
        </div>

        <Button
          type="button"
          style={{
            
            backgroundColor: "black",
            padding: "4px 22px",
            borderRadius: "4px",
            color: "white",
            border: "none",
          }}
          onClick={handleDiscount}>
          Submit
        </Button>
      </div>
      {discountVal === -1 && (
        <Warning text={`${inputRef.current?.value} is not available`} />
      )}
    </div>
  );
}

export default CarTPromo;
