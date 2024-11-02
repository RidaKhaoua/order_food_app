import { assets } from "@assets";

import styles from "./style.module.css";

import { useAppSelectore } from "@store/hooks";
import React, { useEffect } from "react";

const { food_add_quantity, food_counter, food_quantity } = styles;

type TFoodAddQuantity = {
  id: number | string,
  handleAddFood: (id: string | number) => void,
  handleMinusFood: (id: string | number) => void,
  setIsClicked: (val: boolean) => void
}

const  FoodAddQuantity = React.memo(({id, handleAddFood, handleMinusFood, setIsClicked}: TFoodAddQuantity) => {
  const {foodIdAndQuantity} = useAppSelectore(state => state.cart);
  
  useEffect(() => {
    
    if(!foodIdAndQuantity[id]) {
      console.log("update state please");
      setIsClicked(false)
    }
  },[foodIdAndQuantity, id, setIsClicked])
  return (
    <div className={food_quantity}>
      {!foodIdAndQuantity[id] ? (
        <div className={food_add_quantity} onClick={() => { 
          setIsClicked(true);
          handleAddFood(id)
          }}>
          <img src={assets.add_icon_white} alt="acon add" />
        </div>
      ) : (
        <div className={food_counter}>
          <img
            src={assets.remove_icon_red}
            alt="icon plus"
            onClick={() => handleMinusFood(id)}
          />
          <p>{foodIdAndQuantity[id]}</p>
          <img
            src={assets.add_icon_green}
            alt="icon minus"
            onClick={() => handleAddFood(id)}
          />
        </div>
      )}
    </div>
  );
})

export default FoodAddQuantity;
