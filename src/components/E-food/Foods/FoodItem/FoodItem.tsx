import { TFood } from "@types";
import FoodImg from "../FoodImg/FoodImg";
import FoodInfo from "../FoodInfo/FoodInfo";

import FoodAddQuantity from "../FoodAddQuantity/FoodAddQuantity";
import { useAppDispatch } from "@store/hooks";
import { addFoodToCart, minusFoodToCart } from "@store/Cart/cartSlice";
import { assets } from "@assets";
import { useCallback, useState } from "react";
import { actLikeProduct } from "@store/wishlist/wishlistSlice";
import { Spinner } from "@components/ui";
import styles from "./styles.module.css";


const { food_item, food_like, food_item_clicked } = styles;

type TFoodItem = TFood & {
  handleShowModal: () => void;
};

function FoodItem({
  id,
  name,
  image,
  price,
  description,
  category,
  isLiked,
  isAuthenticated,
  handleShowModal
}: TFoodItem) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const [isClicked, setIsClicked] = useState(false);

  const handleAddFood = useCallback( (id: string | number) => {
    dispatch(addFoodToCart(id));
  },[dispatch]);

  const handleMinusFood = useCallback((id: string | number) => {
    dispatch(minusFoodToCart(id));
  },[dispatch]);

  const handleLikeFood = useCallback((isAuthenticated: boolean) => {
    if (isAuthenticated) {
      setIsLoading(true);
      dispatch(actLikeProduct(id as number))
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      handleShowModal()
    }
  },[dispatch, isAuthenticated, handleShowModal]);

  return (
    <div className={`${food_item} ${isClicked ? food_item_clicked : ""}`}>
      <div className={food_like} onClick={() => handleLikeFood(isAuthenticated as boolean)}>
        {isLoading ? (
          <Spinner />
        ) : isLiked ? (
          <img src={assets.like_fill} alt="like fill" />
        ) : (
          <img src={assets.like} alt="like" />
        )}
      </div>
      <FoodImg img={image} />
      <FoodAddQuantity
        id={id}
        handleAddFood={handleAddFood}
        handleMinusFood={handleMinusFood}
        setIsClicked={setIsClicked}
      />
      <FoodInfo
        name={name}
        description={description}
        price={price}
        category={category}
      />
    </div>
  );
}

export default FoodItem;