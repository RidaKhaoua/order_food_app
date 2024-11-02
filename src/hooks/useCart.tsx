import {
  actGetCartProducts,
  addFoodToCart,
  minusFoodToCart,
  removeFoodFromCart,
} from "@store/Cart/cartSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import { useEffect } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { status, error, foodIdAndQuantity, foods } = useAppSelectore(
    (state) => state.cart
  );

  const discountPrice = useAppSelectore(state => state.foodList.discountPrice);
  const fullfoodInfo = foods.map((food) => ({
    ...food,
    quantity: foodIdAndQuantity[food.id] || 0,
  }));

  useEffect(() => {
    const promise = dispatch(actGetCartProducts());
    return () => {
     
      promise.abort();
    };
  }, [dispatch]);

  const handleAddFood = (id: number | string) => {
    dispatch(addFoodToCart(id));
  };

  const handleMinusFood = (id: number | string) => {
    dispatch(minusFoodToCart(id));
  };

  const handleRemoveFood = (id: number |string) => {
    dispatch(removeFoodFromCart(id));
  }

  return {
    status,
    error,
    foodIdAndQuantity,
    fullfoodInfo,
    discountPrice,
    handleRemoveFood,
    handleAddFood,
    handleMinusFood,
  };
};

export default useCart;
