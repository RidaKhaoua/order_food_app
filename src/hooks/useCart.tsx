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
  const fullfoodInfo = foods.length > 0 ? foods.map((food) => ({
    ...food,
    quantity: foodIdAndQuantity[food.documentId] || 0,
  })) : [];

  useEffect(() => {
    const promise = dispatch(actGetCartProducts());
    return () => {
     
      promise.abort();
    };
  }, [dispatch]);

  const handleAddFood = (documentId: string) => {
    dispatch(addFoodToCart(documentId));
  };

  const handleMinusFood = (documentId:string) => {
    dispatch(minusFoodToCart(documentId));
  };

  const handleRemoveFood = (documentId:string) => {
    dispatch(removeFoodFromCart(documentId));
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
