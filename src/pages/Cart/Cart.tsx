import { Table } from "@components/ui";
import useCart from "@hooks/useCart";
import { headers } from "@constantData/constantData";
import { CarTPromo, CartTotal } from "@components/E-food";
import styles from "./style.module.css";
import { Loading, LottieHandler } from "@components/Feedback";

import { useAppSelectore } from "@store/hooks";


const { cart, cart_total_promo } = styles;

function Cart() {
  const { status, error, fullfoodInfo } = useCart();
  const discountPrice = useAppSelectore(
    (state) => state.foodList.discountPrice
  );

  

  return (
    <div className={cart}>
      <Loading status={status} error={error}>
        {fullfoodInfo.length > 0 ? (
          <>
            <Table data={fullfoodInfo} headers={headers} />
            <div className={cart_total_promo}>
              <CartTotal foods={fullfoodInfo} discountVal={discountPrice} />
              <CarTPromo discountVal= {discountPrice} />
            </div>
          </>
        ) : (
          <LottieHandler type="empty" message="There are no products" />
        )}
      </Loading>
    </div>
  );
}

export default Cart;
