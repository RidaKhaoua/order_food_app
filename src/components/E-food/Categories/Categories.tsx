import { TCategory, TStatus } from "@types";
import Loading from "@components/Feedback/Loading/Loading";
import styles from "./style.module.css";
import CategorieList from "./CategorieList";
import useActiveLink from "@hooks/useActiveLink";
import { useAppDispatch } from "@store/hooks";
import { actGetFoodListByCategory } from "@store/foods/foodsSlice";
import { useCallback } from "react";

type TCategories = {
  data: TCategory[];
  status: TStatus;
  error: null | string;
};

const { categories } = styles;

function Categories({ data, status, error }: TCategories) {
  const { activeLink, handleActiveLink } = useActiveLink("All");
  const dispatch = useAppDispatch();
  
  const handleGetFoodByCat = useCallback((catName: string) => {
    dispatch(actGetFoodListByCategory(catName));
  },[dispatch])

  return (
    <Loading status={status} error={error} type="categorie">
      <div className={categories}>
        <CategorieList
          data={data}
          activeLink={activeLink}
          handleActiveLink={handleActiveLink}
          handleGetFoodByCat={handleGetFoodByCat}
        />
        <hr />
      </div>
    </Loading>
  );
}

export default Categories;
