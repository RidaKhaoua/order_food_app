import { GridList } from "@components/Common";
import FoodItem from "@components/E-food/Foods/FoodItem/FoodItem";
import { Loading } from "@components/Feedback";
import useWishlist from "@hooks/useWishlist";
import styles from "./style.module.css";
import useModal from "@hooks/useModal";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "40px",
  rowGap: "30px",
};

const { wishlist } = styles;

function Wishlist() {
  const { status, error, fullWishlistFood } = useWishlist();
  const {handleShowModal} = useModal();
  return (
    <div className={wishlist}>
      <Loading status={status} error={error}>
        <GridList
          data={fullWishlistFood}
          renderData={(food) => <FoodItem {...food} handleShowModal={handleShowModal}/>}
          message="There are no Favorite Food"
          style={style}
        />
      </Loading>
    </div>
  );
}

export default Wishlist;
