

import { memo } from "react";
import styles from "./styles.module.css";
import { assets } from '@assets';


type TFoodInfo = {
    name: string,
    description:string,
    price: number,
    category: string
}

const {food_info, food_name_rating, food_desc, food_price, food_cat} = styles

function FoodInfo({name, description, price, category}:TFoodInfo) {
  return (
    <div className={food_info}>
      <div className={food_cat}>
        {category}
      </div>
        <div className={food_name_rating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className={food_desc}>
          {description}
        </p>
        <div className={food_price}>
          ${price}
        </div>
      </div>
  )
}

export default memo(FoodInfo)