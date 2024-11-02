import { actGetCategories } from "@store/categories/categorieSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks"
import { useEffect } from "react";

const useCategorie = () => {
    const dispatch = useAppDispatch();
    const {categories, status, error} = useAppSelectore(state => state.categories);

    useEffect(() => {
        const promise = dispatch(actGetCategories());

        return () => {
            promise.abort();
        }
    },[dispatch])

    return {
        categories,
        status,
        error
    }
}

export default useCategorie