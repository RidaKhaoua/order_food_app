
import { memo } from "react";
import styles from "./styles.module.css";

const {food_img} = styles

type TFoodImg = {
    img: string
}

function FoodImg({img}: TFoodImg) {
  return (
    <div className={food_img}>
    <img src={img} alt="" loading="lazy" />
  </div>
  )
}

export default memo(FoodImg)