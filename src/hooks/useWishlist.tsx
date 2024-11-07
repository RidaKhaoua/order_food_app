import { useAppDispatch, useAppSelectore } from "@store/hooks"
import { actGetLikedFoods } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";
import { cleanWishlist } from "@store/wishlist/wishlistSlice";


const useWishlist = () => {
    const accessToken = useAppSelectore(state => state.auth.jwt);
    const {status, error, foodIds, wishlistFoods} = useAppSelectore(state => state.wishlist);
    //add some props on Wishlist 
    const fullWishlistFood = wishlistFoods.length > 0 ? wishlistFoods.map(food => ({
        ...food,
        isLiked: true,
        isAuthenticated: true
    })) : []

    const dispatch = useAppDispatch();
    useEffect(() => {
        const promise = dispatch(actGetLikedFoods("wishlistFood"));
        return () => {
            promise.abort();
           dispatch(cleanWishlist());
        }
    },[dispatch])

    return {
        status,
        error,
        foodIds,
        accessToken,
        fullWishlistFood
    }
}

export default useWishlist