import { TCategory, TStatus } from "@types";

import Loading from "@components/Feedback/Loading/Loading";
import styles from "./style.module.css";
import CategorieHeading from "./CategorieHeading";
import CategorieList from "./CategorieList";
import useActiveLink from "@hooks/useActiveLink";
import { useAppDispatch } from "@store/hooks";
import { actGetFoodListByCategory } from "@store/foods/foodsSlice";

type TCategories = {
  data: TCategory[];
  status: TStatus;
  error: null | string;
};

const { categories } = styles;

function Categories({ data, status, error }: TCategories) {
  const { activeLink, handleActiveLink } = useActiveLink("All");
  const dispatch = useAppDispatch();
  
  const handleGetFoodByCat = (catName: string) => {
    dispatch(actGetFoodListByCategory(catName));
  }

  return (
    <Loading status={status} error={error}>
      <div className={categories}>
        <CategorieHeading />
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
