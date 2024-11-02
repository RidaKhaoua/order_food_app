import { GridList } from "@components/Common";
import Loading from "@components/Feedback/Loading/Loading";
import useFoodList from "@hooks/useFoodList";

import FoodItem from "./FoodItem/FoodItem";
import { TFood } from "@types";
import { LottieHandler } from "@components/Feedback";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gridAutoRows:"1fr",
  gap: "40px",
  rowGap: "30px",
};

type TFoods = {
  handleShowModal: () => void;
};

function Foods({ handleShowModal }: TFoods) {
  const { fullfoodInfo, status, error } = useFoodList();
  return (
    <>
      <Loading status={status} error={error}>
        {fullfoodInfo.length > 0 ? (
          <GridList<TFood>
            style={style}
            data={fullfoodInfo}
            renderData={(item) => (
              <FoodItem {...item} handleShowModal={handleShowModal} />
            )}
            message="There no Food list"
          />
        ) : (
          <LottieHandler type="empty" message="There are no Foods" />
        )}
      </Loading>
    </>
  );
}

export default Foods;
