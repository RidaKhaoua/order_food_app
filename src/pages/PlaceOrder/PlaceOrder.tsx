
import { CartTotal } from "@components/E-food";
import { Input } from "@components/forms";
import usePlaceOrder from "@hooks/usePlaceOrder";
import styles from "./style.module.css";
import { useAppSelectore } from "@store/hooks";

const { place_order, place_order_form, multi_fields } = styles;

function PlaceOrder() {
  const { fullfoodInfo, jwt } = usePlaceOrder();
  const { register, errors } = usePlaceOrder();
  const discountPrice = useAppSelectore(
    (state) => state.foodList.discountPrice
  );
  return (
    <div className={place_order}>
      <div className={place_order_form}>
        <h2>Delivery Information</h2>
        <form>
          <div className={multi_fields}>
            <Input
              type="text"
              register={register}
              name="firstName"
              placeHolder="firstName"
              error={errors.firstName?.message}
            />
            <Input
              type="text"
              register={register}
              name="lastName"
              placeHolder="lastName"
              error={errors.lastName?.message}
            />
          </div>
          <Input
            type="email"
            register={register}
            name="email"
            placeHolder="example@gmail.com"
            error={errors.email?.message}
          />
          <Input
            type="text"
            register={register}
            name="street"
            placeHolder="Street"
            error={errors.street?.message}
          />
          <div className="multi_fields">
            <Input
              type="text"
              register={register}
              name="city"
              placeHolder="City"
              error={errors.city?.message}
            />
            <Input
              type="text"
              register={register}
              name="country"
              placeHolder="Country"
              error={errors.country?.message}
            />
          </div>
          <Input
            type="text"
            register={register}
            name="phone"
            placeHolder="+211 6 00 00 00 00 "
            error={errors.phone?.message}
          />
        </form>
      </div>

      <CartTotal
        foods={fullfoodInfo}
        accessToken={jwt}
        discountVal={discountPrice}
      />
    </div>
  );
}

export default PlaceOrder;
