import { actGetFoodList, actGetFoodListByCategory } from "@store/foods/foodsSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks"
import { useEffect } from "react";

const useFoodList = () => {
    const dispatch = useAppDispatch();
    const {foodList, error, status} = useAppSelectore(state => state.foodList);
    const {foodIds} = useAppSelectore(state => state.wishlist);
    const jwt = useAppSelectore(state => state.auth.jwt);
    const fullfoodInfo = foodList.map(food => ({
        ...food,
        isAuthenticated: jwt ? true : false,
        isLiked: foodIds.includes(food.id as number) 
    }))

    useEffect(()=> {
        const promise = dispatch(actGetFoodList());
        return () => {
            promise.abort();
        }
    },[dispatch])

    const handleGetFoodListByCat = (catName: string) => {
        dispatch(actGetFoodListByCategory(catName));
    }

    return {
        fullfoodInfo,
        error,
        status,
        handleGetFoodListByCat
    }
}

export default useFoodList