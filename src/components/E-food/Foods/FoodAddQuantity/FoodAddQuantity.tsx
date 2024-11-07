import { assets } from "@assets";

import styles from "./style.module.css";

import { useAppSelectore } from "@store/hooks";
import React, { memo, useEffect } from "react";

const { food_add_quantity, food_counter, food_quantity } = styles;

type TFoodAddQuantity = {
  documentId: string,
  handleAddFood: (documentId:  string) => void,
  handleMinusFood: (documentId: string) => void,
  setIsClicked: (val: boolean) => void
}

const  FoodAddQuantity = React.memo(({documentId, handleAddFood, handleMinusFood, setIsClicked}: TFoodAddQuantity) => {
  const {foodIdAndQuantity} = useAppSelectore(state => state.cart);
  
  useEffect(() => {
    
    if(!foodIdAndQuantity[documentId]) {
      console.log("update state please");
      setIsClicked(false)
    }
  },[foodIdAndQuantity, documentId, setIsClicked])
  return (
    <div className={food_quantity}>
      {!foodIdAndQuantity[documentId] ? (
        <div className={food_add_quantity} onClick={() => { 
          setIsClicked(true);
          handleAddFood(documentId)
          }}>
          <img src={assets.add_icon_white} alt="acon add" />
        </div>
      ) : (
        <div className={food_counter}>
          <img
            src={assets.remove_icon_red}
            alt="icon plus"
            onClick={() => handleMinusFood(documentId)}
          />
          <p>{foodIdAndQuantity[documentId]}</p>
          <img
            src={assets.add_icon_green}
            alt="icon minus"
            onClick={() => handleAddFood(documentId)}
          />
        </div>
      )}
    </div>
  );
})

export default memo(FoodAddQuantity);
